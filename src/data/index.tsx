import { SocialItem } from "@/types/social";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const socialItems: SocialItem[] = [
  {
    isLink: true,
    name: "Github",
    url: "https://github.com/amora7741",
    icon: FaGithub,
  },
  {
    isLink: true,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amoralopez/",
    icon: FaLinkedin,
  },
  {
    isLink: false,
    name: "Email",
    icon: IoMdMail,
    toast: {
      message: "Email copied to clipboard",
      clipboardText: "mora7741@gmail.com",
    },
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: "UpUnikSelf Inc.",
    position: "Frontend Developer",
    startDate: "Sep",
    endDate: "Oct 2024",
    description:
      "Collaborated with a development team of 8 to enhance the user interface of the company website. Designed and maintained reusable components to ensure consistency and scalability across the site, optimized page performance, and improved the overall user experience.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
    ],
    website: "https://www.upunikself.xyz/",
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Realtime Chat App",
    description:
      "A full-stack chat application which allwos real-time communication between friends.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UpStash Redis",
      "Pusher Channels",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/amora7741/RealTimeChat",
      },
    ],
    website: "https://real-time-chat-orpin.vercel.app/",
    photoUrl: "/RealTimeChat.png",
  },
  {
    title: "X Clone",
    description:
      "A clone of the massive social media site X (formerly Twitter). Create posts, like and comment on other users' posts, and follow other users!",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "SASS"],
    links: [{ name: "GitHub", url: "https://github.com/amora7741/XClone" }],
    website: "https://x-clone-mocha.vercel.app/",
    photoUrl: "/XClone.png",
  },
  {
    title: "Where's Waldo?",
    description:
      "The popular puzzle game, Where's Waldo?, recreated as a web app. The game is timed and the player's final time is placed onto a global leaderboard.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/amora7741/PhotoTagging-Frontend",
      },
    ],
    website: "https://photo-tagging-frontend.vercel.app/",
    photoUrl: "/WheresWaldo.png",
  },
  {
    title: "Breeze",
    description:
      "A (mock) shopping app, utilizing FakeStoreAPI to fetch purchasble items along with their price and review rating. Shop through a wide assortment of products today!",
    technologies: ["React.js", "JavaScript", "CSS"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/amora7741/ShoppingApp",
      },
    ],
    website: "https://shopping-app-rose-gamma.vercel.app/",
    photoUrl: "/Breeze.png",
  },
  {
    title: "Memory Game",
    description:
      "A memory game where the player must choose Pokemon cards without repeating any cards. The game contains multiple difficulty levels. The higher the level, the more cards there is to choose from!",
    technologies: ["React.js", "JavaScript", "Framer Motion", "CSS"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/amora7741/MemoryGame",
      },
    ],
    website: "https://memory-game-six-alpha.vercel.app/",
    photoUrl: "/MemoryGame.png",
  },
];
