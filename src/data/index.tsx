import { SocialLink } from "@/types/social";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/amora7741",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amoralopez/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    icon: IoMdMail,
    toast: {
      message: "Email copied to clipboard",
      clipboardText: "mora7741@gmail.com",
    },
  },
];
