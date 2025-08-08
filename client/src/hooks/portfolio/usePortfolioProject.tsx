import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import type { Project } from "@/types/types";
import { db } from "@/firebase/config";

export const usePortfolioProject = (projectId?: string) => {
  const [project, setProject] = useState<Project | null>(null);
  const [authorName, setAuthorName] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) {
        toast.error("Missing project ID");
        return;
      }

      try {
        setIsLoading(true);

        const projectQuery = query(
          collection(db, "portfolios"),
          where("projectId", "==", projectId)
        );

        const snapshot = await getDocs(projectQuery);

        if (!snapshot.empty) {
          const docSnap = snapshot.docs[0];
          const data = docSnap.data() as Project;
          setProject(data);

          // Fetch author
          if (data.userId) {
            const userRef = doc(db, "users", data.userId);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
              const user = userSnap.data();
              const capitalize = (s: string) =>
                s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";

              let name = "Unknown";

              if (user.firstName || user.lastName) {
                name = `${capitalize(user.firstName)} ${capitalize(
                  user.lastName
                )}`.trim();
              } else if (user.displayName) {
                name = user.displayName;
              }

              setAuthorName(name);
            }
          }

          // Format submission date
          if (data.timestamp?.toDate) {
            const timeAgo = formatDistanceToNow(data.timestamp.toDate(), {
              addSuffix: true,
            });
            setSubmissionDate(timeAgo);
          }
        } else {
          toast.error(`No project found for ID: ${projectId}`);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        toast.error("Failed to load portfolio");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  return { project, isLoading, authorName, submissionDate };
};
