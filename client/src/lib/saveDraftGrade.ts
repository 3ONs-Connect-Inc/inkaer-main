export const GRADE_DRAFT_KEY = "grade-draft";

export interface GradeDraft {
  comment: string;
  rating: number;
  projectId: string;
  userId: string;
  timestamp: number;
}

export const saveGradeDraft = (draft: GradeDraft) => {
  localStorage.setItem(GRADE_DRAFT_KEY, JSON.stringify(draft));
};

export const getGradeDraft = (): GradeDraft | null => {
  const saved = localStorage.getItem(GRADE_DRAFT_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (err) {
    console.error("Failed to parse grade draft", err);
    return null;
  }
};

export const clearGradeDraft = () => {
  localStorage.removeItem(GRADE_DRAFT_KEY);
};
