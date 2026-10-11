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

interface Chapter02LittleMomentsProps {
  onNext: () => void;
}

const fallbackImages = [
  "/images/chapter02/01.jpg",
  "/images/chapter02/02.jpg",
  "/images/chapter02/03.jpg",
  "/images/chapter02/04.jpg",
  "/images/chapter02/05.jpg",
  "/images/chapter02/06.jpg",
  "/images/chapter02/07.jpg",
  "/images/chapter02/08.jpg",
];

const rotations = [-5, 4, -3, 6, -4, 3, -6, 5];

const positions = [
  { left: "4%", top: "7%" },
  { left: "52%", top: "4%" },
  { left: "23%", top: "27%" },
  { left: "68%", top: "29%" },
  { left: "2%", top: "55%" },
  { left: "46%", top: "56%" },
  { left: "25%", top: "77%" },
  { left: "70%", top: "76%" },
];

const captions = [
  "A little moment worth remembering.",
  "Some memories need no explanation.",
  "The moments that made us smile.",
  "A beautiful day, frozen in time.",
  "Just you being you. ❤️",
  "Small moments, big feelings.",
  "One more memory for our story.",
  "And somehow, every picture feels special.",
];

export default function Chapter02LittleMoments({
  onNext,
}: Chapter02LittleMomentsProps) {
  const chapter = birthdayConfig.chapters.find(
    (item) => item.id === "little-moments"
  );

  const photos = useMemo(() => {
    if (!chapter) return [];

    return chapter.photos.map((photo, index) => ({
      ...photo,
      fallback: fallbackImages[index % fallbackImages.length],
      caption: photo.caption || captions[index],
      rotation: rotations[index],
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
        id="little-moments"
        className="relative min-h-screen overflow-hidden bg-[#eee2cf] py-24 text-[#30241f]"
      >
        {/* Background paper texture */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(60,40,30,0.12) 0.7px, transparent 0.7px)",
              backgroundSize: "7px 7px",
            }}
          />
        </div>

        {/* Decorative background circles */}
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#d6b89d] opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#d9aeb4] opacity-25 blur-3xl" />

        {/* Small decorative hearts */}
        <motion.div
          className="absolute left-[8%] top-[12%] text-[#9b686d]"
          animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Heart size={22} fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute right-[9%] top-[17%] text-[#a77b5e]"
          animate={{ y: [0, 8, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Sparkles size={23} />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          {/* Chapter heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.35em] text-[#96766c]">
              Chapter 02
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-wide sm:text-6xl">
              Little Moments
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#69554b] sm:text-lg">
              Not every memory needs a grand story.
              <br />
              Sometimes, the smallest moments become our favourites.
            </p>
          </motion.div>

          {/* Scrapbook */}
          <div className="relative mx-auto h-[760px] max-w-5xl sm:h-[850px]">
            {/* Center paper */}
            <div className="absolute left-1/2 top-1/2 h-[92%] w-[96%] -translate-x-1/2 -translate-y-1/2 rotate-[0.4deg] bg-[#f7f0e5] shadow-[0_25px_80px_rgba(61,39,25,0.15)] sm:w-[88%]" />

            {/* Paper lines */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 opacity-30">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(112,91,75,0.12) 32px)",
                }}
              />
            </div>

            {/* Photos */}
            {photos.map((photo, index) => (
              <motion.button
                key={`${photo.image}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group absolute z-20 w-[42%] max-w-[260px] cursor-pointer text-left sm:w-[28%]"
                style={{
                  left: positions[index].left,
                  top: positions[index].top,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  rotate: rotations[index] - 8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: rotations[index],
                }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.07,
                  rotate: 0,
                  zIndex: 50,
                  transition: { duration: 0.25 },
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                {/* Washi tape */}
                <div
                  className="absolute -top-4 left-1/2 z-30 h-9 w-20 -translate-x-1/2 rotate-[-3deg] opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(214,189,153,0.9), rgba(236,217,186,0.85))",
                  }}
                />

                {/* Photo card */}
                <div className="bg-[#fffdf8] p-2 pb-4 shadow-[0_12px_30px_rgba(47,35,25,0.20)] sm:p-3 sm:pb-5">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#ded4c8]">
                    <img
                      src={photo.image}
                      alt={photo.alt || `Memory ${index + 1}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      onError={(event) => {
                        const image = event.currentTarget;

                        if (image.src.endsWith(photo.fallback)) {
                          return;
                        }

                        image.src = photo.fallback;
                      }}
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />
                  </div>

                  <p className="mt-3 line-clamp-2 text-center font-serif text-xs italic leading-5 text-[#624d43] sm:text-sm">
                    {photo.caption}
                  </p>
                </div>
              </motion.button>
            ))}

            {/* Handwritten center note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute left-1/2 top-[43%] z-10 hidden w-40 -translate-x-1/2 sm:block"
            >
              <div className="rotate-[-2deg] rounded-sm bg-[#f3dfad] px-5 py-4 text-center shadow-md">
                <p className="font-handwriting text-xl text-[#654b3b]">
                  the little things
                </p>
                <p className="mt-1 font-serif text-xs text-[#82695a]">
                  are often the biggest things
                </p>
              </div>
            </motion.div>

            {/* Bottom decorative note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute bottom-[2%] left-1/2 z-30 -translate-x-1/2 text-center"
            >
              <p className="font-handwriting text-2xl text-[#86625c] sm:text-3xl">
                And I would choose every one again. ♡
              </p>
            </motion.div>
          </div>

          {/* Continue */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-30 mt-6 flex justify-center"
          >
            <button
              type="button"
              onClick={onNext}
              className="group rounded-full border border-[#8d6e61]/40 bg-[#fffaf2]/80 px-7 py-3 font-serif text-sm tracking-wide text-[#5d463c] shadow-sm backdrop-blur transition hover:bg-[#fffaf2]"
            >
              <span className="flex items-center gap-2">
                Turn the page
                <ChevronRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#160f0c]/95 px-4 py-8 backdrop-blur-md"
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
              className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:right-8 sm:top-8"
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
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:left-8"
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
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:right-8"
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
              <div className="bg-[#fffaf2] p-3 pb-7 shadow-2xl sm:p-5 sm:pb-10">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.alt || "Memory"}
                  className="max-h-[72vh] max-w-[82vw] object-contain"
                  onError={(event) => {
                    const image = event.currentTarget;

                    if (!image.src.endsWith(selectedPhoto.fallback)) {
                      image.src = selectedPhoto.fallback;
                    }
                  }}
                />

                <div className="px-2 pt-4 text-center">
                  <p className="font-handwriting text-2xl text-[#624d43]">
                    {selectedPhoto.caption}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center font-serif text-xs tracking-[0.25em] text-white/60">
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