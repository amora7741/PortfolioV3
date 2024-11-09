import SocialIcons from "@/components/SocialIcons";

const Header = () => {
  return (
    <header className="sticky flex min-w-fit flex-col justify-between gap-3 xl:top-0 xl:h-screen xl:w-1/2 xl:py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Alejandro Mora&#8209;Lopez
        </h1>
        <h2 className="text-xl font-medium">Software Engineer</h2>
        <p className="max-w-xs">
          I design user-centric websites that balance aesthetics and
          functionality.
        </p>
      </div>
      <SocialIcons />
    </header>
  );
};

export default Header;
