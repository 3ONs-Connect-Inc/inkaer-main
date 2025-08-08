import { useState, lazy, Suspense, useEffect } from "react";
import { toast } from "sonner";
import EngineeringDropdown from "@/components/portfolios/uploadPortfolio/EngineeringDropdown";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { validateFile, validateSubmission } from "@/utils/validation";
import Seo from "@/components/Seo";
import ProjectTitle from "@/components/portfolios/uploadPortfolio/ProjectTitle";
import ProjectTags from "@/components/portfolios/uploadPortfolio/ProjectTags";
import ExplanationForm from "@/components/portfolios/uploadPortfolio/ExplanationForm";
import { submitProject } from "@/firebase/uploadPortfolio";
import { useNavigate } from "react-router-dom";
import { redirectToLoginWithReturnUrl } from "@/hooks/auth/redirectToLogin";

const FileUpload = lazy(
  () => import("@/components/portfolios/uploadPortfolio/FileUpload")
);
const ErrorAlert = lazy(() => import("@/components/ErrorAlert"));

const STORAGE_KEY = "upload-portfolio-draft";

const UploadPortfolio = () => {
  const navigate = useNavigate();
  const [stepFile, setStepFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [explanation, setExplanation] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("mechanical");
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    stepFile: "",
    pdfFile: "",
    explanation: "",
    general: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [_, setIsLoading] = useState(false);
  const currentUser = useSelector((state: RootState) => state.session.user);

  const clearErrors = () => {
    setErrors({
      title: "",
      stepFile: "",
      pdfFile: "",
      explanation: "",
      general: "",
    });
  };

  // 🚀 Restore draft from localStorage if exists
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTitle(parsed.title || "");
        setExplanation(parsed.explanation || "");
        setSelectedDomain(parsed.selectedDomain || "mechanical");
        setSelectedTags(parsed.selectedTags || []);
        toast.success("Restored saved form data.");
      } catch (err) {
        console.error("Failed to restore draft:", err);
      } finally {
        localStorage.removeItem(STORAGE_KEY); // remove it after restoring
      }
    }
  }, []);

  const handleFileUpload = (file: File | null, type: "step" | "pdf") => {
    if (!file) return;

    clearErrors();
    const error = validateFile(file, type);
    if (error) {
      setErrors((prev) => ({ ...prev, [`${type}File`]: error }));
      toast.error(error);
      return;
    }

    if (type === "step") {
      setStepFile(file);
      toast.success("STEP file uploaded successfully");
    } else {
      setPdfFile(file);
      toast.success("PDF file uploaded successfully");
    }
  };

  const handleSubmit = async () => {
    if (!currentUser) {
      // 🧠 Save draft form data
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          title,
          explanation,
          selectedDomain,
          selectedTags,
        })
      );

      toast.error("You must be logged in before submitting a portfolio.");
      redirectToLoginWithReturnUrl(navigate, "/upload-portfolio");
      return;
    }

    const newErrors = validateSubmission(title, stepFile, pdfFile, explanation);
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error !== "")) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);
    clearErrors();

    try {
      const projectId = await submitProject({
        userId: currentUser.uid,
        title,
        stepFile: stepFile!,
        pdfFile: pdfFile!,
        explanation,
        domain: selectedDomain,
        tags: selectedTags,
        type: "portfolio",
        setIsLoading,
      });
      localStorage.removeItem(STORAGE_KEY);
      toast.success("Project submitted successfully!");

      setStepFile(null);
      setPdfFile(null);
      setExplanation("");
      setTitle("");
      setSelectedTags([]);
      navigate(`/portfolio/${projectId}`);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setErrors((prev) => ({ ...prev, general: errorMessage }));
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <Seo
        title="Upload Project"
        description="Upload Portfolio Project."
        name="Inkaer"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <BackgroundDecor />

        <div className="relative z-10">
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="section-title mb-4">Upload Your Portfolio</h1>
                <p className="section-subtitle max-w-3xl mx-auto">
                  Submit your engineering projects and showcase your technical
                  skills.
                </p>
                <EngineeringDropdown
                  selectedDomain={selectedDomain}
                  setSelectedDomain={setSelectedDomain}
                />
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                {errors.general && <ErrorAlert message={errors.general} />}
              </Suspense>

              <ProjectTitle
                title={title}
                setTitle={setTitle}
                error={errors.title}
                isSubmitting={isSubmitting}
              />

              <ProjectTags selectedTags={selectedTags} toggleTag={toggleTag} />

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Suspense fallback={<div>Loading Step File...</div>}>
                  <FileUpload
                    file={stepFile}
                    setFile={setStepFile}
                    fileType="step"
                    errors={errors.stepFile}
                    onFileUpload={(e) =>
                      handleFileUpload(e.target.files?.[0] || null, "step")
                    }
                    isSubmitting={isSubmitting}
                  />
                </Suspense>

                <Suspense fallback={<div>Loading PDF...</div>}>
                  <FileUpload
                    file={pdfFile}
                    setFile={setPdfFile}
                    fileType="pdf"
                    errors={errors.pdfFile}
                    onFileUpload={(e) =>
                      handleFileUpload(e.target.files?.[0] || null, "pdf")
                    }
                    isSubmitting={isSubmitting}
                  />
                </Suspense>
              </div>

              {/* Submission Explanation */}
              <ExplanationForm
                explanation={explanation}
                setExplanation={setExplanation}
                error={errors.explanation}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UploadPortfolio;
