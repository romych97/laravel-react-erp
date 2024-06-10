import { create } from 'zustand';

interface ProductsState {
  currentModal: string; 
  switchModal: (status:string) => void;  
}
  
const useProductsStore = create<ProductsState>((set) => ({
  currentModal: "", 
  switchModal: (value) => set({ currentModal: value }),
}));

export default useProductsStore;
