import { useEffect, useState } from "react";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import { useParams } from "react-router-dom";
import ProjectHeader from "@/components/portfolios/portfolioDetails/ProjectHeader";
import Seo from "@/components/Seo";
import { PageLoader } from "@/components/ui/Spinner";
import { usePortfolioProject } from "@/hooks/portfolio/usePortfolioProject";
import ProjectDescription from "@/components/portfolios/portfolioDetails/ProjectDescription";
import Grades from "@/components/portfolios/portfolioDetails/Grades";
import { handleDownload } from "@/lib/downloadFile";
import { useGradeSubmission } from "@/hooks/grading/useGradeSubmission";
import { useVoteSubmission } from "@/hooks/grading/useVoteSubmission";
import { useProjectGrades } from "@/hooks/grading/useProjectGrades";
import StepViewer from "@/components/portfolios/portfolioDetails/StepViewer";
import PdfViewer from "@/components/portfolios/portfolioDetails/PdfViewer";


const PortfolioDetailPage = () => {
 const { id } = useParams<{ id: string }>();
 const projectId = id!;

  const [newGrade, setNewGrade] = useState({ rating: 5, comment: "" });
 const [isGradeDialogOpen, setIsGradeDialogOpen] = useState(false);
const [selectedGradeId, setSelectedGradeId] = useState<string>("");
const { grades } = useProjectGrades(projectId);
  const [voteComment, setVoteComment] = useState("");
  const [isVoteDialogOpen, setIsVoteDialogOpen] = useState(false);
  const [voteType, setVoteType] = useState<"upvote" | "downvote">("upvote");
  
  //const currentUserId = useSelector((state: RootState) => state.session.user?.uid);
  const { project, isLoading, authorName, submissionDate } = usePortfolioProject(projectId);
const { handleGradeSubmit, restoreGradeDraft } = useGradeSubmission(
projectId,
    setIsGradeDialogOpen,
    newGrade,
    setNewGrade,
   project
);
  const { handleVoteSubmit } = useVoteSubmission(
  projectId,
  selectedGradeId,
  voteType,
  voteComment,
  setVoteComment,
  setIsVoteDialogOpen,
  project
);
useEffect(() => {
  restoreGradeDraft();
}, []);


  //const isOwner = currentUserId && project?.userId === currentUserId;
  const isReady = !isLoading && project !== null;

  if (!isReady) return <PageLoader />;
  // Calculate the average grade
  const averageGrade =  
    grades.length > 0
      ? grades.reduce((sum, grade) => sum + grade.rating, 0) / grades.length
      : 0;




  const openVoteDialog = (gradeId: string, type: 'upvote' | 'downvote') => {
    setSelectedGradeId(gradeId);
    setVoteType(type);
    setIsVoteDialogOpen(true);
  };


  return (
    <>
      <Seo
        title={project?.title || "Portfolio Project"}
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
                averageGrade={averageGrade}
                grades={grades}
                author={authorName}
                submissionDate={submissionDate}
              />
            
                <div className="grid md:grid-cols-2 gap-4 xs:gap-6 mb-8">
                  {project.stepFileUrl && (
                    <div className="w-full min-w-0">
                      <StepViewer file={project.stepFileUrl} 
                      fileType="3D Model"
                      onDownload={handleDownload}
                       />
                    </div>
                  )}
                  {project.pdfFileUrl && (
                    <div className="w-full min-w-0">
                      <PdfViewer file={project.pdfFileUrl}
                       fileType="PDF" 
                       onDownload={handleDownload}
                       />
                    </div>
                  )}
                </div>
            

              <ProjectDescription project={project} />

              <Grades
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

export default PortfolioDetailPage;
