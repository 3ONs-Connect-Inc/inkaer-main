import React, { useEffect, useState, useRef } from "react";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnimatePresence, motion } from "framer-motion";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  file: string;
  fileType: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file, fileType }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        requestAnimationFrame(() => {
          if (entry.contentRect.width) {
            setContainerWidth(entry.contentRect.width);
          }
        });
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gray-200 w-full">
      <CardHeader className="pb-4 text-center">
        <CardTitle className="flex items-center justify-center gap-2 section-title2">
          <FileText className="w-5 h-5" />
          <p className="section-title2">{fileType}</p>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4 items-center">
          {/* PDF container */}
          <div
            ref={containerRef}
            className="w-full h-[200px] xxs:h-[250px]  xs:h-[300px] sm:h-[400px] max-h-[640px]  overflow-y-auto bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-2 sm:p-4 flex justify-center transition-all duration-300"
          >
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading="Loading PDF...">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pageNumber}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center"
                >
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={Math.min(containerWidth - 32, 800)}
                  />
                </motion.div>
              </AnimatePresence>
            </Document>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center xs:gap-4 gap-2">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="xs:p-2 p-0 rounded-full bg-white border shadow hover:bg-gray-50 disabled:opacity-30"
            >
              <ChevronLeft className="w-3 h-3 xs:w-5 xs:h-5" />
            </button>
            <span className="section-p">
              Page {pageNumber} / {numPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="xs:p-2 p-0 rounded-full bg-white border shadow hover:bg-gray-50 disabled:opacity-30"
            >
              <ChevronRight className="w-3 h-3 xs:w-5 xs:h-5" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PdfViewer;
