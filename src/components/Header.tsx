import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="sticky flex min-w-fit flex-col justify-between gap-3 xl:top-0 xl:h-screen xl:w-1/2 xl:py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Alejandro Mora&#8209;Lopez
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
