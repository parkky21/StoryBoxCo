"use client";

import { BoxVisualizer } from "@/components/builder/BoxVisualizer";
import { ItemSidebar } from "@/components/builder/ItemSidebar";
import { Button } from "@/components/ui/button";
import { Package, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BuilderPage() {
    const [mobileView, setMobileView] = useState<'items' | 'preview'>('items');

    return (
        <div className="flex flex-col md:flex-row h-[calc(100vh-5rem)] w-full overflow-hidden bg-background">

            {/* Mobile Tab Switcher */}
            <div className="md:hidden flex border-b border-border bg-background z-20 shrink-0">
                <button
                    onClick={() => setMobileView('items')}
                    className={cn(
                        "flex-1 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2",
                        mobileView === 'items'
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                >
                    <Plus className="w-4 h-4" />
                    Select Items
                </button>
                <button
                    onClick={() => setMobileView('preview')}
                    className={cn(
                        "flex-1 py-3 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2",
                        mobileView === 'preview'
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                >
                    <Package className="w-4 h-4" />
                    Preview Box
                </button>
            </div>

            {/* Sidebar (Items) */}
            <div className={cn(
                "w-full md:w-1/3 md:min-w-[350px] md:max-w-[450px] h-full z-10 shadow-xl bg-background transition-all duration-300",
                "hidden md:block", // Desktop: always show
                mobileView === 'items' ? "block flex-1" : "hidden" // Mobile: show only if active
            )}>
                <ItemSidebar />
            </div>

            {/* Visualizer (Preview) */}
            <div className={cn(
                "flex-1 h-full bg-secondary/20 relative transition-all duration-300",
                "hidden md:block", // Desktop: always show
                mobileView === 'preview' ? "block flex-1" : "hidden" // Mobile: show only if active
            )}>
                <BoxVisualizer />
            </div>

            {/* Mobile Floating Action Button to switch to preview when adding items */}
            {mobileView === 'items' && (
                <div className="md:hidden absolute bottom-6 right-6 z-50">
                    <Button
                        size="lg"
                        onClick={() => setMobileView('preview')}
                        className="shadow-xl rounded-full px-6"
                    >
                        View Box
                        <Package className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            )}
        </div>
    );
}
