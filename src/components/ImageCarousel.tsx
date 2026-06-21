import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaRocket } from 'react-icons/fa6';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [brokenIndexes, setBrokenIndexes] = useState<Set<number>>(new Set());

  const validImages = images.filter((_, i) => !brokenIndexes.has(i));

  // No images at all (or all failed to load) → friendly placeholder
  if (images.length === 0 || validImages.length === 0) {
    return (
      <div className="h-56 sm:h-72 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
        <FaRocket className="text-4xl opacity-30" />
      </div>
    );
  }

  const goTo = (next: number) => {
    const len = images.length;
    setIndex(((next % len) + len) % len);
  };

  const markBroken = (i: number) => {
    setBrokenIndexes((prev) => new Set(prev).add(i));
  };

  return (
    <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
      <AnimatePresence mode="wait">
        {!brokenIndexes.has(index) ? (
          <motion.img
            key={index}
            src={images[index]}
            alt={`${alt} screenshot ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onError={() => markBroken(index)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-400">
            Image unavailable
          </div>
        )}
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => goTo(index - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 shadow"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => goTo(index + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 shadow"
          >
            <FaChevronRight size={12} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}