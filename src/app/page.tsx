import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import MouseCursor from "@/components/MouseCursor";

export default function Home() {
  return (
    <>
      <MouseCursor />
      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-20 px-6 py-12 md:px-12 md:py-20 xl:flex-row xl:px-16 xl:py-0">
        <Header />
        <main className="relative h-full space-y-16 *:scroll-m-24 sm:space-y-24 xl:w-1/2 xl:space-y-32 xl:py-24">
          <AboutMe />
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  );
}
