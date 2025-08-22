import { api } from "../lib/api";

export interface ShortlistFormData {
  name: string;
  company: string;
  roleTitle: string;
  tools: string;
  industry: string;
  location: string;
  urgency: string;
  email: string;
}

export const submitShortlist = async (data: ShortlistFormData) => {
  const res = await api.post("/shortlist", data);
  return res.data;
};
