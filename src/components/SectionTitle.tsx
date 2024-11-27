const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="sticky top-0 z-50 -mx-6 -my-4 w-screen bg-background/50 p-4 px-6 font-bold uppercase backdrop-blur-xl md:-mx-12 md:px-12 xl:hidden">
    {children}
  </h1>
);

export default SectionTitle;
