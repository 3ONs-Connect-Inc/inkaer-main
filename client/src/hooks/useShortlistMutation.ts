import { submitShortlist, type ShortlistFormData } from "@/utils/api/shortlist";
import { useMutation } from "@tanstack/react-query";


export const useShortlistMutation = () => {
  return useMutation({
    mutationFn: (data: ShortlistFormData) => submitShortlist(data),
  });
};
  