import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import MouseHoverWrapper from "@/components/MouseHoverWrapper";

export default function Home() {
  return (
    <MouseHoverWrapper>
      <main className="mx-auto flex size-full max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:p-24">
        <Header />
        <MainContent />
      </main>
    </MouseHoverWrapper>
  );
}
