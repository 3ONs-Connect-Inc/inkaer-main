import { uploadFileToR2 } from "@/lib/fileUpload";
import { generateUniqueProjectId, updateUserPointsAndRank } from "./pointsManager";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";



interface SubmitProjectPayload {
  userId: string;
  title: string;
  stepFile: File;
  pdfFile: File;
  explanation: string;
  domain: string;
  tags: string[];
  type: string;
  setIsLoading: (loading: boolean) => void;
}

export const submitProject = async ({
  userId,
  title,
  stepFile,
  pdfFile,
  explanation,
  domain,
  tags,
  type,
  setIsLoading,
}: SubmitProjectPayload) => {
  const stepFileUrl = await uploadFileToR2(stepFile, setIsLoading);
  const pdfFileUrl = await uploadFileToR2(pdfFile, setIsLoading);
  const projectId = generateUniqueProjectId();

  await addDoc(collection(db, "portfolios"), {
    userId,
    title,
    stepFileUrl,
    pdfFileUrl,
    explanation,
    domain,
    tags,
     type,
    projectId,
    timestamp: new Date(),
  });

  await updateUserPointsAndRank(userId, domain);
   return projectId;
};
