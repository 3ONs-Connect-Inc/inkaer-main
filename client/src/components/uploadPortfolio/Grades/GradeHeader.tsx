import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {  CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Button from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface GradeComponentProps {
  isGradeDialogOpen: boolean;
  setIsGradeDialogOpen: (state: boolean) => void;
  newGrade: { rating: number; comment: string };
  setNewGrade: (newGrade: { rating: number; comment: string }) => void;
  handleGradeSubmit: () => void;
}

const GradeHeader =  ({
  isGradeDialogOpen,
  setIsGradeDialogOpen,
  newGrade,
  setNewGrade,
  handleGradeSubmit,
}: GradeComponentProps) => {
  return (
       <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center w-full">
        <CardTitle className="flex flex-col sm:flex-row justify-between items-center w-full">
          <div className="section-title2 mb-2 sm:mb-0">Grades & Comments</div>
          <Dialog open={isGradeDialogOpen} onOpenChange={setIsGradeDialogOpen}>
            <DialogTrigger asChild>
              <Button className="btn-with-icon bg-inkaer-blue hover:bg-inkaer-dark-blue">
                <Star className="w-4 h-4 mr-0 sm:mr-2" />
                Grade Project
              </Button>
            </DialogTrigger>
            <DialogContent aria-describedby="Grade project">
              <DialogHeader>
                <DialogTitle>Grade This Project</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() =>
                          setNewGrade({ ...newGrade, rating: star })
                        }
                        className={`w-5 h-5 xs:w-8 xs:h-8 ${
                          star <= newGrade.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        <Star className="w-full h-full fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Comment *
                  </label>
                  <Textarea
                    value={newGrade.comment}
                    onChange={(e) =>
                      setNewGrade({ ...newGrade, comment: e.target.value })
                    }
                    placeholder="Share your feedback on this project..."
                    rows={4}
                  />
                </div>
                <Button
                  onClick={handleGradeSubmit}
                  className="btn-responsive w-full"
                >
                  Submit Grade
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
  )
}

export default GradeHeader