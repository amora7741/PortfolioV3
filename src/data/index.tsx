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
      "Collaborated with a development team of 8 to enhance the user interface of the company webiste.",
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
