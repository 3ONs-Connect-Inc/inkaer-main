import { db } from "@/firebase/config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import type { Project } from "@/types/types";

export const fetchAllProjects = async (): Promise<Project[]> => {
  const snapshot = await getDocs(collection(db, "portfolios"));
  const projects: Project[] = [];

  for (const docSnap of snapshot.docs) {
    const data = docSnap.data();

    const userRef = doc(db, "users", data.userId);
    const userSnap = await getDoc(userRef);

    const userData = userSnap.exists() ? userSnap.data() : null;

    const domain = data.domain;
    const rank = userData?.domains?.[domain]?.rank || "Unranked";
    const author = userData
      ? `${userData.firstName || ""} ${userData.lastName || ""}`.trim()
      : "Unknown";

    projects.push({
     id: docSnap.id,
     projectId: data.projectId || docSnap.id,
      title: data.title,
      type: data.type || "portfolio",
      tags: data.tags || [],
      image: data.stepFileUrl,
      rank: rank,
      author: author,
      domain: domain,
      userId: data.userId,
      stepFileUrl: data.stepFileUrl,
      pdfFileUrl: data.pdfFileUrl,
      explanation: data.explanation,
      timestamp: data.timestamp,
    });
  }

  return projects;
};
