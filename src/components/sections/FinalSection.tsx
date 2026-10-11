import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Sparkles } from "lucide-react";
import { birthdayConfig } from "@/config/birthdayConfig";

export default function FinalSection() {
  const [revealed, setRevealed] = useState(false);
  const [replay, setReplay] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRevealed(true);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  const handleReplay = () => {
    setReplay(true);

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.setTimeout(() => {
        setReplay(false);
      }, 1200);
    }, 350);
  };

  const name =
    birthdayConfig.name ||
    "My Love";

  return (
    <section
      id="final"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#080708]
        px-6
        py-24
        text-[#f8f1ea]
      "
    >
      {/* =================================================
          BACKGROUND LIGHT
      ================================================= */}

      <motion.div
        animate={{
          x: ["-15%", "15%", "-10%"],
          y: ["-8%", "12%", "-5%"],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d8b58a]/[0.055]
          blur-[120px]
        "
      />

      {/* second tiny rose glow */}

      <motion.div
        animate={{
          x: ["10%", "-12%", "8%"],
          y: ["8%", "-10%", "12%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#b9828d]/[0.035]
          blur-[100px]
        "
      />

      {/* =================================================
          FILM GRAIN
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />

      {/* =================================================
          TOP & BOTTOM CINEMATIC SHADOW
      ================================================= */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/30 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* small opening mark */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: revealed ? 0.85 : 0,
            scale: revealed ? 1 : 0.6,
          }}
          transition={{
            duration: 1.2,
          }}
          className="mb-10 flex justify-center"
        >
          <div className="relative flex h-12 w-12 items-center justify-center">

            <div className="absolute inset-0 rounded-full border border-[#d8b58a]/30" />

            <div className="absolute inset-[7px] rounded-full border border-[#d8b58a]/10" />

            <Sparkles
              size={15}
              strokeWidth={1}
              className="text-[#d8b58a]"
            />
          </div>
        </motion.div>

        {/* =================================================
            SMALL TITLE
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: revealed ? 0.65 : 0,
            y: revealed ? 0 : 18,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
          className="
            mb-7
            text-[9px]
            font-medium
            uppercase
            tracking-[0.55em]
            text-[#ead5b7]
            sm:text-[10px]
          "
        >
          and this is only the beginning
        </motion.p>

        {/* =================================================
            MAIN STATEMENT
        ================================================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: revealed ? 1 : 0,
            y: revealed ? 0 : 35,
            filter: revealed
              ? "blur(0px)"
              : "blur(8px)",
          }}
          transition={{
            duration: 1.7,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-3xl
            font-serif
            text-[2.7rem]
            font-normal
            leading-[1.08]
            tracking-[-0.025em]
            text-[#f8f1ea]
            sm:text-6xl
            md:text-7xl
          "
        >
          Happy Birthday,
          <br />

          <span className="italic text-[#d8b58a]">
            {name}.
          </span>
        </motion.h2>

        {/* =================================================
            GOLD LINE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: revealed ? 0.7 : 0,
            scaleX: revealed ? 1 : 0,
          }}
          transition={{
            duration: 1.3,
            delay: 1.15,
          }}
          className="
            mx-auto
            my-9
            h-px
            w-16
            bg-[#d8b58a]
          "
        />

        {/* =================================================
            FINAL MESSAGE
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: revealed ? 0.72 : 0,
            y: revealed ? 0 : 20,
          }}
          transition={{
            duration: 1.4,
            delay: 1.35,
          }}
          className="
            mx-auto
            max-w-xl
            text-sm
            font-light
            leading-7
            tracking-wide
            text-[#f7eee8]/80
            sm:text-base
            sm:leading-8
          "
        >
          May every year ahead bring you more
          reasons to smile, more moments worth
          remembering, and more happiness than
          you ever imagined.
        </motion.p>

        {/* =================================================
            HEART
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: revealed ? 1 : 0,
            scale: revealed ? 1 : 0.5,
          }}
          transition={{
            duration: 1.1,
            delay: 1.75,
          }}
          className="mt-10"
        >
          <motion.span
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              inline-block
              text-2xl
              font-light
              text-[#d8b58a]
            "
          >
            ♡
          </motion.span>
        </motion.div>

        {/* =================================================
            REPLAY BUTTON
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: revealed ? 1 : 0,
            y: revealed ? 0 : 20,
          }}
          transition={{
            duration: 1.2,
            delay: 2.05,
          }}
          className="mt-14"
        >
          <button
            type="button"
            onClick={handleReplay}
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              border
              border-[#d8b58a]/35
              px-6
              py-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#ead5b7]
              transition-all
              duration-500
              hover:border-[#d8b58a]/70
              hover:text-[#fff5eb]
            "
          >
            {/* button shine */}

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-[#d8b58a]/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            <RotateCcw
              size={12}
              strokeWidth={1.4}
              className={`
                relative
                transition-transform
                duration-500
                ${
                  replay
                    ? "rotate-[-360deg]"
                    : "group-hover:-rotate-45"
                }
              `}
            />

            <span className="relative">
              replay the story
            </span>
          </button>
        </motion.div>

        {/* =================================================
            FINAL SIGNATURE
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: revealed ? 0.28 : 0,
          }}
          transition={{
            duration: 1.5,
            delay: 2.4,
          }}
          className="
            mt-16
            text-[8px]
            uppercase
            tracking-[0.45em]
            text-[#f8f1ea]
          "
        >
          made with love
        </motion.p>

      </div>
    </section>
  );
}