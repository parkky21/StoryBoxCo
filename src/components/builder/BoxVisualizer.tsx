"use client";

import { useBoxStore } from "@/store/box-store";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function BoxVisualizer() {
    const { selectedItems, removeItem, boxType, totalPrice } = useBoxStore();

    return (
        <div className="relative h-full w-full bg-[#fdfcf8] flex items-center justify-center p-12">
            {/* Background Texture or Element could go here */}

            <div className="relative w-full max-w-2xl aspect-[4/3] bg-[#EAE5D9] shadow-2xl rounded-sm p-8 flex flex-wrap content-start gap-4 mx-auto border border-[#D4C5B0]/50 transition-all duration-500">
                {/* Box Lid Effect (Visual only) */}
                <div className="absolute top-0 left-0 w-full h-full border-[12px] border-[#D4C5B0]/20 pointer-events-none rounded-sm" />

                <AnimatePresence>
                    {selectedItems.map((item, index) => (
                        <motion.div
                            key={`${item.id}-${index}`}
                            layoutId={item.id} // Simple layout animation
                            initial={{ scale: 0, opacity: 0, rotate: Math.random() * 10 - 5 }}
                            animate={{ scale: 1, opacity: 1, rotate: Math.random() * 6 - 3 }}
                            exit={{ scale: 0, opacity: 0 }}
                            drag
                            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                            className="relative w-24 h-24 shadow-none p-0 bg-transparent flex flex-col items-center justify-center cursor-grab active:cursor-grabbing group"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain drop-shadow-md mix-blend-multiply"
                                />
                            </div>
                            <div className="absolute -top-2 -right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}
                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {selectedItems.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-serif italic text-xl pointer-events-none">
                        Your box is empty...
                    </div>
                )}
            </div>

            {/* Floating Price Tag */}
            <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-sm border border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Total Value</p>
                <p className="text-2xl font-serif">₹{totalPrice}</p>
            </div>
        </div>
    );
}
