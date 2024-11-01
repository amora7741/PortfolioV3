type ExperienceItem = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  website?: string;
  links?: {
    name: string;
    url: string;
  }[];
};
