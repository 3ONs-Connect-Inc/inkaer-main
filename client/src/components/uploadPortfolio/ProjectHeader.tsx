import { Star } from 'lucide-react';
import Badge from '../ui/badge';
import type { Grade, Project } from '@/types/types';


const ProjectHeader = ({
  project,
  averageGrade,
  grades,
  author,
  submissionDate,
}: {
  project: Project;
  averageGrade: number;
  grades: Grade[];
  author: string;
  submissionDate: string;
}) => {
 

  return (
  
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <Badge className="bg-blue-600 text-white">Portfolio Project</Badge>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Star className="flex self-start w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{averageGrade.toFixed(1)} ({grades.length} grades)</span>
        </div>
      </div>
    </div>
    <h1 className="section-title2 mb-2">
    {project.title}
      </h1>
    <p className="section-p">
       by {author} • Submitted {submissionDate}
    </p>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tags && project.tags.length > 0 ? (
        project.tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="section-p">
            {tag}
          </Badge>
        ))
      ) : (
      null
      )}
    </div>
  </div>
  );
}
export default ProjectHeader;
