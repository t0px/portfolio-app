import { create } from 'zustand';

const useBearStore = create((set) => ({
    isAnimating: false,
    isActiveLink: "#home",
}))

export default useBearStore;