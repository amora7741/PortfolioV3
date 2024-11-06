import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mt-16 hidden xl:block">
      <ul className="-mx-4 space-y-6 text-xs font-bold uppercase tracking-widest">
        <li>
          <Link className="p-4" href="#about-me">
            About Me
          </Link>
        </li>
        <li>
          <Link className="p-4" href="#experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="p-4" href="#projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
