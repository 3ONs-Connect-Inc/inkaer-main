
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./config";

export interface SupportFormData {
  name: string;
  email: string;
  category: string;
  subject: string;
  description: string;
}

export const submitSupportRequest = async (data: SupportFormData) => {
  try {
    const docRef = await addDoc(collection(db, "supportRequests"), {
      ...data,
      createdAt: Timestamp.now(),
      status: "Pending", // track request status
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting support request:", error);
    return { success: false, error };
  }
};
