import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface StoreGlobalType {
  language: "EN" | "JP" | null;
  switchLanguage: () => void;
}

export const useStoreGlobal = create<StoreGlobalType, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      language: null,

      switchLanguage: () =>
        set((state) => ({
          language: state.language === "EN" ? "JP" : "EN",
        })),
    }),
    {
      name: "global",
    },
  ),
);
