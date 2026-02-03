"use client";

import { BoxVisualizer } from "@/components/builder/BoxVisualizer";
import { ItemSidebar } from "@/components/builder/ItemSidebar";

export default function BuilderPage() {
    return (
        <div className="flex h-[calc(100vh-5rem)] w-full overflow-hidden">
            <div className="w-1/3 min-w-[350px] max-w-[450px] h-full z-10 shadow-xl">
                <ItemSidebar />
            </div>
            <div className="flex-1 h-full bg-secondary/20 relative">
                <BoxVisualizer />
            </div>
        </div>
    );
}
