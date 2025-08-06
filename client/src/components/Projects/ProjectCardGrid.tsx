
import type { Project } from '@/types/types';
import ProjectCard from '../ProjectCard';


interface Props {
  projects: Project[];
}

const ProjectCardGrid = ({ projects }: Props) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
      {projects.map((project) => (
     <ProjectCard key={project.id} {...project}  />
      ))}
    </div>
  );  
};

export default ProjectCardGrid;
