import { useSelector } from "react-redux";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type { RootState } from "@/redux/store";
import { redirectToLoginWithReturnUrl } from "../auth/redirectToLogin";
import { db } from "@/firebase/config";
import { capitalizeFullName } from "@/lib/helper";
import { updateUserPointsAndRank } from "@/firebase/pointsManager";
import type { Project } from "@/types/types";



export const useVoteSubmission = (
  projectId: string,
  selectedGradeId: string,
  voteType: "upvote" | "downvote",
  voteComment: string,
  setVoteComment: (comment: string) => void,
  setIsVoteDialogOpen: (open: boolean) => void,
  project: Project | null 
) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.session.user);
const domain = project?.domain ?? ""; 
  const handleVoteSubmit = async () => {
    if (!currentUser) {
      toast.error("You must be signed in to vote.");
      redirectToLoginWithReturnUrl(navigate, `/portfolio/${projectId}`);
      return;
    }

    if (!voteComment.trim()) {
      toast.error("Please add a comment before submitting your vote.");
      return;
    }

    try {
      // Reference to the user's vote document (userId as doc ID)
      const voteDocRef = doc(
        db,
        "portfolios",
        projectId,
        "grades",
        selectedGradeId,
        "votes",
        currentUser.uid // <-- user's UID as the vote document ID
      );

      // Check if vote already exists
      const existingVote = await getDoc(voteDocRef);
      if (existingVote.exists()) {
        toast.warning("You've already voted on this grade.");
        return;
      }

      const vote = {
        type: voteType,
        comment: voteComment,
        timestamp: serverTimestamp(),
        author: currentUser.displayName
          ? capitalizeFullName(currentUser.displayName)
          : "Anonymous",
        userId: currentUser.uid,
        projectId,
      };

      // Write the vote using the user's UID as the doc ID
      await setDoc(voteDocRef, vote);
      await updateUserPointsAndRank(currentUser.uid, domain, 5);
      setVoteComment("");
      setIsVoteDialogOpen(false);
      toast.success(`${voteType === "upvote" ? "Upvote" : "Downvote"} submitted!`);
    } catch (error) {
      console.error("Failed to submit vote:", error);
      toast.error("Error submitting vote.");
    }
  };

  return {
    handleVoteSubmit,
  };
};
