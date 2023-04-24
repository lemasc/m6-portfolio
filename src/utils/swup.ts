import type Swup from "swup";
import { create } from "zustand";
type SwupStore = {
  swup: Swup | null;
};
export const swupStore = create<SwupStore>(() => ({ swup: null }));
