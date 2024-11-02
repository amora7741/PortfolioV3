import { projectItems } from "@/data";
import FocusCards from "./FocusCards";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col xl:gap-4">
      <h1 className="font-bold uppercase xl:hidden">Projects</h1>

      <FocusCards cards={projectItems} variant="project" />
    </section>
  );
};

export default Projects;
