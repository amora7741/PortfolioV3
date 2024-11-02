import { experienceItems } from "@/data";
import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
import FocusCards from "./FocusCards";

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col xl:gap-4">
      <h1 className="font-bold uppercase xl:hidden">Experience</h1>

      <FocusCards cards={experienceItems} />

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/Resume.pdf"
        className="group -m-6 flex w-fit items-center gap-2 p-6"
      >
        <p className="font-medium group-hover:text-blue-700 lg:text-lg">
          View Full Resume
        </p>
        <BsArrowRight
          strokeWidth={1.25}
          className="transition-transform duration-100 group-hover:translate-x-2 group-hover:text-blue-700"
        />
      </Link>
    </section>
  );
};

export default Experience;
