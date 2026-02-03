"use client";

import { Button } from "@/components/ui/button";
import { Item, useBoxStore } from "@/store/box-store";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";

// Mock Data
const ITEMS: Item[] = [
    { id: '1', name: 'Handwritten Letter', price: 200, category: 'story', description: 'Your words, on thick cotton paper.', image: '/images/letter.png' },
    { id: '2', name: 'Vintage Polaroid', price: 500, category: 'story', description: 'A moment frozen in time.', image: '/images/polaroid.png' },
    { id: '3', name: 'Dried Lavender', price: 250, category: 'keepsake', description: 'Calming scent from Provence.', image: '/images/lavender.png' },
    { id: '4', name: 'Gold Locket', price: 2500, category: 'keepsake', description: 'To keep them close.', image: '/images/locket.png' },
    { id: '5', name: 'Artisan Chocolate', price: 800, category: 'treat', description: 'Dark chocolate with sea salt.', image: '/images/chocolate.png' },
    { id: '6', name: 'Scented Candle', price: 300, category: 'treat', description: 'Warm vanilla and sandalwood.', image: '/images/candle.png' },
];

export function ItemSidebar() {
    const addItem = useBoxStore((state) => state.addItem);

    return (
        <div className="h-full border-r border-border bg-background p-6 overflow-y-auto">
            <div className="mb-8">
                <h2 className="text-2xl font-serif mb-2">Curate Your Box</h2>
                <p className="text-sm text-muted-foreground">Select items to tell your story.</p>
            </div>

            <div className="space-y-6">
                {['story', 'keepsake', 'treat'].map((category) => (
                    <div key={category}>
                        <h3 className="text-xs font-serif uppercase tracking-widest text-muted-foreground mb-3">{category}</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {ITEMS.filter(i => i.category === category).map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/50 transition-colors cursor-pointer"
                                    onClick={() => addItem(item)}
                                >
                                    <div className="relative w-12 h-12 bg-secondary/30 rounded-sm flex-shrink-0 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-medium text-sm">{item.name}</h4>
                                            <span className="text-xs font-mono">₹{item.price}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                                    </div>
                                    <Button size="icon" variant="ghost" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
