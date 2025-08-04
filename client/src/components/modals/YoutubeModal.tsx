

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';


interface YoutubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title?: string;
}

const YoutubeModal = ({ isOpen, onClose, videoId, title = "Demo Video" }: YoutubeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-6 bg-white/95 backdrop-blur-md border-gray-200">
        <DialogHeader>
          <DialogTitle className="font-sora text-gray-900 text-center mb-4">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default YoutubeModal;
