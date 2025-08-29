import  { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pdf2 } from "@/assets";
import "react-pdf/dist/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function PortfolioViewer() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-2xl mx-auto w-full">
        {/* PDF Viewer */}
        <div className="relative flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
          <Document
            file={pdf2}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p className="p-4">Loading PDF...</p>}
            className="flex justify-center"
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-md"
              width={500}
            />
          </Document>

          {/* Navigation Overlay - only if more than one page */}
          {numPages > 1 && (
            <>
              {pageNumber > 1 && (
                <button
                  onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 shadow-md transition"
                >
                  <ChevronLeft className="w-6 h-6 " />
                </button>
              )}
              {pageNumber < numPages && (
                <button
                  onClick={() =>
                    setPageNumber((prev) => Math.min(prev + 1, numPages))
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 shadow-md transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </>
          )}
        </div>

        {/* Page Indicator - only if more than one page */}
        {numPages > 1 && (
          <p className="mt-3 text-sm text-gray-600">
            Page <span className="font-semibold">{pageNumber}</span> of{" "}
            {numPages}
          </p>
        )}

        <p className="mt-4 desc">
          Every portfolio is manually reviewed for authenticity, complexity, and
          industry relevance.
        </p>
      </div>
    </div>
  );
}