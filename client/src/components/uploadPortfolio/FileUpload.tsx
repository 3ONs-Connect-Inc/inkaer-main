import React from "react";
import {  File, FileText, Upload, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "../ui/button";
import ErrorAlert from "../ErrorAlert";

type FileUploadProps = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  fileType: "pdf" | "step";
  errors: string;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
};

const FileUpload = ({
  file,
  setFile,
  fileType,
  errors,
  onFileUpload,
  isSubmitting,
}: FileUploadProps) => {
  const removeFile = () => setFile(null);
  const fileTypeLabel = fileType === "pdf" ? "PDF" : "STEP";
  const FileIcon = fileType === "pdf" ? FileText : File;
  const fileExtension = fileType === "pdf" ? ".pdf" : ".step, .stp";

  return (
    <Card
      className={`bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg ${
        errors ? "border-red-300" : ""
      }`}
    >
      <CardHeader className="text-center">
        <CardTitle className="section-title2 flex items-center justify-center gap-2">
          <FileIcon className="flex self-start w-6 h-6 text-inkaer-blue" />
          <p className="section-title2">{fileTypeLabel} File Viewer</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`min-h-[200px] bg-gray-50 rounded-lg border-2 border-dashed flex items-center justify-center ${
            errors ? "border-red-300 bg-red-50" : "border-gray-300"
          }`}
        >
          {file ? (
            <div className="text-center relative">
              <FileIcon className="  w-16 h-16 text-inkaer-blue mx-auto mb-2" />
              <p className="font-sora font-medium text-gray-900">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={removeFile}
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 bg-red-500 hover:bg-red-600 text-white"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <FileIcon className="w-16 h-16 mx-auto mb-2 opacity-50" />
              <p className="section-p">No {fileTypeLabel} file uploaded</p>
              <p className="text-xs mt-1">Max file size: 50MB</p>
            </div>
          )}
        </div>
             {errors && <ErrorAlert message={errors} />}
        <div>
          <input
            type="file"
            id={`${fileType}-upload`}
            accept={fileExtension}
            onChange={onFileUpload}
            className="hidden"
          />
          <Button
            onClick={() =>
              document.getElementById(`${fileType}-upload`)?.click()
            }
            disabled={isSubmitting}
                      className="btn-responsive w-full bg-gradient-inkaer hover:opacity-90 text-white"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload {fileTypeLabel} File
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUpload;
