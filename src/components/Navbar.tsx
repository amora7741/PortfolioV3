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
      className={`group flex w-fit items-center gap-4 p-4 ${activeSection === href ? "text-muted-foreground" : "text-muted-foreground/30"}`}
      href={`#${href}`}
      onClick={() => setActiveSection(href)}
    >
      <span
        className={`h-0.5 w-10 group-hover:w-14 group-hover:bg-muted-foreground ${activeSection === href ? "w-14 bg-muted-foreground" : "bg-muted-foreground/30"}`}
      />
      <p className="group-hover:text-foreground">{name}</p>
    </Link>
  </li>
);

const Navbar = () => {
  const { activeSection, setActiveSection } = useNavbarStore();

  return (
    <nav className="mt-16 hidden xl:block">
      <ul className="-mx-4 text-sm font-bold uppercase tracking-wider">
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
