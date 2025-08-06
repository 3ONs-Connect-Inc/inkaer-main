import { Clock, Users, Star } from "lucide-react";

type Props = {
  type: string;
  participants?: number;
  duration?: string;
  rating?: number;
  comments?: number;
};

export const Stats = ({ type, participants, duration, rating, comments }: Props) => (
 <div className="flex items-center flex-wrap gap-4 text-xs sm:text-sm text-gray-500 font-sora">
      {type === "challenge" && duration && (
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      )}
      {participants && (
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span>{participants}</span>
        </div>
      )}
      <div className="flex items-center space-x-1">
        <Star className="w-4 h-4 fill-current text-yellow-400" />
        <span>{rating}</span>
      </div>
      {comments && (
        <div className="flex items-center space-x-1">
          <span>{comments} Comments</span>
        </div>
      )}
    </div>
);
