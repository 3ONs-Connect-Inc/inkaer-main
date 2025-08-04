
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Clock, Star, Users } from "lucide-react";
import Button from "@/components/ui/button";
import type { Project } from "@/types/types";
import { Image } from "@/components/ui/Image";



const ProjectCard = ({
  title,
  category,
  difficulty,
  duration,
  participants,
  rating,
  description,
  tags,
  image,
  author,
  comments,
}: Project) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Intermediate":
        return "text-yellow-600 bg-yellow-100";
      case "Advanced":
        return "text-orange-600 bg-orange-100";
      case "Expert":
        return "text-red-600 bg-red-100";
      default:
        return "text-green-600 bg-green-100";
    }
  };

  return (
    <Card className="flex flex-col h-full w-full max-w-sm mx-auto rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden  flex-shrink-0">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} project`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold font-sora ${getDifficultyColor(
              difficulty
            )}`}
          >
            {difficulty}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <CardContent className="flex flex-col flex-grow space-y-4">
        {/* Header Info */}
        <div className="flex flex-col space-y-2 flex-grow">
          <div className="mt-4 sm:mt-0 line-clamp-1 leading-relaxed text-xs sm:text-sm text-inkaer-blue font-sora font-semibold uppercase tracking-wide">
            {category}
          </div>
          <CardTitle className="line-clamp-1 leading-relaxed text-lg sm:text-xl font-sora font-bold text-gray-900 group-hover:text-inkaer-blue transition-colors">
            {title}
          </CardTitle>
          {author && (
            <p className="line-clamp-1 leading-relaxed text-sm text-gray-500 font-sora">by {author}</p>
          )}
          <CardDescription className="font-sora text-sm sm:text-base text-gray-600 line-clamp-2 leading-relaxed">
            {description}
          </CardDescription>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm md:text-base text-gray-500 font-sora gap-2">
          <div className="flex items-center space-x-1">
             <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{duration}</span>
          </div>
           <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 " />
            <span>{participants.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{participants.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 sm:h-5 fill-current text-yellow-400" />
            <span>{rating}</span>
          </div>
          {comments && (
            <div className="flex items-center space-x-1">
              <span>{comments} Comments</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-8 w-full">
        <div className="tag">
            {tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-700 text-[10px] sm:text-xs font-sora font-medium rounded-full ml-2"
            >
              {tag}
            </span>
          ))}
        </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-auto pt-0 px-3 sm:px-6 pb-6">
        <Button className="btn-with-icon w-full flex items-center justify-center bg-gradient-inkaer hover:opacity-90 text-white rounded-full group">
          Start Challenge
          <ArrowRight className="icon group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
