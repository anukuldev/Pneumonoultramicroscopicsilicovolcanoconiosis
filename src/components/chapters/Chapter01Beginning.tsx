import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import { birthdayConfig } from "@/config/birthdayConfig";

interface Chapter01BeginningProps {
  onNext?: () => void;
}

export default function Chapter01Beginning({
  onNext,
}: Chapter01BeginningProps) {
  const chapter = useMemo(
    () => birthdayConfig.chapters.find((item) => item.id === "beginning"),
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!chapter) {
    return null;
  }

  const photos = chapter.photos;

  const openPhoto = (index: number) => {
    setActiveIndex(index);
  };

  const closePhoto = () => {
    setActiveIndex(null);
  };

  const nextPhoto = () => {
    if (activeIndex === null) return;

    setActiveIndex((activeIndex + 1) % photos.length);
  };

  const previousPhoto = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      (activeIndex - 1 + photos.length) % photos.length
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePhoto();
      }

      if (event.key === "ArrowRight") {
        nextPhoto();
      }

      if (event.key === "ArrowLeft") {
        previousPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section
      id="memories"
      className="relative isolate min-h-screen overflow-hidden bg-[#08070a] px-4 py-28 text-white sm:px-8 sm:py-36"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft central light */}
        <div
          className="absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,210,225,0.35), transparent 65%)",
          }}
        />

        {/* Top vignette */}
        <div
          className="absolute inset-x-0 top-0 h-64"
          style={{
            background:
              "linear-gradient(to bottom, #08070a, transparent)",
          }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-64"
          style={{
            background:
              "linear-gradient(to top, #08070a, transparent)",
          }}
        />

        {/* Tiny stars */}
        {Array.from({ length: 35 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/40"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
              opacity: 0.25 + ((index * 13) % 50) / 100,
            }}
          />
        ))}
      </div>

      {/* ============================================================
          INTRO TEXT
      ============================================================ */}

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.45em] text-white/35 sm:text-xs">
            <span className="h-px w-8 bg-white/20" />
            Chapter {chapter.number}
            <span className="h-px w-8 bg-white/20" />
          </div>

          <h2 className="font-serif text-4xl font-light tracking-tight text-white sm:text-6xl">
            {chapter.title}
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm italic leading-relaxed text-white/45 sm:text-base">
            {chapter.subtitle}
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 text-white/25">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Tap a memory
            </span>
            <Sparkles className="h-3.5 w-3.5" />
          </div>
        </motion.div>

        {/* ==========================================================
            CINEMATIC PHOTO WALL
        ========================================================== */}

        <div
          className="relative mx-auto mt-20 h-[560px] w-full max-w-6xl sm:mt-24 sm:h-[650px]"
          style={{
            perspective: "1400px",
          }}
        >
          {/* Large invisible depth plane */}
          <div
            className="absolute left-1/2 top-1/2 h-[380px] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]"
            style={{
              transform: "translate(-50%, -50%) rotateX(12deg)",
            }}
          />

          {photos.map((photo, index) => {
            const positions = [
              {
                x: -34,
                y: 2,
                rotate: -10,
                scale: 0.82,
                z: 10,
              },
              {
                x: -22,
                y: -18,
                rotate: -5,
                scale: 0.92,
                z: 30,
              },
              {
                x: -8,
                y: 5,
                rotate: -2,
                scale: 1,
                z: 50,
              },
              {
                x: 8,
                y: -10,
                rotate: 3,
                scale: 1.04,
                z: 70,
              },
              {
                x: 23,
                y: 7,
                rotate: 6,
                scale: 0.94,
                z: 45,
              },
              {
                x: 35,
                y: -12,
                rotate: 10,
                scale: 0.82,
                z: 20,
              },
              {
                x: -20,
                y: 25,
                rotate: 7,
                scale: 0.72,
                z: 5,
              },
              {
                x: 20,
                y: 25,
                rotate: -7,
                scale: 0.72,
                z: 5,
              },
            ];

            const position = positions[index];

            const fallbackImages = [
              "/images/memory1.jpg",
              "/images/memory2.jpg",
              "/images/memory3.jpg",
              "/images/memory4.jpg",
              "/images/memory5.jpg",
              "/images/memory6.jpg",
              "/images/her-photo.jpg",
              "/images/image.png",
            ];

            return (
              <motion.button
                key={photo.image}
                type="button"
                onClick={() => openPhoto(index)}
                className="absolute left-1/2 top-1/2 w-[150px] -translate-x-1/2 -translate-y-1/2 text-left sm:w-[205px]"
                style={{
                  zIndex: position.z,
                  transformStyle: "preserve-3d",
                }}
                initial={{
                  opacity: 0,
                  x: "-50%",
                  y: "80%",
                  rotate: position.rotate - 8,
                  scale: 0.65,
                }}
                whileInView={{
                  opacity: 1,
                  x: `calc(-50% + ${position.x}vw)`,
                  y: `calc(-50% + ${position.y}px)`,
                  rotate: position.rotate,
                  scale: position.scale,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.12 + index * 0.1,
                  type: "spring",
                  stiffness: 70,
                  damping: 16,
                }}
                whileHover={{
                  scale: position.scale + 0.07,
                  rotate: 0,
                  zIndex: 100,
                  transition: {
                    duration: 0.25,
                  },
                }}
                whileTap={{
                  scale: position.scale - 0.03,
                }}
              >
                <div
                  className="relative rounded-[2px] bg-[#f4f0eb] p-2 pb-8 shadow-[0_25px_70px_rgba(0,0,0,0.55)] sm:p-3 sm:pb-10"
                  style={{
                    transform: `translateZ(${index * 4}px)`,
                  }}
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-black">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      loading={index < 4 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={(event) => {
                        const target = event.currentTarget;

                        if (
                          target.dataset.fallbackApplied === "true"
                        ) {
                          return;
                        }

                        target.dataset.fallbackApplied = "true";
                        target.src = fallbackImages[index];
                      }}
                    />

                    {/* Cinematic overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />

                    {/* Number */}
                    <span className="absolute bottom-2 left-2 rounded-full bg-black/35 px-2 py-1 text-[8px] tracking-[0.2em] text-white/70 backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Caption */}
                  <p className="absolute bottom-2 left-2 right-2 truncate text-center font-handwriting text-[11px] text-[#3f3a38] sm:bottom-3 sm:text-sm">
                    {photo.caption}
                  </p>

                  {/* Tape detail */}
                  {index % 3 === 0 && (
                    <div
                      className="pointer-events-none absolute -top-2 left-1/2 h-6 w-16 -translate-x-1/2 rotate-[-2deg] bg-white/20 backdrop-blur-sm"
                      style={{
                        boxShadow:
                          "0 2px 10px rgba(0,0,0,0.15)",
                      }}
                    />
                  )}
                </div>
              </motion.button>
            );
          })}

          {/* Center glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
        </div>

        {/* ==========================================================
            BOTTOM MESSAGE
        ========================================================== */}

        <motion.div
          className="relative z-20 mx-auto -mt-3 max-w-md sm:-mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        >
          <p className="text-xs leading-relaxed text-white/30 sm:text-sm">
            Every picture carries a little piece of a memory.
          </p>

          <div className="mt-5 text-[10px] uppercase tracking-[0.35em] text-white/20">
            {photos.length} memories
          </div>

          {onNext && (
            <motion.button
              type="button"
              onClick={onNext}
              className="mt-10 rounded-full border border-white/10 px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white/80"
              whileTap={{ scale: 0.96 }}
            >
              Continue our story
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* ============================================================
          FULL-SCREEN PHOTO VIEWER
      ============================================================ */}

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-8 backdrop-blur-xl sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closePhoto}
              aria-label="Close photo"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousPhoto();
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextPhoto();
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Photo */}
            <motion.div
              key={activeIndex}
              className="relative flex max-h-[85vh] max-w-[90vw] flex-col items-center"
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-sm bg-[#f4f0eb] p-2 pb-12 shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:p-3 sm:pb-14">
                <img
                  src={photos[activeIndex].image}
                  alt={photos[activeIndex].caption}
                  className="max-h-[68vh] w-auto max-w-[82vw] object-contain sm:max-h-[72vh]"
                  onError={(event) => {
                    const target = event.currentTarget;

                    if (target.dataset.fallbackApplied === "true") {
                      return;
                    }

                    target.dataset.fallbackApplied = "true";
                    target.src =
                      "/images/memory1.jpg";
                  }}
                />

                <p className="absolute bottom-3 left-3 right-3 text-center font-handwriting text-sm text-[#3f3a38] sm:bottom-4 sm:text-lg">
                  {photos[activeIndex].caption}
                </p>
              </div>

              <div className="mt-5 text-center">
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                  Memory {activeIndex + 1} / {photos.length}
                </div>

                <div className="mx-auto mt-3 h-px w-20 bg-white/10" />

                <p className="mt-3 text-[10px] text-white/25">
                  Swipe / use arrows to continue
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}