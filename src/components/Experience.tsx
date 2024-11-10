import { experienceItems } from "@/data";
import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
import FocusCards from "@/components/FocusCards";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <FocusCards cards={experienceItems} />
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/Resume.pdf"
        className="group -m-6 flex w-fit items-center gap-2 p-6"
      >
        <p className="font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 lg:text-lg">
          View Full Resume
        </p>
        <BsArrowRight
          strokeWidth={1.25}
          className="transition-transform duration-100 group-hover:translate-x-2 group-hover:text-blue-700 dark:group-hover:text-blue-300"
        />
      </Link>
    </Section>
  );
};

export default Experience;
