
import type { Project } from '@/types/types';
import ProjectCard from './ProjectCard';


interface Props {
  projects: Project[];
}

const ProjectCardList = ({ projects }: Props) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} view="list" />
      ))}
    </div>
  );
};

export default ProjectCardList;

