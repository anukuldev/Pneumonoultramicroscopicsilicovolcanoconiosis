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

interface Chapter06ForeverMemoriesProps {
  onNext: () => void;
}

const fallbackImages = [
  "/images/chapter06/01.jpg",
  "/images/chapter06/02.jpeg",
  "/images/chapter06/03.jpg",
  "/images/chapter06/04.jpeg",
  "/images/chapter06/05.jpg",
  "/images/chapter06/06.jpg",
  "/images/chapter06/07.jpeg",
  "/images/chapter06/08.jpg",
];

const captions = [
"A beautiful feeling I never expected.",
"A little piece of you I carry in my heart.",
"Somehow, you became someone so special to me.",
"A smile of yours can brighten my ordinary days.",
"Even from afar, you feel close to my heart.",
"Some connections are beautiful even before the first meeting.",
"One day, I hope to turn these feelings into memories.",
"And someday, I'll have a thousand little moments with you. ❤️",
];

const positions = [
  { left: "7%", top: "9%", rotate: -7 },
  { left: "54%", top: "6%", rotate: 5 },
  { left: "28%", top: "24%", rotate: -3 },
  { left: "72%", top: "29%", rotate: 7 },
  { left: "5%", top: "51%", rotate: 5 },
  { left: "48%", top: "55%", rotate: -6 },
  { left: "23%", top: "76%", rotate: 5 },
  { left: "69%", top: "76%", rotate: -4 },
];

export default function Chapter06ForeverMemories({
  onNext,
}: Chapter06ForeverMemoriesProps) {
  const chapter = birthdayConfig.chapters.find(
    (item) => item.id === "forever-memories"
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const photos = useMemo(() => {
    if (!chapter) return [];

    return chapter.photos.map((photo, index) => ({
      ...photo,
      fallback: fallbackImages[index % fallbackImages.length],
      caption: photo.caption || captions[index],
      position: positions[index],
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
        id="forever-memories"
        className="relative min-h-screen overflow-hidden bg-[#0a0809] py-28 text-[#f8eee8]"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(224,177,155,0.13),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(164,103,91,0.08),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(225,193,153,0.07),transparent_28%)]" />

        {/* Warm glow */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8a995]/[0.06] blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tiny stars / particles */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 28 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-[2px] w-[2px] rounded-full bg-[#f8ddd0]"
              style={{
                left: `${(index * 43) % 100}%`,
                top: `${(index * 67) % 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.65, 0.1],
              }}
              transition={{
                duration: 3 + (index % 4),
                repeat: Infinity,
                delay: index * 0.15,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="mb-4 font-serif text-xs uppercase tracking-[0.45em] text-[#c9a99d]/60">
              Chapter 06
            </p>

            <h2 className="font-serif text-5xl font-light tracking-wide sm:text-8xl">
              Forever Someday
            </h2>

            <p className="mx-auto mt-6 max-w-xl font-serif text-base italic leading-7 text-white/40 sm:text-lg">
              Our story is still unfolding.
              <br />
              The most beautiful moments may be waiting for us.
            </p>
          </motion.div>

          {/* Memory wall */}
          <div className="relative mx-auto mt-12 h-[760px] max-w-6xl sm:h-[900px]">
            {/* Large circular halo */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e3b8a4]/10"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e3b8a4]/[0.07]"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center */}
            <motion.div
              className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 text-center sm:block"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                size={28}
                className="mx-auto mb-4 text-[#e6b7aa]/60"
                fill="currentColor"
              />

              <p className="font-handwriting text-3xl text-[#f6ded5]/75">
                forever
              </p>

              <p className="mt-2 font-serif text-[10px] uppercase tracking-[0.35em] text-white/25">
                in every little memory
              </p>
            </motion.div>

            {/* Photos */}
            {photos.map((photo, index) => (
              <motion.button
                key={`${photo.image}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group absolute z-20 w-[43%] max-w-[190px] cursor-pointer text-left sm:w-[24%] sm:max-w-[230px]"
                style={{
                  left: positions[index].left,
                  top: positions[index].top,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: photo.position.rotate - 8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: photo.position.rotate,
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  zIndex: 80,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <motion.div
                  animate={{
                    y: [
                      0,
                      index % 2 === 0 ? -10 : 10,
                      0,
                    ],
                  }}
                  transition={{
                    duration: 5 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}
                  className="relative"
                >
                  {/* Glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-[#d6a695]/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

                  {/* Photo */}
                  <div className="relative overflow-hidden rounded-xl border border-[#e6c0b2]/15 bg-[#fff5ef]/[0.055] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-md transition duration-500 group-hover:border-[#e6c0b2]/40 group-hover:bg-[#fff5ef]/[0.10]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-white/10">
                      <img
                        src={photo.image}
                        alt={photo.alt || `Forever memory ${index + 1}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        onError={(event) => {
                          const image = event.currentTarget;

                          if (!image.src.endsWith(photo.fallback)) {
                            image.src = photo.fallback;
                          }
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/10" />

                      <span className="absolute bottom-2 left-2 font-serif text-[10px] tracking-[0.25em] text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="px-1 pb-1 pt-3 font-handwriting text-base leading-5 text-[#f4ddd4]/75 sm:text-lg">
                      {photo.caption}
                    </p>
                  </div>

                  <Sparkles
                    size={13}
                    className="absolute -right-2 -top-2 text-[#e4b8aa]/50"
                  />
                </motion.div>
              </motion.button>
            ))}
          </div>

          {/* Final statement */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="font-serif text-xl font-light leading-9 text-white/55 sm:text-3xl sm:leading-10">
              Some memories fade with time.
            </p>

            <p className="mt-2 font-serif text-xl font-light leading-9 text-[#e5b9aa]/80 sm:text-3xl sm:leading-10">
              Ours don't have to.
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mx-auto mt-7 h-px bg-[#d8aa99]/50"
            />

            <p className="mt-6 font-handwriting text-3xl text-white/60">
              forever starts with today. ♡
            </p>
          </motion.div>

          {/* Continue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <button
              type="button"
              onClick={onNext}
              className="group rounded-full border border-[#e2b8aa]/20 bg-white/[0.05] px-8 py-3 font-serif text-sm tracking-wide text-white/70 backdrop-blur-md transition hover:border-[#e2b8aa]/40 hover:bg-white/[0.09]"
            >
              <span className="flex items-center gap-2">
                One last thing...
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
              className="absolute right-4 top-4 z-30 rounded-full border border-white/15 bg-white/[0.08] p-3 text-white backdrop-blur-md sm:right-8 sm:top-8"
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
              className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-white/[0.08] p-3 text-white backdrop-blur-md sm:left-8"
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
              className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-white/[0.08] p-3 text-white backdrop-blur-md sm:right-8"
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
              transition={{
                duration: 0.4,
              }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="rounded-2xl border border-[#e3b8aa]/15 bg-white/[0.05] p-3 shadow-2xl backdrop-blur-xl sm:p-4">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.alt || "Forever memory"}
                  className="max-h-[70vh] max-w-[82vw] rounded-xl object-contain"
                  onError={(event) => {
                    const image = event.currentTarget;

                    if (!image.src.endsWith(selectedPhoto.fallback)) {
                      image.src = selectedPhoto.fallback;
                    }
                  }}
                />

                <p className="px-2 pt-4 text-center font-handwriting text-2xl text-[#f2d8d0]/80">
                  {selectedPhoto.caption}
                </p>
              </div>

              <p className="mt-4 text-center font-serif text-[10px] tracking-[0.3em] text-white/30">
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