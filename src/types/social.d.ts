import { IconType } from "react-icons";

type SocialLink = {
  name: string;
  url?: string;
  icon: IconType;
  toast?: {
    message: string;
    clipboardText: string;
  };
};
