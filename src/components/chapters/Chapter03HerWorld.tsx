import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  X,
} from "lucide-react";
import { birthdayConfig } from "@/config/birthdayConfig";

interface Chapter03HerWorldProps {
  onNext: () => void;
}

const fallbackImages = [
  "/images/chapter03/01.jpg",
  "/images/chapter03/02.jpg",
  "/images/chapter03/03.jpg",
  "/images/chapter03/04.jpg",
  "/images/chapter03/05.jpg",
  "/images/chapter03/06.jpg",
  "/images/chapter03/07.jpg",
  "/images/chapter03/08.jpg",
];

const positions = [
  { x: -34, y: -18, rotate: -7 },
  { x: 28, y: -20, rotate: 6 },
  { x: -13, y: -2, rotate: -3 },
  { x: 14, y: 4, rotate: 5 },
  { x: -34, y: 22, rotate: 6 },
  { x: 31, y: 23, rotate: -5 },
  { x: -10, y: 34, rotate: -6 },
  { x: 12, y: 39, rotate: 4 },
];

const captions = [
  "There is a whole world in her smile.",
  "Somewhere between the stars, there is her.",
  "She makes ordinary moments beautiful.",
  "Her world has its own kind of magic.",
  "A little light wherever she goes.",
  "The kind of beauty you remember.",
  "If happiness had a face...",
  "This is one of my favourite views.",
];

export default function Chapter03HerWorld({
  onNext,
}: Chapter03HerWorldProps) {
  const chapter = birthdayConfig.chapters.find(
    (item) => item.id === "her-world"
  );

  const photos = useMemo(() => {
    if (!chapter) return [];

    return chapter.photos.map((photo, index) => ({
      ...photo,
      fallback: fallbackImages[index % fallbackImages.length],
      caption: photo.caption || captions[index],
      position: positions[index],
    }));
  }, [chapter]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
        id="her-world"
        className="relative min-h-screen overflow-hidden bg-[#080b20] py-28 text-white"
      >
        {/* Deep sky */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(116,102,190,0.32),transparent_35%),radial-gradient(circle_at_15%_70%,rgba(91,125,181,0.18),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(180,105,161,0.18),transparent_30%)]" />

        {/* Stars */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <span className="absolute left-[8%] top-[15%] h-1 w-1 rounded-full bg-white" />
          <span className="absolute left-[17%] top-[33%] h-1.5 w-1.5 rounded-full bg-white/70" />
          <span className="absolute left-[29%] top-[10%] h-1 w-1 rounded-full bg-white/80" />
          <span className="absolute left-[43%] top-[20%] h-1 w-1 rounded-full bg-white/60" />
          <span className="absolute left-[58%] top-[11%] h-1.5 w-1.5 rounded-full bg-white" />
          <span className="absolute left-[73%] top-[25%] h-1 w-1 rounded-full bg-white/70" />
          <span className="absolute left-[87%] top-[13%] h-1 w-1 rounded-full bg-white" />
          <span className="absolute left-[92%] top-[45%] h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="absolute left-[6%] top-[52%] h-1 w-1 rounded-full bg-white/70" />
          <span className="absolute left-[18%] top-[77%] h-1 w-1 rounded-full bg-white" />
          <span className="absolute left-[82%] top-[78%] h-1 w-1 rounded-full bg-white/70" />
          <span className="absolute left-[66%] top-[88%] h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>

        {/* Moon glow */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-[15%] h-52 w-52 -translate-x-1/2 rounded-full bg-[#d8d2ff]/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating decorative particles */}
        <motion.div
          className="absolute left-[10%] top-[30%] text-purple-200/60"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={25} />
        </motion.div>

        <motion.div
          className="absolute right-[10%] top-[37%] text-pink-200/50"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart size={22} fill="currentColor" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="mb-4 font-serif text-sm uppercase tracking-[0.4em] text-purple-200/70">
              Chapter 03
            </p>

            <h2 className="font-serif text-5xl font-medium tracking-wide sm:text-7xl">
              Her World
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              Somewhere between the stars and the little things,
              <br className="hidden sm:block" />
              there is a world that is completely hers.
            </p>
          </motion.div>

          {/* Floating universe */}
          <div className="relative mx-auto mt-12 h-[720px] max-w-6xl sm:h-[850px]">
            {/* Central glow */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/10 blur-3xl"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Small orbit */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner orbit */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 text-center sm:block"
            >
              <Heart
                className="mx-auto mb-3 text-pink-200/70"
                size={25}
                fill="currentColor"
              />

              <p className="font-handwriting text-3xl text-white/80">
                her little universe
              </p>

              <p className="mt-2 font-serif text-xs uppercase tracking-[0.25em] text-white/35">
                full of beautiful things
              </p>
            </motion.div>

            {/* Photos */}
            {photos.map((photo, index) => {
              const position = photo.position;

              return (
                <motion.button
                  key={`${photo.image}-${index}`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group absolute left-1/2 top-1/2 z-20 w-[42%] max-w-[190px] cursor-pointer text-left sm:w-[24%] sm:max-w-[230px]"
                  style={{
                    transform: `translate(calc(-50% + ${position.x}vw), calc(-50% + ${position.y}vw))`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.05,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  animate={{
                    y: [0, index % 2 === 0 ? -9 : 9, 0],
                    rotate: [
                      position.rotate,
                      position.rotate + (index % 2 === 0 ? 1.5 : -1.5),
                      position.rotate,
                    ],
                  }}
                  whileHover={{
                    scale: 1.08,
                    zIndex: 60,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white/[0.07] p-2 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-500 group-hover:border-white/35 group-hover:bg-white/[0.12]">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-white/10">
                      <img
                        src={photo.image}
                        alt={photo.alt || `Her memory ${index + 1}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        onError={(event) => {
                          const image = event.currentTarget;

                          if (!image.src.endsWith(photo.fallback)) {
                            image.src = photo.fallback;
                          }
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070819]/60 via-transparent to-white/10" />

                      {/* Shine */}
                      <motion.div
                        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/20 blur-md"
                        animate={{
                          left: ["-50%", "150%"],
                        }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          repeatDelay: 3 + index * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Caption */}
                    <div className="px-1 pb-1 pt-3">
                      <p className="font-handwriting text-base text-white/75 sm:text-lg">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-30 mx-auto -mt-4 max-w-xl text-center"
          >
            <p className="font-serif text-sm italic text-white/40">
              "Some people don't just enter your life...
              they quietly make it more beautiful."
            </p>
          </motion.div>

          {/* Continue */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-30 mt-10 flex justify-center"
          >
            <button
              type="button"
              onClick={onNext}
              className="group rounded-full border border-white/20 bg-white/[0.07] px-7 py-3 font-serif text-sm tracking-wide text-white/80 backdrop-blur-md transition hover:border-white/35 hover:bg-white/[0.12]"
            >
              <span className="flex items-center gap-2">
                Continue the story
                <ChevronRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03040d]/95 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close photo"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-30 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft size={23} />
            </button>

            {/* Next */}
            <button
              type="button"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-8"
            >
              <ChevronRight size={23} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedPhoto.image}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="relative max-h-[88vh] max-w-[88vw]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-xl sm:p-4">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.alt || "Memory"}
                  className="max-h-[72vh] max-w-[82vw] rounded-xl object-contain"
                  onError={(event) => {
                    const image = event.currentTarget;

                    if (!image.src.endsWith(selectedPhoto.fallback)) {
                      image.src = selectedPhoto.fallback;
                    }
                  }}
                />

                <div className="px-2 pt-4 text-center">
                  <p className="font-handwriting text-2xl text-white/80">
                    {selectedPhoto.caption}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center font-serif text-xs tracking-[0.25em] text-white/40">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}