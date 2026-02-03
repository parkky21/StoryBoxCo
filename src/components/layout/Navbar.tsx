"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-border/40 shadow-sm" : "bg-transparent border-transparent"}`}
        >
            <Container className="flex h-20 items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="font-serif text-2xl font-medium tracking-tight relative z-50">
                        StoryBoxCo.
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="/builder" className="hover:text-foreground transition-colors">
                            Create a Box
                        </Link>
                        <Link href="/about" className="hover:text-foreground transition-colors">
                            Our Story
                        </Link>
                        <Link href="/showcase" className="hover:text-foreground transition-colors">
                            Showcase
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium hover:text-foreground transition-colors">
                            Sign In
                        </Link>
                        <Button variant="luxury" size="sm">
                            Get Started
                        </Button>
                    </div>

                    <Button variant="ghost" size="icon" className="relative z-50">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Cart</span>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2 -mr-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col pt-28 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-8 text-2xl font-serif font-medium text-foreground">
                            <Link
                                href="/builder"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="border-b border-border/50 pb-4"
                            >
                                Create a Box
                            </Link>
                            <Link
                                href="/showcase"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="border-b border-border/50 pb-4"
                            >
                                Showcase
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="border-b border-border/50 pb-4"
                            >
                                Our Story
                            </Link>
                        </nav>

                        <div className="mt-auto mb-12 flex flex-col gap-4">
                            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="outline" size="lg" className="w-full">
                                    Sign In
                                </Button>
                            </Link>
                            <Link href="/builder" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="luxury" size="lg" className="w-full">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
