import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "../ui/button";
import { Star } from "lucide-react";
import type { Grade } from "@/types/types";
import { Textarea } from "../ui/textarea";
import { RatingStars } from "./RatingStars";
import { VoteButtons } from "./VoteButtons";
import { VoteItem } from "./VoteItem";

interface GradeComponentProps {
  grades: Grade[];
  openVoteDialog: (gradeId: string, voteType: "upvote" | "downvote") => void;
  voteType: "upvote" | "downvote";
  handleVoteSubmit: () => void;
  voteComment: string;
  setVoteComment: (comment: string) => void;
  isGradeDialogOpen: boolean;
  setIsGradeDialogOpen: (state: boolean) => void;
  isVoteDialogOpen: boolean;
  setIsVoteDialogOpen: (state: boolean) => void;
  newGrade: { rating: number; comment: string };
  setNewGrade: (newGrade: { rating: number; comment: string }) => void;
  handleGradeSubmit: () => void;
}

const GradeComponent = ({
  grades,
  voteType,
  handleVoteSubmit,
  voteComment,
  setVoteComment,
  openVoteDialog,
  isGradeDialogOpen,
  setIsGradeDialogOpen,
  isVoteDialogOpen,
  setIsVoteDialogOpen,
  newGrade,
  setNewGrade,
  handleGradeSubmit,
}: GradeComponentProps) => {
  // Sample function for vote counts
  const getVoteCounts = (votes: any[]) => {
    const upvotes = votes.filter((vote) => vote.type === "upvote").length;
    const downvotes = votes.filter((vote) => vote.type === "downvote").length;
    return { upvotes, downvotes };
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
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
      <CardContent>
        <div className="space-y-6">
          {grades.map((grade) => {
            const { upvotes, downvotes } = getVoteCounts(grade.votes);
            return (
              <div
                key={grade.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-2 sm:mb-0">
                    <RatingStars rating={grade.rating} />
                    <span className="author">{grade.author}</span>
                    <span className="date">{grade.timestamp}</span>
                  </div>
                  <VoteButtons
                    gradeId={grade.id}
                    upvotes={upvotes}
                    downvotes={downvotes}
                    openVoteDialog={openVoteDialog}  
                    isVoteDialogOpen={isVoteDialogOpen}
                    setIsVoteDialogOpen={setIsVoteDialogOpen}
                    voteType={voteType}
                    handleVoteSubmit={handleVoteSubmit}
                    voteComment={voteComment}
                    setVoteComment={setVoteComment}
                  />
                </div>
                <p className="section-comment mb-3">{grade.comment}</p>
                {/* Votes/Replies */}
                {grade.votes.length > 0 && (
                  <div className="ml-4 border-l-2 border-gray-200 pl-4 space-y-3">
                    {grade.votes.map((vote) => (
                      <VoteItem key={vote.id} vote={vote} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeComponent;
