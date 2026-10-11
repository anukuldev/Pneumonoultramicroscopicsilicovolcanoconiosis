// ===================================================================
//  BIRTHDAY WEBSITE CONFIGURATION
//  Personalize the entire experience from this file.
// ===================================================================

export interface MemoryItem {
  image: string;
  caption: string;
}

export interface MemoryChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  style:
    | "cinematic-wall"
    | "polaroid"
    | "dreamy-sky"
    | "memory-space"
    | "cinematic-portraits"
    | "memory-universe";
  photos: MemoryItem[];
}

export interface TimelineItem {
  title: string;
  date: string;
  description: string;
  emoji: string;
}

export interface ReasonItem {
  title: string;
  emoji: string;
  message: string;
}

export interface BirthdayConfig {
  name: string;
  birthday: string;

  // PAGE 2 — Birthday Hero
  heroTitle: string;
  heroSubtitle1: string;
  heroSubtitle2: string;

  // PAGE 3 — Her Photo
  photoTitle: string;
  photoMessage: string;
  photoImage: string;

  // NEW — 6 Chapter Memory Journey
  chapters: MemoryChapter[];

  // LEGACY MEMORY DATA
  // Kept temporarily so the existing MemoriesSection
  // continues to work while we build the new chapters.
  memories: MemoryItem[];

  // PAGE 5 — Timeline
  timelineTitle: string;
  timeline: TimelineItem[];

  // PAGE 6 — 3D Memory Space
  memorySpaceTitle: string;
  memorySpaceMessage: string;

  // PAGE 7 — Reasons
  reasonsTitle: string;
  reasons: ReasonItem[];

  // PAGE 8 — Personal Letter
  letterTitle: string;
  letter: string;

  // PAGE 9 — Birthday Cake
  cakeTitle: string;
  cakeButton: string;
  cakeFinalMessage: string;

  // PAGE 10 — Final Surprise
  finalSurpriseTitle: string;
  finalThankYou: string;
  finalMessage: string;
  finalGratitude: string;
}

export const birthdayConfig: BirthdayConfig = {
  // ================================================================
  // BASIC INFORMATION
  // ================================================================

  name: "My Love",

  // We will replace this with the actual birthday later.
  birthday: "October 12, 2026",

  // ================================================================
  // PAGE 2 — BIRTHDAY HERO
  // ================================================================

  heroTitle: "Happy Birthday, My Love ❤️",

  heroSubtitle1: "Today isn't just another day...",

  heroSubtitle2:
    "It's the day someone incredibly special came into this world.",

  // ================================================================
  // PAGE 3 — HER PHOTO
  // ================================================================

  photoTitle: "Here she is... ❤️",

  photoMessage:
    "Out of all the people in this world, somehow my story became more beautiful after you became a part of it.",

  photoImage: `${import.meta.env.BASE_URL}images/her-photo.jpg`,

  // ================================================================
  // 6 CHAPTER MEMORY JOURNEY
  //
  // 48 TOTAL PHOTOS
  // 8 PHOTOS × 6 CHAPTERS
  //
  // We will build the visual experiences later.
  // For now this is only the content/data structure.
  // ================================================================

  chapters: [
    // ==============================================================
    // CHAPTER 01 — THE BEGINNING
    // Visual: Black cinematic 3D photo wall
    // 8 photos
    // ==============================================================

    {
      id: "beginning",
      number: "01",
      title: "The Beginning",
      subtitle: "Every beautiful story has a beginning...",
      style: "cinematic-wall",

      photos: [
        {
          image: `${import.meta.env.BASE_URL}images/chapter01/01.jpg`,
          caption: "Where our story quietly began.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter01/02.jpg`,
          caption: "A moment I didn't know would matter so much.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter01/03.jpg`,
          caption: "The beginning of something beautiful.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter01/04.jpg`,
          caption: "One little moment that changed everything.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter01/05.jpg`,
          caption: "I still remember this feeling.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter01/06.jpg`,
          caption: "Some beginnings become unforgettable.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter01/07.jpg`,
          caption: "And somehow, here we are.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter01/08.jpg`,
          caption: "The first chapter of our little story. ❤️",
        },
      ],
    },

    // ==============================================================
    // CHAPTER 02 — LITTLE MOMENTS
    // Visual: Polaroids / scrapbook / warm memories
    // 8 photos
    // ==============================================================

    {
      id: "little-moments",
      number: "02",
      title: "Little Moments",
      subtitle: "The moments I wish I could keep forever.",
      style: "polaroid",

      photos: [
        {
          image: `${import.meta.env.BASE_URL}images/chapter02/01.jpg`,
          caption: "A little moment worth remembering.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter02/02.jpg`,
          caption: "One of those moments that makes me smile.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter02/03.jpg`,
          caption: "Nothing extraordinary, yet somehow everything.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter02/04.jpg`,
          caption: "The little things are often the biggest things.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter02/05.jpg`,
          caption: "A memory I would happily live again.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter02/06.jpg`,
          caption: "Just you being you. ❤️",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter02/07.jpg`,
          caption: "Another little piece of happiness.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter02/08.jpg`,
          caption: "A memory saved forever. ❤️",
        },
      ],
    },

    // ==============================================================
    // CHAPTER 03 — HER WORLD
    // Visual: Dreamy sky / floating photographs
    // 8 photos
    // ==============================================================

    {
      id: "her-world",
      number: "03",
      title: "You, In Your Own World",
      subtitle: "Some people don't need a beautiful background. They become it.",
      style: "dreamy-sky",

      photos: [
        {
          image: `${import.meta.env.BASE_URL}images/chapter03/01.jpg`,
          caption: "Beautiful without even trying.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter03/02.jpg`,
          caption: "That smile.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter03/03.jpg`,
          caption: "The person behind so many of my smiles.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter03/04.jpg`,
          caption: "You have a way of making ordinary moments beautiful.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter03/05.jpg`,
          caption: "One of my favorite views.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter03/06.jpg`,
          caption: "Graceful, beautiful and completely you.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter03/07.jpg`,
          caption: "A face I could never get tired of seeing.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter03/08.jpg`,
          caption: "My favorite person in her own little world. ❤️",
        },
      ],
    },

    // ==============================================================
    // CHAPTER 04 — OUR MEMORIES
    // Visual: Interactive 3D floating photo space
    // 8 photos
    // ==============================================================

    {
      id: "our-memories",
      number: "04",
      title: "Our Memories",
      subtitle: "If I could keep one thing forever...",
      style: "memory-space",

      photos: [
        {
          image: `${import.meta.env.BASE_URL}images/chapter04/01.jpg`,
          caption: "I'd keep this moment.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter04/02.jpg`,
          caption: "A memory that still feels close.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter04/03.jpg`,
          caption: "One of the days I want to remember forever.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter04/04.jpg`,
          caption: "The kind of memory that never really fades.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter04/05.jpg`,
          caption: "A moment that became a part of me.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter04/06.jpg`,
          caption: "Every memory with you feels a little more special.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter04/07.jpg`,
          caption: "I would replay this one again and again.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter04/08.jpg`,
          caption: "And I hope we make many more like this. ❤️",
        },
      ],
    },

    // ==============================================================
    // CHAPTER 05 — THE BEAUTIFUL YOU
    // Visual: Full-screen cinematic portraits
    // 8 photos
    // ==============================================================

    {
      id: "beautiful-you",
      number: "05",
      title: "The Beautiful You",
      subtitle: "There are some things words can never completely describe.",
      style: "cinematic-portraits",

      photos: [
        {
          image: `${import.meta.env.BASE_URL}images/chapter05/01.jpg`,
          caption: "Beautiful.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter05/02.jpeg`,
          caption: "Graceful.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter05/03.jpg`,
          caption: "Adorable.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter05/04.jpeg`,
          caption: "Unforgettable.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter05/05.jpeg`,
          caption: "My favorite smile.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter05/06.jpg`,
          caption: "My favorite person.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter05/07.jpeg`,
          caption: "Simply you.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter05/08.jpg`,
          caption: "And somehow, you keep getting more beautiful. ❤️",
        },
      ],
    },

    // ==============================================================
    // CHAPTER 06 — FOREVER MEMORIES
    // Visual: Final 3D memory universe
    // 8 photos
    // ==============================================================

    {
      id: "forever-memories",
      number: "06",
      title: "Forever Memories",
      subtitle: "48 little moments. One very special person.",
      style: "memory-universe",

      photos: [
        {
          image: `${import.meta.env.BASE_URL}images/chapter06/01.jpg`,
          caption: "A beautiful feeling I never expected.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter06/02.jpg`,
          caption: "A little piece of you I carry in my heart.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter06/03.jpg`,
          caption: "Somehow, you became someone so special to me.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter06/04.jpg`,
          caption: "A smile of yours can brighten my ordinary days.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter06/05.jpg`,
          caption: "Even from afar, you feel close to my heart.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter06/06.jpg`,
          caption: "Some connections are beautiful even before the first meeting.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter06/07.jpg`,
          caption: "And everything still waiting for us.",
        },
        {
          image: `${import.meta.env.BASE_URL}images/chapter06/08.jpg`,
          caption: "This isn't the end of our memories. ❤️",
        },
      ],
    },
  ],

  // ================================================================
  // LEGACY MEMORY DATA
  //
  // IMPORTANT:
  // The existing MemoriesSection still reads this array.
  // We keep it temporarily so the current website continues
  // working while we replace that section with Chapter 01 + 02.
  // ================================================================

  memories: [
    {
      image: `${import.meta.env.BASE_URL}images/memory1.jpg`,
      caption: "That day I'll always remember ❤️",
    },
    {
      image: `${import.meta.env.BASE_URL}images/memory2.jpg`,
      caption: "One of my favorite moments with you.",
    },
    {
      image: `${import.meta.env.BASE_URL}images/memory3.jpg`,
      caption: "Some moments are impossible to forget.",
    },
    {
      image: `${import.meta.env.BASE_URL}images/memory4.jpg`,
      caption: "A perfect day, just you and me.",
    },
    {
      image: `${import.meta.env.BASE_URL}images/memory5.jpg`  ,
      caption: "The smile that lights up my world.",
    },
    {
      image: `${import.meta.env.BASE_URL}images/memory6.jpg`,
      caption: "Forever my favorite view.",
    },
  ],

  // ================================================================
  // PAGE 5 — TIMELINE
  // ================================================================

  timelineTitle: "Our Little Story ❤️",

  timeline: [
    {
      title: "The First Yes",
      date: "Before our first real conversation",
      description:
        "Before we had properly spoken, you had already seen me on a video call and quietly said yes at home. ❤️ I sometimes think about how beautiful that is—before we knew each other's little habits, dreams, or stories, you had already given our story its first little beginning.",
    emoji: "❤️",
    },

    {
      title: "The Message That Changed Everything",
      date: "29 August 2026",
      description:
        "It started with a simple message, a little guessing game, and your innocent 'Pachaniye.' Later, you told me how nervously you had gathered the courage to text me. You might have thought it was just a small beginning, but that one conversation became something I would never want to call ordinary.",
    emoji: "💌",
    },

    {
      title: "A Prayer With My Name",
      date: "1 September 2026",
      description:
        "When you told me, 'Mai to roj apko mangti hu Bhagwan se,' your words touched a place in my heart that ordinary words never could. I don't know what the future holds, but knowing that you remembered me in your prayers made me wish that Bhagwan would always give us the strength to find our way to each other. 🙏❤️",
    emoji: "💫",
    },

    {
      title: "Missing You, Already",
      date: "13 September 2026",
      description:
        "I'll always remember your little 'I miss u pglu' followed by 'Bahut miss krti hu apko.' ❤️ We were still getting to know each other, yet our messages and calls had already started becoming a special part of our days. Sometimes, even without being beside someone, the heart begins to feel their absence.",
    emoji: "🥹",
    },

    {
    title: "I Choose You, As You Are",
    date: "30 September 2026",
    description:
      "When you were feeling low and worrying about whether your education might become a reason for someone to say no, I wanted you to know that you didn't have to be perfect to be precious to me. I wanted you to feel accepted as you are. To me, a beautiful future isn't about changing each other into someone else—it's about understanding, respecting, and standing beside each other. ❤️",
    emoji: "🫶",
  },

    {
      title: "Today ❤️",
      date: "Your birthday",
      description:
        "Celebrating you, the most beautiful person in my world, today and always, meri princess.",
      emoji: "🎂",
    },
  ],

  // ================================================================
  // PAGE 6 — 3D MEMORY SPACE
  // ================================================================

  memorySpaceTitle: "If I could keep one thing forever...",

  memorySpaceMessage:
    "I'd keep every moment I got to spend with you. ❤️",

  // ================================================================
  // PAGE 7 — REASONS YOU'RE SPECIAL
  // ================================================================

  reasonsTitle: "Reasons You're Special To Me ❤️",

  reasons: [
    {
      title: "Your Smile",
      emoji: "😊",
      message:
        "Your smile has the power to turn my darkest days into something bright. It's the thing I look forward to most.",
    },

    {
      title: "Your Kindness",
      emoji: "❤️",
      message:
        "The way you care for me, the gentleness in your heart — it reminds me that goodness still exists in this world.",
    },

    {
      title: "The Way You Make Me Happy",
      emoji: "🌟",
      message:
        "Without even trying, you bring joy into my life. Just being near you, even in silence, feels like home.",
    },

    {
      title: "Your Beautiful Heart",
      emoji: "💎",
      message:
        "Your heart is rare and precious. It loves deeply, forgives easily, and sees the best in me.",
    },

    {
      title: "Your Presence",
      emoji: "🌙",
      message:
        "There's a calm that comes with having you around. The world makes more sense when you're in my life.",
    },

    {
      title: "The Little Things You Do",
      emoji: "🌷",
      message:
        "The way you care for me, check on me, remember small things, listen to me, and sometimes just stay there without saying much—I notice all of it.",
    },

    {
      title: "Your Strength",
      emoji: "🔥",
      message:
        "Your strength inspires me. I want my happiness, support and presence in your life to always remind you that you never have to face everything alone.",
    },

    {
      title: "The Way You Love",
      emoji: "💞",
      message:
        "Being loved by you is one of the greatest gifts I've ever received.",
    },
  ],

  // ================================================================
  // PAGE 8 — PERSONAL LETTER
  // ================================================================

  letterTitle: "A Little Something From My Heart ❤️",

  letter: `Janamdin mubarak ho, meri Ladli,❤️ meri sabse pyaari dua. 🎂❤️

Aaj tumhara birthday hai, lekin sach kahun toh mere liye ye sirf tumhara birthday nahi hai… ye us din ki yaad hai jis din meri life mein ek aisi person aayi, jo dheere-dheere meri life ka sabse beautiful part ban gayi.

Main shayad har baar words mein express nahi kar pata ki tum mere liye kitni important ho. Kabhi busy hota hoon, kabhi stupid behave karta hoon, kabhi bina wajah irritate bhi kar deta hoon… but deep down, I genuinely care about you more than I can explain.

Mujhe tumhari smile achchi lagti hai, tumhari little-little baatein achchi lagti hain, tumhara care karna achcha lagta hai… aur sabse zyada ye feeling achchi lagti hai ki tum meri life mein ho. ❤️

Main chahta hoon ki tum hamesha khush raho, apne dreams achieve karo aur life mein kabhi kisi cheez ke liye khud ko less feel na karo. Aur jab life difficult ho, jab tum tired ho ya jab tumhe lage ki sab kuch against ja raha hai… bas itna yaad rakhna, I'm always there for you.

Aaj tumhare janamdin par Bhagwan se bas yahi dua hai ki tumhari zindagi khushiyon se bhari rahe, tumhare dil ki har khwahish poori ho, aur tumhari muskurahat kabhi kisi gham ki nazar na lage. Zindagi tumhe har woh sukoon aur pyaar de, jiski tum haqdar ho… aur meri taraf se tumhe hamesha itna pyaar mile ki tum kabhi khud ko akela mehsoos na karo. ❤️
Thank you for being you.
Thank you for coming into my life.
And thank you for giving me so many reasons to smile.

I don't know what the future holds for us, but I know one thing—
I want to keep making beautiful memories with you, keep caring for you, and keep choosing you, again and again. ❤️

Janamdin mubarak ho, meri Ladli,❤️ meri sabse pyaari dua. 🎂❤️

Tumhari zindagi ka har aane wala saal tumhare liye aur bhi khoobsurat ho… aur un khoobsurat saalon mein, main bhi tumhare saath rahun.

You are not just someone I love…
you are someone I genuinely care about, respect, and never want to lose.

With all my love,`,

  // ================================================================
  // PAGE 9 — BIRTHDAY CAKE
  // ================================================================

  cakeTitle: "Make a Wish 🎂✨",

  cakeButton: "Blow the Candles",

  cakeFinalMessage:
    "May every wish you make today come true.",

  // ================================================================
  // PAGE 10 — FINAL SURPRISE
  // ================================================================

  finalSurpriseTitle:
    "Wait... there's one more thing.",

  finalThankYou:
    "Thank you for being a beautiful part of my life, meri jaan. ❤️",

  finalMessage:
    "Here's to more memories, more laughter, more adventures and many more birthdays together.",

  finalGratitude:
    "Forever grateful for you. ❤️",
};