import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="flex flex-col justify-between lg:w-1/2">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
          Alejandro Mora-Lopez
        </h1>
        <h2 className="text-xl font-medium">Full-Stack Software Engineer</h2>
        <p className="max-w-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <nav className="mt-16">
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </nav>
      </div>
      <SocialIcons />
    </header>
  );
};

export default Header;
