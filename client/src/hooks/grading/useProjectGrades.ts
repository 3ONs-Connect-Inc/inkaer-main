import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import type { Grade, Vote } from "@/types/types";
import { db } from "@/firebase/config";

export const useProjectGrades = (projectId: string) => {
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    const gradeQuery = query(
      collection(db, "portfolios", projectId, "grades"),
      orderBy("timestamp", "desc")
    );

    const unsubscribeGrades = onSnapshot(gradeQuery, (gradeSnapshot) => {
      const gradeDocs = gradeSnapshot.docs;

      const unsubscribeVotesList: (() => void)[] = [];

      const initialGrades: Grade[] = gradeDocs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...(data as Omit<Grade, "id" | "votes">),
          timestamp: data.timestamp?.toDate()?.toISOString() || new Date().toISOString(),
          votes: [], // will fill in real-time
        };
      });

      setGrades(initialGrades);

      // Set up a real-time listener for each grade's votes
      gradeDocs.forEach((gradeDoc) => {
        const gradeId = gradeDoc.id;
        const votesRef = collection(
          db,
          "portfolios",
          projectId,
          "grades",
          gradeId,
          "votes"
        );

        const unsubscribeVotes = onSnapshot(votesRef, (voteSnapshot) => {
          setGrades((prevGrades) =>
            prevGrades.map((grade) =>
              grade.id === gradeId
                ? {
                    ...grade,
                    votes: voteSnapshot.docs.map((voteDoc) => ({
                      id: voteDoc.id,
                      ...(voteDoc.data() as Omit<Vote, "id">),
                      timestamp:
                        voteDoc.data().timestamp?.toDate()?.toISOString() ||
                        new Date().toISOString(),
                    })),
                  }
                : grade
            )
          );
        });

        unsubscribeVotesList.push(unsubscribeVotes);
      });

      // Cleanup vote listeners when grade list changes
      return () => {
        unsubscribeVotesList.forEach((unsubscribe) => unsubscribe());
      };
    });

    return () => unsubscribeGrades();
  }, [projectId]);

  return { grades };
};
