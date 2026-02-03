"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md"
        >
            <Container className="flex h-20 items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="font-serif text-2xl font-medium tracking-tight">
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
                    <Link href="/login" className="text-sm font-medium hover:text-foreground transition-colors hidden sm:block">
                        Sign In
                    </Link>
                    <Button variant="luxury" size="sm" className="hidden sm:flex">
                        Get Started
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Cart</span>
                    </Button>
                </div>
            </Container>
        </motion.header>
    );
}
