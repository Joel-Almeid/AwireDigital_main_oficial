import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
      >
        <X size={32} />
      </button>

      {onPrev && images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 text-white hover:text-accent transition-colors z-10"
        >
          <ChevronLeft size={48} />
        </button>
      )}

      <img
        src={images[currentIndex]}
        alt="Lightbox"
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      {onNext && images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 text-white hover:text-accent transition-colors z-10"
        >
          <ChevronRight size={48} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default Lightbox;
