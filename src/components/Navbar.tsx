"use client";

import Link from "next/link";
import useNavbarStore from "@/store/navbar";

const NavbarItems: { name: string; href: SectionID }[] = [
  { name: "About Me", href: "about-me" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
];

const NavbarItem = ({
  name,
  href,
  activeSection,
  setActiveSection,
}: {
  name: string;
  href: SectionID;
  activeSection: SectionID;
  setActiveSection: (section: SectionID) => void;
}) => (
  <li>
    <Link
      className={`p-4 ${activeSection === href ? "text-black" : "text-black/30"}`}
      href={`#${href}`}
      onClick={() => setActiveSection(href)}
    >
      {name}
    </Link>
  </li>
);

const Navbar = () => {
  const { activeSection, setActiveSection } = useNavbarStore();

  return (
    <nav className="mt-16 hidden xl:block">
      <ul className="-mx-4 space-y-6 text-xs font-bold uppercase tracking-widest">
        {NavbarItems.map((item, i) => (
          <NavbarItem
            key={i}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            href={item.href}
            name={item.name}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
