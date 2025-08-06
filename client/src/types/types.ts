export interface Project {
    id: string;
    title: string;
    type: string;
    tags: string[];
    image?: string;
    rank: string;
    author?: string;
    domain: string;
    stats?: { participants?: number; duration?: string }[];
    rating?: number;
    comments?: number;
    projectId: string;
  userId?: string;
  stepFileUrl?: string;
  pdfFileUrl?: string;
  explanation?: string;
  submissionDate?: string;
  timestamp?: any;
  grades?: Grade[];
}
export interface Stats {
  participants?: number;
  duration?: string;
  submissions?: number;
}

export interface Vote {
  id: string;
  type: "upvote" | "downvote";
  comment: string;
  timestamp: string;
  author: string;
}

export interface Grade {
  id: string;
  rating: number;
  comment: string;
  timestamp: string;
  author: string;
  votes: Vote[];
}


