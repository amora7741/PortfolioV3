import { create } from "zustand";

interface NavbarState {
  activeSection: SectionID;
  setActiveSection: (section: SectionID) => void;
}

const useNavbarStore = create<NavbarState>()((set) => ({
  activeSection: "about-me",
  setActiveSection: (section) => set({ activeSection: section }),
}));

export default useNavbarStore;
