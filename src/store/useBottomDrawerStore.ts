import { create } from 'zustand';
import { ReactNode } from 'react';

type BottomBarState = {
  isOpen: boolean;
  content: ReactNode | null;
  open: (content: ReactNode) => void;
  close: () => void;
};

const useBottomBarStore = create<BottomBarState>((set) => ({
  isOpen: false,
  content: null,
  open: (content) => set({ isOpen: true, content }),
  close: () => set({ isOpen: false, content: null }),
}));

export default useBottomBarStore;
