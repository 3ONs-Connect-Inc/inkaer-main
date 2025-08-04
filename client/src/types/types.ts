export interface Project {
  id?: string;
  title: string;
  category?: string;
  difficulty: string;
  duration: string;
  participants: number;
  userId?: string;
  stepFileUrl?: string;
  pdfFileUrl?: string;
  explanation?: string;
  submissionDate?: string;
  timestamp?: any;
  rating: number;
  description: string;
  tags: string[];
  image: string;
  author?: string;
  comments?: number;
  type?: string;
  grades?: Grade[];
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
