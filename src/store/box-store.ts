import { create } from 'zustand';

export type BoxSize = 'basic' | 'premium' | 'luxury';

export interface Item {
    id: string;
    name: string;
    price: number;
    category: 'story' | 'keepsake' | 'treat';
    image: string;
    description: string;
}

interface BoxState {
    boxType: BoxSize;
    selectedItems: Item[];
    totalPrice: number;
    setBoxType: (type: BoxSize) => void;
    addItem: (item: Item) => void;
    removeItem: (itemId: string) => void;
    resetBox: () => void;
}

const BOX_PRICES = {
    basic: 1500,
    premium: 3500,
    luxury: 5500
};

export const useBoxStore = create<BoxState>((set) => ({
    boxType: 'premium',
    selectedItems: [],
    totalPrice: 3500, // Initial price for premium

    setBoxType: (type) => set((state) => ({
        boxType: type,
        totalPrice: BOX_PRICES[type] + state.selectedItems.reduce((acc, item) => acc + item.price, 0)
    })),

    addItem: (item) => set((state) => {
        const newItems = [...state.selectedItems, item];
        return {
            selectedItems: newItems,
            totalPrice: BOX_PRICES[state.boxType] + newItems.reduce((acc, i) => acc + i.price, 0)
        };
    }),

    removeItem: (itemId) => set((state) => {
        const newItems = state.selectedItems.filter(i => i.id !== itemId);
        return {
            selectedItems: newItems,
            totalPrice: BOX_PRICES[state.boxType] + newItems.reduce((acc, i) => acc + i.price, 0)
        };
    }),

    resetBox: () => set({ boxType: 'premium', selectedItems: [], totalPrice: 45 }),
}));
