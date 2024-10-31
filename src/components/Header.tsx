import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="sticky flex min-w-fit flex-col justify-between gap-3 lg:top-0 lg:h-screen lg:w-1/2 lg:py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Alejandro Mora-Lopez
        </h1>
        <h2 className="text-xl font-medium">Full-Stack Software Engineer</h2>
        <p className="max-w-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <nav className="mt-16 hidden lg:block">
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
