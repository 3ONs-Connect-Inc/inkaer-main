
import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import DOMPurify from "dompurify";
import { z } from "zod";
import { uploadFileToR2 } from "@/utils/lib/r2Upload";


export const ApplicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  coverLetter: z.string().max(5000).optional(),
  resume: z.instanceof(File, { message: "Resume file required" }),
  agreedToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept terms" }),
  }),
});

export type ApplicationData = z.infer<typeof ApplicationSchema>;

export async function submitApplication(jobId: string, data: ApplicationData) {
  // Upload resume to Cloudflare R2
  let resumeUrl: string;
  try {
    resumeUrl = await uploadFileToR2(data.resume, () => {});
  } catch (err) {
    throw new Error("Resume upload failed");
  }

  // Sanitize text fields
  const sanitizedCoverLetter = DOMPurify.sanitize(data.coverLetter || "");

  // Save metadata to Firestore
  const docRef = await addDoc(collection(db, "applications"), {
    jobId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || null,
    coverLetter: sanitizedCoverLetter,
    resumeUrl,
    createdAt: serverTimestamp(),
  });

  return { id: docRef.id, resumeUrl };
}
