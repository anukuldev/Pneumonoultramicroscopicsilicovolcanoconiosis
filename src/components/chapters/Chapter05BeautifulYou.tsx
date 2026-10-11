import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  X,
} from "lucide-react";
import { birthdayConfig } from "@/config/birthdayConfig";

interface Chapter05BeautifulYouProps {
  onNext: () => void;
}

const fallbackImages = [
  "/images/chapter05/01.jpg",
  "/images/chapter05/02.jpeg",
  "/images/chapter05/03.jpg",
  "/images/chapter05/04.jpeg",
  "/images/chapter05/05.jpeg",
  "/images/chapter05/06.jpg",
  "/images/chapter05/07.jpeg",
  "/images/chapter05/08.jpg",
];

const captions = [
  "Beautiful without even trying.",
  "There is something about the way you smile.",
  "You make simple moments look extraordinary.",
  "Some photographs simply feel like home.",
  "The kind of beauty that stays in your mind.",
  "I could look at this forever.",
  "You have a light of your own.",
  "And somehow, you keep getting more beautiful.",
];

const numbers = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
];

export default function Chapter05BeautifulYou({
  onNext,
}: Chapter05BeautifulYouProps) {
  const chapter = birthdayConfig.chapters.find(
    (item) => item.id === "beautiful-you"
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const photos = useMemo(() => {
    if (!chapter) return [];

    return chapter.photos.map((photo, index) => ({
      ...photo,
      fallback: fallbackImages[index % fallbackImages.length],
      caption: photo.caption || captions[index],
      number: numbers[index],
    }));
  }, [chapter]);

  const selectedPhoto =
    selectedIndex !== null ? photos[selectedIndex] : null;

  const showPrevious = () => {
    if (selectedIndex === null || photos.length === 0) return;

    setSelectedIndex(
      (selectedIndex - 1 + photos.length) % photos.length
    );
  };

  const showNext = () => {
    if (selectedIndex === null || photos.length === 0) return;

    setSelectedIndex((selectedIndex + 1) % photos.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  if (!chapter) return null;

  return (
    <>
      <section
        id="beautiful-you"
        className="relative overflow-hidden bg-[#090909] text-white"
      >
        {/* Opening */}
        <div className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,220,225,0.10),transparent_32%)]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative z-10 text-center"
          >
            <p className="mb-5 font-serif text-xs uppercase tracking-[0.45em] text-white/40">
              Chapter 05
            </p>

            <h2 className="font-serif text-5xl font-light tracking-wide sm:text-8xl">
              The Beautiful You
            </h2>

            <p className="mx-auto mt-7 max-w-xl font-serif text-base italic leading-7 text-white/45 sm:text-lg">
              Eight photographs.
              <br />
              Eight little reminders of why you are so special.
            </p>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="mt-12 text-white/30"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>

        {/* Portrait sequence */}
        <div className="relative">
          {photos.map((photo, index) => (
            <motion.div
              key={`${photo.image}-${index}`}
              className="relative flex min-h-[92vh] items-center overflow-hidden sm:min-h-screen"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <motion.button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="absolute inset-0 h-full w-full cursor-pointer"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
              >
                <img
                  src={photo.image}
                  alt={photo.alt || `Beautiful memory ${index + 1}`}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    const image = event.currentTarget;

                    if (!image.src.endsWith(photo.fallback)) {
                      image.src = photo.fallback;
                    }
                  }}
                />
              </motion.button>

              {/* Cinematic overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-black/75" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />

              {/* Content */}
              <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-6 pb-20 sm:px-12 sm:pb-24">
                <div className="max-w-xl">
                  <motion.p
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                    }}
                    className="mb-4 font-serif text-xs tracking-[0.4em] text-white/50"
                  >
                    {photo.number} / 08
                  </motion.p>

                  <motion.h3
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.2,
                    }}
                    className="font-serif text-4xl font-light leading-tight sm:text-6xl"
                  >
                    {photo.caption}
                  </motion.h3>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 90, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      delay: 0.45,
                    }}
                    className="mt-6 h-px bg-white/50"
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      delay: 0.55,
                    }}
                    className="mt-5 font-handwriting text-xl text-white/60"
                  >
                    tap to remember this one
                  </motion.p>
                </div>
              </div>

              {/* Side number */}
              <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 sm:right-10 sm:block">
                <span className="font-serif text-[11px] tracking-[0.35em] text-white/30 [writing-mode:vertical-rl]">
                  THE BEAUTIFUL YOU
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ending */}
        <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,210,220,0.10),transparent_35%)]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-2xl text-center"
          >
            <Heart
              size={25}
              className="mx-auto mb-7 text-white/50"
              fill="currentColor"
            />

            <p className="font-handwriting text-3xl text-white/70 sm:text-4xl">
              And if you ever forget how beautiful you are...
            </p>

            <p className="mt-5 font-serif text-sm leading-7 text-white/35 sm:text-base">
              come back here.
              <br />
              I'll remind you.
            </p>

            <button
              type="button"
              onClick={onNext}
              className="group mt-10 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3 font-serif text-sm tracking-wide text-white/75 backdrop-blur-md transition hover:bg-white/[0.12]"
            >
              <span className="flex items-center gap-2">
                Continue
                <ChevronRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-30 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md sm:right-8 sm:top-8"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            <button
              type="button"
              aria-label="Previous"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md sm:left-8"
            >
              <ChevronLeft size={23} />
            </button>

            {/* Next */}
            <button
              type="button"
              aria-label="Next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md sm:right-8"
            >
              <ChevronRight size={23} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedPhoto.image}
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{ duration: 0.4 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.alt || "Beautiful memory"}
                className="max-h-[78vh] max-w-[88vw] rounded-sm object-contain shadow-2xl"
                onError={(event) => {
                  const image = event.currentTarget;

                  if (!image.src.endsWith(selectedPhoto.fallback)) {
                    image.src = selectedPhoto.fallback;
                  }
                }}
              />

              <p className="mt-5 text-center font-handwriting text-2xl text-white/70">
                {selectedPhoto.caption}
              </p>

              <p className="mt-2 text-center font-serif text-[10px] tracking-[0.3em] text-white/30">
                {selectedPhoto.number} / 08
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}