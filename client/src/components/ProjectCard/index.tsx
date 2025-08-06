import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import Button from '@/components/ui/button';
import type { Project } from '@/types/types';
import { Tags } from './Tags';
import { Stats } from './Stats';
import { Preview } from './Preview';
import { getRankColor } from './helpers';

type ProjectCardProps = Project & {
  view?: "grid" | "list";
};
  
const ProjectCard = ({
  projectId,
  title,
  rank,
  stats = [],
  type = "portfolio",
  rating,
  explanation,
  tags,
  domain,
  image,
  author,
  comments,
  view = "grid",
}: ProjectCardProps) => {
  const { participants, duration } = stats[0] || {};
  const navigate = useNavigate();
  const [_, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [image]);

  const getProjectTypeColor = (type: string) =>
    type === 'portfolio' ? 'bg-blue-600' : 'bg-green-600';

  const getButtonText = (type: string) =>
    type === 'portfolio' ? 'View Project' : 'Start Challenge';

  const handleClick = () => {
    navigate(`/${type}/${projectId}`);
  };

  if (view === 'grid') {
    return (
      <Card className="flex flex-col w-full max-w-sm mx-auto rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <Preview image={image}  />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className={`px-1 xs:px-2 py-1 text-[10px] rounded-full text-white font-sora capitalize ${getProjectTypeColor(type)}`}>{type}</span>
          </div>
          <div className="absolute top-4 right-4">
            <span className={`px-1 xs:px-2 py-1 text-[10px] xs:text-xs rounded-full font-sora ${getRankColor(rank)}`}>{rank}</span>
          </div>
        </div>

        <CardContent className="p-4 flex flex-col gap-3 flex-grow">
          <div className="text-inkaer2 uppercase tracking-wide">{domain}</div>
          <CardTitle className="section-subtitle3">{title}</CardTitle>
          <p className="author-lite">by {author}</p>
          <p className="section-p line-clamp-2">{explanation}</p>
          <Stats {...{ type, duration, participants, rating, comments }} />
          <Tags tags={tags} />
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button onClick={handleClick} className="btn-with-icon w-full bg-gradient-inkaer text-white rounded-full group">
            {getButtonText(type)}
            <ArrowRight className="icon w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // LIST View
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
        <div className="flex gap-6">
          <div className="relative flex-shrink-0 w-48 h-32 overflow-hidden rounded-xl">
            <Preview image={image}  />
            <div className="absolute top-3 left-3">
              <span className={`px-1 xs:px-2 py-1 ${getProjectTypeColor(type)} text-white rounded-full text-[10px] font-semibold font-sora capitalize`}>{type}</span>
            </div>
            <div className="absolute top-3 right-3">
              <span className={`px-1 xs:px-2 py-1 rounded-full text-[10px] font-semibold font-sora ${getRankColor(rank)}`}>{rank}</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="text-inkaer2 uppercase tracking-wide mb-1">{domain}</div>
              <h3 className="section-subtitle3 mb-1">{title}</h3>
              <p className="author-lite mb-2">by {author}</p>
              <p className="section-p leading-relaxed">{explanation}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-4">
              <div className="flex items-center gap-6 author-lite">
                <Stats {...{ type, duration, participants, rating, comments }} />
              </div>
              <Button onClick={handleClick} className="btn-with-icon bg-blue-500 hover:bg-blue-600 text-white group">
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
