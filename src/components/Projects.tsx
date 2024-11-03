import { projectItems } from "@/data";
import FocusCards from "./FocusCards";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col xl:gap-4">
      <SectionTitle>Projects</SectionTitle>

      <FocusCards cards={projectItems} variant="project" />
    </section>
  );
};

export default Projects;
