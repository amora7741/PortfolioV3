import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import MouseHoverWrapper from "@/components/MouseHoverWrapper";

export default function Home() {
  return (
    <MouseHoverWrapper>
      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-20 px-6 py-12 md:px-12 md:py-20 lg:flex-row lg:px-16 lg:py-0">
        <Header />
        <main className="space-y-16 sm:space-y-24 md:space-y-32 lg:w-1/2 lg:py-24">
          <AboutMe />
          <Experience />
          <Projects />
        </main>
      </div>
    </MouseHoverWrapper>
  );
}
