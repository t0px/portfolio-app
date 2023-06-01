import { create } from 'zustand';

const useBearStore = create((set) => ({
    isAnimating: false,
}))

export default useBearStore;