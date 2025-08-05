
import { predefinedTags } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Tag } from "lucide-react"
import Badge from "../ui/badge";


export interface ProjectTagsProps {
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

const ProjectTags: React.FC<ProjectTagsProps> = ({ selectedTags, toggleTag }) => {
  return (
 <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="font-sora text-gray-900 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-inkaer-blue" />
                  Project Tags
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Select relevant tags to categorize your project
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {predefinedTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer transition-colors font-sora ${
                        selectedTags.includes(tag) 
                          ? 'bg-inkaer-blue hover:bg-inkaer-dark-blue text-white' 
                          : 'hover:bg-inkaer-blue hover:text-white'
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">Selected tags:</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedTags.map((tag) => (
                        <Badge key={tag} className="bg-inkaer-blue text-white font-sora">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
  )
}

export default ProjectTags