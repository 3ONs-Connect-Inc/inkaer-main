import { db } from "@/firebase/config";
import { collection, getDocs, doc, getDoc, query, orderBy } from "firebase/firestore";
import type { Project } from "@/types/types";
import { capitalizeFullName } from "@/lib/helper";

export const fetchAllProjects = async (): Promise<Project[]> => {
  const q = query(collection(db, "portfolios"), orderBy("timestamp", "desc"));
  const snapshot = await getDocs(q);

  const portfolios: Project[] = [];

  for (const docSnap of snapshot.docs) {
    const data = docSnap.data();
    const projectId = data.projectId || docSnap.id;

    let rank = "Unranked";
    let author = "Unknown";

    // Fetch user info
    try {
      const userRef = doc(db, "users", data.userId);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.exists() ? userSnap.data() : null;

      rank = userData?.domains?.[data.domain]?.rank || "Unranked";
      author = (() => {
        if (!userData) return "Unknown";
        const first = userData.firstName || "";
        const last = userData.lastName || "";
        if (first || last) return capitalizeFullName(`${first} ${last}`.trim());
        if (userData.displayName) return capitalizeFullName(userData.displayName);
        return "Unknown";
      })();
    } catch (err) {
      console.warn(`Failed to fetch user for project ${projectId}`, err);
    }

    // Fetch participants
    let participants = 0;
    try {
      const commentSnap = await getDocs(
        collection(db, "portfolios", projectId, "comments")
      );
      const commentUserIds = commentSnap.docs.map((doc) => doc.data().userId);

      const gradesSnap = await getDocs(
        collection(db, "portfolios", projectId, "grades")
      );
      const voteUserIds: string[] = [];

      for (const gradeDoc of gradesSnap.docs) {
        const votesSnap = await getDocs(
          collection(
            db,
            "portfolios",
            projectId,
            "grades",
            gradeDoc.id,
            "votes"
          )
        );
        voteUserIds.push(...votesSnap.docs.map((vote) => vote.data().userId));
      }

      const uniqueUserIds = new Set([...commentUserIds, ...voteUserIds]);
      participants = uniqueUserIds.size;
    } catch (err) {
      console.warn(`Failed to fetch participants for project ${projectId}`, err);
    }

    // Fetch average rating
    let rating = 0;
    try {
      const gradesSnap = await getDocs(
        collection(db, "portfolios", projectId, "grades")
      );
      const grades = gradesSnap.docs.map((doc) => doc.data().rating);
      rating =
        grades.length > 0
          ? grades.reduce((sum, r) => sum + r, 0) / grades.length
          : 0;
    } catch (err) {
      console.warn(`Failed to fetch grades for project ${projectId}`, err);
    }

    portfolios.push({
      id: docSnap.id,
      projectId,
      title: data.title,
      type: data.type || "portfolio",
      tags: data.tags || [],
      image: data.stepFileUrl,
      rank,
      author,
      domain: data.domain,
      userId: data.userId,
      stepFileUrl: data.stepFileUrl,
      pdfFileUrl: data.pdfFileUrl,
      explanation: data.explanation,
      timestamp: data.timestamp,
      stats: [
        {
          participants,
          rating: parseFloat(rating.toFixed(1)),
          duration: data.duration || undefined,
        },
      ],
    });
  }

  return portfolios;
};
