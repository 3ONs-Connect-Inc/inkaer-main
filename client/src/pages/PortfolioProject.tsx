import { useState } from "react";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import { useParams } from "react-router-dom";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import PdfViewer from "@/components/portfolio/PdfViewer";
import GradeComponent from "@/components/portfolio/GradeComponent";
import type { Grade,  Vote } from "@/types/types";
import { toast } from "sonner";
import StepViewer from "@/components/portfolio/StepViewer";
import Seo from "@/components/Seo";
import { PageLoader } from "@/components/ui/Spinner";
import { usePortfolioProject } from "@/hooks/usePortfolioProject";
import ProjectDescription from "@/components/portfolio/ProjectDescription";

const PortfolioProject = () => {
  const { id } = useParams<{ id: string }>();
  // const [grades, setGrades] = useState<Grade[]>([]);
  const [grades, setGrades] = useState<Grade[]>([
    {
      id: "1",
      rating: 4,
      comment:
        "Excellent work on the thermal analysis. The methodology is sound and results are well-presented.",
      timestamp: "2 days ago",
      author: "Dr. Sarah Chen",
      votes: [
        {
          id: "v1",
          type: "upvote",
          comment: "I agree, the thermal analysis is very thorough.",
          timestamp: "1 day ago",
          author: "Mike Johnson",
        },
      ],
    },
    {
      id: "2",
      rating: 5,
      comment:
        "Outstanding attention to detail in the CAD modeling. Professional quality work.",
      timestamp: "1 week ago",
      author: "Prof. David Kumar",
      votes: [],
    },
  ]);
  const [newGrade, setNewGrade] = useState({ rating: 5, comment: "" });
  const [voteComment, setVoteComment] = useState("");
  const [isGradeDialogOpen, setIsGradeDialogOpen] = useState(false);
  const [isVoteDialogOpen, setIsVoteDialogOpen] = useState(false);
  const [voteType, setVoteType] = useState<"upvote" | "downvote">("upvote");
  const [selectedGradeId, setSelectedGradeId] = useState<string>("");
  // Calculate the average grade
  // const averageGrade =
  //   grades.length > 0
  //     ? grades.reduce((sum, grade) => sum + grade.rating, 0) / grades.length
  //     : 0;
const { project, isLoading, authorName, submissionDate } = usePortfolioProject(id);

  if (isLoading || !project) return <PageLoader />;


  const handleGradeSubmit = () => {
    if (!newGrade.comment.trim()) {
      toast.error("Please add a comment before submitting your grade.");
      return;
    }

    const grade: Grade = {
      id: Date.now().toString(),
      rating: newGrade.rating,
      comment: newGrade.comment,
      timestamp: "Just now",
      author: "Current User", // In real app, this would be the logged-in user's name
      votes: [],
    };

    setGrades([grade, ...grades]);
    setNewGrade({ rating: 5, comment: "" });
    setIsGradeDialogOpen(false);
    toast.success("Grade submitted successfully!");
  };

  const handleVoteSubmit = () => {
    if (!voteComment.trim()) {
      toast.error("Please add a comment before submitting your vote.");
      return;
    }

    const vote: Vote = {
      id: Date.now().toString(),
      type: voteType,
      comment: voteComment,
      timestamp: "Just now",
      author: "Current User", // In real app, this would be the logged-in user's name
    };

    setGrades(
      grades.map((grade) =>
        grade.id === selectedGradeId
          ? { ...grade, votes: [vote, ...grade.votes] }
          : grade
      )
    );

    setVoteComment("");
    setIsVoteDialogOpen(false);
    toast.success(
      `${voteType === "upvote" ? "Upvote" : "Downvote"} submitted successfully!`
    );
  };

  const openVoteDialog = (gradeId: string, type: "upvote" | "downvote") => {
    setSelectedGradeId(gradeId);
    setVoteType(type);
    setIsVoteDialogOpen(true);
  };

  return (
    <>
      <Seo
        title="Portfolio Project"
        description="View Portfolio Project."
        name="Inkaer"
        type="article"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
        <BackgroundDecor />
        <div className="relative z-10">
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <ProjectHeader
                project={project}
                averageGrade={4.5}
                grades={[]}
                author={authorName}
                submissionDate={submissionDate}
              />
              <div className="grid md:grid-cols-2 gap-4 xs:gap-6 mb-8">
                {project.stepFileUrl && (
                  <div className="w-full min-w-0">
                    <StepViewer
                      file={project.stepFileUrl}
                      fileType="3D Model"
                    />
                  </div>
                )}
                {project.pdfFileUrl && (
                  <div className="w-full min-w-0">
                    <PdfViewer file={project.pdfFileUrl} fileType="PDF" />
                  </div>
                )}
              </div>

              <ProjectDescription project={project} />

              <GradeComponent
                grades={grades}
                voteType={voteType}
                handleVoteSubmit={handleVoteSubmit}
                voteComment={voteComment}
                setVoteComment={setVoteComment}
                openVoteDialog={openVoteDialog}
                isGradeDialogOpen={isGradeDialogOpen}
                setIsGradeDialogOpen={setIsGradeDialogOpen}
                isVoteDialogOpen={isVoteDialogOpen}
                setIsVoteDialogOpen={setIsVoteDialogOpen}
                newGrade={newGrade}
                setNewGrade={setNewGrade}
                handleGradeSubmit={handleGradeSubmit}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PortfolioProject;
