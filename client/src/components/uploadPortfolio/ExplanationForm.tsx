import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import  Button  from "@/components/ui/button";
import { Suspense } from "react";
import ErrorAlert from "../ErrorAlert";
import { ChatInput } from "../ui/chat-input";


interface ExplanationInputProps {
  explanation: string;
  setExplanation: (value: string) => void;
  error?: string;
  isSubmitting: boolean;
  onSubmit: () => void;
}


const ExplanationInput = ({
  explanation,
  setExplanation,
  error,
  isSubmitting,
  onSubmit,
}: ExplanationInputProps) => {
  return (
    <Card
      className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg mb-8 ${
        error ? "border-red-300" : ""
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
          {error && <ErrorAlert message={error} />}
        </Suspense>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
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
  );
};

export default ExplanationInput;
