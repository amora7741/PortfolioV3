import { projectItems } from "@/data";
import FocusCards from "@/components/FocusCards";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <FocusCards cards={projectItems} variant="project" />
    </Section>
  );
};

export default Projects;
