
import { useMutation } from "@tanstack/react-query";
import {
  ApplicationSchema,
  submitApplication,
  type ApplicationData,
} from "@/firebase/applicationService";
import { toast } from "sonner";

export function useSubmitApplication(jobId: string) {
  return useMutation({
    mutationFn: (data: ApplicationData) => submitApplication(jobId, data),
    onSuccess: () => {
      toast.success("Application submitted! We’ll review it soon.");
    },
    onError: (err: any) => {
      toast.error(err.message || "Something went wrong.");
    },
  });
}

export { ApplicationSchema };
