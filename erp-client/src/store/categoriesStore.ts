import { create } from 'zustand';

interface CategoriesState {
  categories: number;
  removeAllCategories: () => void;
}

const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: 0,
  removeAllCategories: () => set({ categories: 0 }),
}));

export default useCategoriesStore;
