import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  const docRef = await addDoc(collection(db, "contactMessages"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return { id: docRef.id };
};
