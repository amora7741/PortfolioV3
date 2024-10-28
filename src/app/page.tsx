import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <main className="mx-auto flex w-full max-w-screen-xl px-6 py-12 lg:px-24 lg:py-0">
        <Header />
      </main>
    </div>
  );
}
