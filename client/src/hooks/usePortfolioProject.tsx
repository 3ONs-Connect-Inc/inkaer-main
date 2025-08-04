import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import type { Project } from "@/types/types";
import { db } from "@/firebase/config";

export const usePortfolioProject = (userId?: string) => {
  const [project, setProject] = useState<Project | null>(null);
  const [authorName, setAuthorName] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      if (!userId) {
        toast.error("User ID is missing");
        return;
      }

      try {
        setIsLoading(true);

        const projectQuery = query(
          collection(db, "portfolios"),
          where("userId", "==", userId),
          orderBy("timestamp", "desc"),
          limit(1)
        );

        const querySnapshot = await getDocs(projectQuery);

        if (!querySnapshot.empty) {
          const docSnap = querySnapshot.docs[0];
          const data = docSnap.data() as Project;
          setProject(data);

          // Fetch user
          const userRef = doc(db, "users", data.userId);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const user = userSnap.data();
            const capitalize = (str: string) =>
              str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
            const name = `${capitalize(user.firstName)} ${capitalize(user.lastName)}`;
            setAuthorName(name);
          }

          // Format date
          if (data.timestamp?.toDate) {
            const timeAgo = formatDistanceToNow(data.timestamp.toDate(), { addSuffix: true });
            setSubmissionDate(timeAgo);
          }
        } else {
          toast.error(`No portfolio found for user ID ${userId}`);
        }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
        toast.error("Failed to load project data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [userId]);

  return { project, isLoading, authorName, submissionDate };
};
