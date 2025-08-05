
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import ErrorAlert from "../ErrorAlert"
import { Input } from "../ui/input"

// types.ts (you can put this in a types folder)
export interface ProjectTitleProps {
  title: string;
  setTitle: (title: string) => void;
  error: string;
  isSubmitting: boolean;
}


const ProjectTitle: React.FC<ProjectTitleProps> = ({ title, setTitle, error, isSubmitting }) => {
  return (
      <Card className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg mb-8 ${error ? 'border-red-300' : ''}`}>
              <CardHeader>
                <CardTitle className="font-sora text-gray-900">Project Title</CardTitle>
              </CardHeader>
              <CardContent>
                 {error && <ErrorAlert message={error} />}
              
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your project title (3-100 characters)"
                  className="font-sora"
                  disabled={isSubmitting}
                  maxLength={100}
                />
                <p className="text-sm text-gray-600 mt-2">
                  {title.length}/100 characters
                </p>
              </CardContent>
            </Card>
  )
}

export default ProjectTitle