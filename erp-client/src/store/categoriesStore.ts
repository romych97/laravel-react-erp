import { create } from 'zustand';

interface CategoriesState {
  categories: number;
  increasePopulation: () => void;
  removeAllCategories: () => void;
}

const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: 0,
  increasePopulation: () => set((state) => ({ categories: state.categories + 1 })),
  removeAllCategories: () => set({ categories: 0 }),
}));

export default useCategoriesStore;
