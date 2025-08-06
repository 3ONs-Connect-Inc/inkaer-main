
import { toast } from "sonner";

export const handleDownload = async (fileUrl: string) => {
  if (!fileUrl) {
    toast.error("File URL is missing.");
    return;
  }

  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const fileName = fileUrl.split("/").pop()?.split("?")[0] || "download";

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = decodeURIComponent(fileName);
    link.click();

    toast.success(`Downloading ${fileName}...`);
  } catch (error) {
    console.error("Download error:", error);
    toast.error("Failed to download the file.");
  }
};
