import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface StoreLocalType {
  language: "EN" | "JP" | null;
  switchLanguage: () => void;
}

export const useStoreLocal = create<StoreLocalType, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      language: "EN",

      switchLanguage: () =>
        set((state) => ({
          language: state.language === "EN" ? "JP" : "EN",
        })),
    }),
    {
      name: "local",
    },
  ),
);
