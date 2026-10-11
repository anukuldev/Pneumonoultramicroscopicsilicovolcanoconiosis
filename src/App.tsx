import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import IntroPage from "@/components/sections/IntroPage";
import HeroSection from "@/components/sections/HeroSection";
import PhotoSection from "@/components/sections/PhotoSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import LetterSection from "@/components/sections/LetterSection";
import CakeSection from "@/components/sections/CakeSection";
import FinalSection from "@/components/sections/FinalSection";

import Chapter01Beginning from "@/components/chapters/Chapter01Beginning";
import Chapter02LittleMoments from "@/components/chapters/Chapter02LittleMoments";
import Chapter03HerWorld from "@/components/chapters/Chapter03HerWorld";
import Chapter05BeautifulYou from "@/components/chapters/Chapter05BeautifulYou";
import Chapter06ForeverMemories from "@/components/chapters/Chapter06ForeverMemories";

import Navigation from "@/components/Navigation";
import MusicControl from "@/components/MusicControl";

function App() {
  const [started, setStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();

    window.addEventListener("resize", check);

    return () => {
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("resize", check);
    };
  }, []);

  /* =====================================================
     START OUR STORY
     Hero button -> Photo Section
  ===================================================== */

  const scrollToStory = () => {
    document.getElementById("photo")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =====================================================
     CHAPTER 02
     Turn the page -> Chapter 03
  ===================================================== */

  const goToHerWorld = () => {
    document
      .getElementById("her-world")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* =====================================================
     CHAPTER 03
     Continue the story -> Timeline
  ===================================================== */

  const goToTimeline = () => {
    document
      .getElementById("story")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* =====================================================
     CHAPTER 06
     One last thing -> Letter
  ===================================================== */

  const goToLetter = () => {
    document
      .getElementById("letter")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0410] text-pink-50">

      {/* =================================================
          INTRO
      ================================================= */}

      {!started && (
        <IntroPage
          onOpen={() => {
            setStarted(true);
          }}
        />
      )}

      {/* =================================================
          GLOBAL BACKGROUND
          SAME ORIGINAL BEHAVIOUR
      ================================================= */}

      <AnimatePresence>
        {started && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* BackgroundScene intentionally kept out
                of the visible section layout changes. */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          MAIN STORY
      ================================================= */}

      {started && (
        <main className="relative z-10">

          {/* HERO */}

          <HeroSection
            onCta={scrollToStory}
          />

          {/* HERO PHOTO */}

          <PhotoSection />

          {/* CHAPTER 01 */}

          <Chapter01Beginning />

          {/* CHAPTER 02 */}

          <Chapter02LittleMoments
            onNext={goToHerWorld}
          />

          {/* CHAPTER 03 */}

          <Chapter03HerWorld
            onNext={goToTimeline}
          />

          {/* =================================================
              TIMELINE — DARK BACKGROUND
          ================================================= */}

          <section className="relative bg-[#0b0b0f] text-white">
            <TimelineSection />
          </section>

          {/* =================================================
              OUR MEMORIES — DARK BACKGROUND
          ================================================= */}

        

          {/* REASONS */}

          <ReasonsSection />

          {/* CHAPTER 05 */}

          <Chapter05BeautifulYou />

          {/* CHAPTER 06 */}

          <Chapter06ForeverMemories
            onNext={goToLetter}
          />

          {/* =================================================
              LETTER — DARK BACKGROUND
          ================================================= */}

          <section className="relative bg-[#0b0b0f] text-white">
            <LetterSection />
          </section>

          {/* CAKE */}

          <CakeSection />

          {/* FINAL */}

          <FinalSection />

        </main>
      )}

      {/* =================================================
          NAVIGATION
          ONLY AFTER STORY STARTS
      ================================================= */}

      {started && <Navigation />}

      {/* =================================================
          MUSIC
          ONLY AFTER STORY STARTS
      ================================================= */}

      {started && (
        <MusicControl startPlaying={true} />
      )}
    </div>
  );
}

export default App;