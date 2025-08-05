import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Clock, Star, Users } from "lucide-react";
import Button from "@/components/ui/button";
import type { Project } from "@/types/types";
import { getDifficultyColor } from "@/constants";

type ProjectCardProps = Project & {
  view?: "grid" | "list";
};

const ProjectCard = ({
  title,
  category,
  difficulty,
  stats = [],
  type = "portfolio",
  rating,
  description,
  tags,
  image,
  author,
  comments,
  view = "grid",
}: ProjectCardProps) => {
  const { participants, duration } = stats[0] || {};

  const getProjectTypeColor = (type: string) => {
    return type === "portfolio" ? "bg-blue-600" : "bg-green-600";
  };

  const getButtonText = (type: string) => {
    return type === "portfolio" ? "View Project" : "Start Challenge";
  };

  const renderStats = () => (
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

  const renderTags = () => (
    <div className="flex flex-wrap gap-2">
      {tags.slice(0, 3).map((tag, idx) => (
        <span
          key={idx}
          className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] xs:text-xs font-sora font-medium rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );

  // 🔲 GRID View
  if (view === "grid") {
    return (
      <Card className="flex flex-col w-full max-w-sm mx-auto rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={`${title} project`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className={`px-1 xs:px-2 py-1 text-[10px] rounded-full text-white font-sora capitalize ${getProjectTypeColor(type)}`}>
              {type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className={`px-1 xs:px-2 py-1 text-[10px] xs:text-xs  rounded-full font-sora ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          </div>
        </div>

        <CardContent className="p-4 flex flex-col gap-3 flex-grow">
          <div className="text-inkaer2 uppercase tracking-wide">{category}</div>
          <CardTitle className="section-subtitle3">{title}</CardTitle>
          <p className="author-lite">by {author}</p>
          <p className="section-p line-clamp-2">{description}</p>
          {renderStats()}
          {renderTags()}
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button className="btn-with-icon w-full bg-gradient-inkaer text-white rounded-full group">
            {getButtonText(type)}
            <ArrowRight className="icon w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // 📋 LIST View
  return (
     <div className="w-full overflow-x-auto">
    <div className="min-w-[600px] bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-6">
        {/* Image */}
        <div className="relative flex-shrink-0 w-48 h-32 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={`${title} project`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className={`px-1 xs:px-2 py-1 ${getProjectTypeColor(type)} text-white rounded-full text-[10px]  font-semibold font-sora capitalize`}>
              {type}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className={`px-1 xs:px-2 py-1 rounded-full text-[10px] font-semibold font-sora ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col  justify-between">
          <div>
            <div className="text-inkaer2 uppercase tracking-wide mb-1">
              {category}
            </div>
            <h3 className="section-subtitle3 mb-1">
              {title}
            </h3>
            <p className="author-lite mb-2">by {author}</p>
            <p className="section-p leading-relaxed ">
              {description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-4">
           <div className="flex items-center gap-6 author-lite">
           {renderStats()}
           </div>
            
            <Button className="btn-with-icon bg-blue-500 hover:bg-blue-600 text-white  group ">
              {getButtonText(type)}
              <ArrowRight className="icon w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
