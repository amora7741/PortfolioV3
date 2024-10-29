import Header from "@/components/Header";
import MouseHoverWrapper from "@/components/MouseHoverWrapper";

export default function Home() {
  return (
    <MouseHoverWrapper>
      <main className="mx-auto flex w-full max-w-screen-xl px-6 py-12 lg:px-24 lg:py-0">
        <Header />
      </main>
    </MouseHoverWrapper>
  );
}
