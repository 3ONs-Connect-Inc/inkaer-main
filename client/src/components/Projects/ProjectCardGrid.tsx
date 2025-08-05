
import type { Project } from '@/types/types';
import ProjectCard from '../home/ProjectCard';

interface Props {
  projects: Project[];
}

const ProjectCardGrid = ({ projects }: Props) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
      {projects.map((project, index) => (
     <ProjectCard key={index} {...project}  />
      ))}
    </div>
  );
};

export default ProjectCardGrid;
