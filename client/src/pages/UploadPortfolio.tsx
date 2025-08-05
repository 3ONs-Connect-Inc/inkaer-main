import { useState, lazy, Suspense } from "react";
import { ChatInput } from "@/components/ui/chat-input";
import Button from "@/components/ui/button";
import { toast } from "sonner";
import EngineeringDropdown from "@/components/uploadPortfolio/EngineeringDropdown";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { validateFile, validateSubmission } from "@/utils/validation";
import { uploadFileToR2 } from "@/lib/fileUpload";
import Seo from "@/components/Seo";
import ProjectTitle from "@/components/uploadPortfolio/ProjectTitle";
import ProjectTags from "@/components/uploadPortfolio/ProjectTags";

const FileUpload = lazy(() => import("@/components/uploadPortfolio/FileUpload"));
const ErrorAlert = lazy(() => import("@/components/ErrorAlert"));

const UploadPortfolio = () => {
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
      toast.error("You must be logged in before submitting a portfolio.");
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
      // Upload files to R2 and get URLs
      const stepFileUrl = await uploadFileToR2(stepFile!, setIsLoading);
      const pdfFileUrl = await uploadFileToR2(pdfFile!, setIsLoading);
      // Save to Firebase Firestore
      await addDoc(collection(db, "portfolios"), {
        userId: currentUser?.uid,
        title,
        stepFileUrl,
        pdfFileUrl,
        explanation,
        domain: selectedDomain,
        tags: selectedTags,
        timestamp: new Date(),
      });

      toast.success("Project submitted successfully!");

      // Reset form on success
      setStepFile(null);
      setPdfFile(null);
      setExplanation("");
      setTitle("");
      setSelectedTags([]);
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
              <Card
                className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg mb-8 ${
                  errors.explanation ? "border-red-300" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="section-title2 flex text-center justify-center">
                    Submission Explanation
                  </CardTitle>
                  <p className="text-sm section-p">
                    {explanation.length}/2000 characters (minimum 50 required)
                  </p>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading...</div>}>
                    {errors.explanation && (
                      <ErrorAlert message={errors.explanation} />
                    )}
                  </Suspense>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
                  >
                    <ChatInput
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      placeholder="Explain your project, design decisions, and technical approach... (minimum 50 characters)"
                      className="min-h-32 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                      disabled={isSubmitting}
                    />
                    <div className="flex items-center justify-end p-3 pt-0">
                      <Button
                        type="submit"
                        className="bg-inkaer-blue xs:mt-0 mt-4 hover:bg-inkaer-dark-blue text-white btn-responsive"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Project"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UploadPortfolio;
