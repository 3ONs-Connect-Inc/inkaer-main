import { submitContactForm, type ContactFormData } from "@/utils/api/contact";
import { useMutation } from "@tanstack/react-query";


export const useContactMutation = () => {
  return useMutation({
    mutationFn: (data: ContactFormData) => submitContactForm(data),
  });
};
