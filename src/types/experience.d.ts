type BaseItem = {
  description: string;
  technologies: string[];
  website?: string;
  links?: {
    name: string;
    url: string;
  }[];
};

type ExperienceItem = BaseItem & {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
};

type ProjectItem = BaseItem & {
  title: string;
  photoUrl: string;
};
