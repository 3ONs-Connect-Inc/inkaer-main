import { doc, getDoc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "./config";

// Utility to generate a unique ID
export const generateUniqueProjectId = () => {
  return uuidv4();
};

// Determine rank based on points
const getRankByPoints = (points: number): string => {
  if (points >= 5000) return "Elite";
  if (points >= 3001) return "Expert";
  if (points >= 1501) return "Advanced";
  if (points >= 501) return "Intermediate";
  if (points >= 1) return "Beginner";
  return "Novice";
};

// Define type for a single domain entry
type DomainStats = {
  points: number;
  rank: string;
};

// Define type for domains object
type DomainsData = {
  [domainName: string]: DomainStats;
};

// Main function to update user points/rank per domain
export const updateUserPointsAndRank = async (
  userId: string,
  domain: string
): Promise<void> => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  let domainsData: DomainsData = {};

  if (userSnap.exists()) {
    const userData = userSnap.data();
    domainsData = userData.domains || {};
  }

  const currentPoints = domainsData[domain]?.points || 0;
  const newPoints = currentPoints + 100;
  const newRank = getRankByPoints(newPoints);

  const updatedDomainData: DomainsData = {
    ...domainsData,
    [domain]: {
      points: newPoints,
      rank: newRank,
    },
  };

  await setDoc(
    userRef,
    { domains: updatedDomainData },
    { merge: true }
  );
};
