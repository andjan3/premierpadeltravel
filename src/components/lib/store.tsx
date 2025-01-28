import { create } from "zustand";

interface IsOpenMenu {
  openDropdown: boolean;
  setOpenDropdown: (value: boolean) => void;
  isProgramDropdownOpen: boolean;
  setProgramDropdownOpen: (value: boolean) => void;
  filter: string;
  setFilter: (value: string) => void;
  openCalender: boolean;
  setOpenCalender: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  openDropdown: false,
  setOpenDropdown: (value) => set({ openDropdown: value }),
  isProgramDropdownOpen: false,
  setProgramDropdownOpen: (value) => set({ isProgramDropdownOpen: value }),
  filter: "Alla resor",
  setFilter: (value) => set({ filter: value }),
  openCalender: false,
  setOpenCalender: (value) => set({ openCalender: value }),
}));

export default useStore;
