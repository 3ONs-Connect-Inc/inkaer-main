import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import type { RootState } from "@/redux/store";
import { clearGradeDraft, getGradeDraft, saveGradeDraft } from "@/lib/saveDraftGrade";
import { redirectToLoginWithReturnUrl } from "../auth/redirectToLogin";
import {  capitalizeFullName } from "@/lib/helper";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { updateUserPointsAndRank } from "@/firebase/pointsManager";
import type { Project } from "@/types/types";


export const useGradeSubmission = (
  projectId: string,
  setIsGradeDialogOpen: (open: boolean) => void,
  newGrade: { rating: number; comment: string },
  setNewGrade: (grade: { rating: number; comment: string }) => void,
  project: Project | null 
) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.session.user);
const domain = project?.domain ?? ""; 
  const handleGradeSubmit = async () => {
    if (!currentUser) {
      saveGradeDraft({
        comment: newGrade.comment,
        rating: newGrade.rating,
        projectId,
        userId: "unknown",
        timestamp: Date.now(),
      });

      toast.error("You must be signed in to grade this project.");
      redirectToLoginWithReturnUrl(navigate, `/portfolio/${projectId}`);
      return;
    }

    if (!newGrade.comment.trim()) {
      toast.error("Please add a comment before submitting your grade.");
      return;
    }

    try {
      const gradeData = {
        rating: newGrade.rating,
        comment: newGrade.comment,
        timestamp: serverTimestamp(),
        author: currentUser.displayName
          ? capitalizeFullName(currentUser.displayName)
          : "Anonymous",
        votes: [],
      };

      await addDoc(collection(db, "portfolios", projectId, "grades"), gradeData);

     await updateUserPointsAndRank(currentUser.uid, domain, 15);
      setNewGrade({ rating: 5, comment: "" });
      clearGradeDraft();
      setIsGradeDialogOpen(false);
      toast.success("Grade submitted successfully! +15 points awarded");
    } catch (err) {
      toast.error("Failed to submit grade.");
      console.error("Error submitting grade:", err);
    }
  };

  const restoreGradeDraft = () => {
    const draft = getGradeDraft();
    if (draft && draft.projectId === projectId) {
      setNewGrade({ rating: draft.rating, comment: draft.comment });
      clearGradeDraft();
      toast.success("Restored previous grade draft.");
    }
  };

  return {
    handleGradeSubmit,
    restoreGradeDraft,
  };
};
