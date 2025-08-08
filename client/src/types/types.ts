export interface Project {
    id: string;
    title: string;
    type: string;
    tags: string[];
    image?: string;
    rank: string;
    author?: string;
    domain: string;
    subdomain?: string;
    stats?: ProjectStats[];
    projectId: string;
  userId?: string;
  stepFileUrl?: string;
  pdfFileUrl?: string;  
  explanation?: string;
  submissionDate?: string;
  timestamp?: any;
  grades?: Grade[];
}
export type ProjectStats = {
  duration?: string | null;
  participants?: number;
  rating?: number;
};
export interface Grade {
  id: string;
  rating: number;
  comment: string;
  timestamp: string;
  author: string;
  votes: Vote[];
}

export interface Vote {
  id: string;
  type: "upvote" | "downvote";
  comment: string;
  timestamp: string;
  author: string;
}



