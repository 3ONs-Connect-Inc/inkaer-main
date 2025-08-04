import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/types/types';

const ProjectDescription = ({ project }: {project: Project}) => (
  <Card className="bg-white/80 backdrop-blur-sm border-gray-200 mb-8">
    <CardHeader>
      <CardTitle className="section-title2">Project Description</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="section-p leading-relaxed ">
        {project.explanation}</p>
    </CardContent>
  </Card>
);

export default ProjectDescription;
