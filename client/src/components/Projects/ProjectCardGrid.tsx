
import type { Project } from '@/types/types';
import ProjectCard from './ProjectCard';


interface Props {
  projects: Project[];
}

const ProjectCardGrid = ({ projects }: Props) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
  {projects.map((project) => (
    <div className="h-full" key={project.id}>
      <ProjectCard {...project} />
    </div>
  ))}
</div>

   
  );  
};

export default ProjectCardGrid;
