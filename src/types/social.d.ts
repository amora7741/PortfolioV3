import { IconType } from "react-icons";

type SocialItem = {
  isLink: boolean;
  name: string;
  url?: string;
  icon: IconType;
  toast?: {
    message: string;
    clipboardText: string;
  };
};
