import { create } from "zustand";

export interface StoreGlobalType {
  isSidebarOpenned: boolean;
  switchSidebar: () => void;
}

export const useStoreGlobal = create<StoreGlobalType>((set) => ({
  isSidebarOpenned: false,

  switchSidebar: () =>
    set((state) => ({
      isSidebarOpenned: !state.isSidebarOpenned,
    })),
}));
