import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";


// Fetch the current rank and points for a user in a given domain
export const fetchUserRankData = async (
  userId: string,
  domain: string
): Promise<{ rank: string; points: number; nextRankPoints: number }> => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    throw new Error("User not found");
  }

  const userData = userSnap.data();
  const domainData = userData.domains?.[domain] || { rank: "Novice", points: 0 };

  // Define next rank thresholds

  const nextRankPoints = (() => {
    switch (domainData.rank) {
      case "Novice": return 1;
      case "Beginner": return 501;
      case "Intermediate": return 1501;
      case "Advanced": return 3001;
      case "Expert": return 5000;
      default: return Infinity;
    }
  })();

  return {
    rank: domainData.rank,
    points: domainData.points,
    nextRankPoints,
  };
};
