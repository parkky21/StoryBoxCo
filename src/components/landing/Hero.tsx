"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-background">
            <Container className="grid lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight tracking-tight text-foreground">
                        Feelings, <br />
                        <span className="italic text-muted-foreground/80">Packaged.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        We curate deeply personal story boxes that turn your favorite memories into tangible, handheld experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href="/builder">
                            <Button variant="luxury" size="lg" className="w-full sm:w-auto">
                                Create Your Story Box
                            </Button>
                        </Link>
                        <Link href="/showcase">
                            <Button variant="ghost" size="lg" className="w-full sm:w-auto font-serif italic">
                                View Showcase
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full max-w-xl mx-auto"
                >
                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                        <Image
                            src="/images/hero-box.png"
                            alt="A beautifully curated StoryBox"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                            priority
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-muted/20 rounded-full blur-3xl" />
                </motion.div>
            </Container>
        </section>
    );
}
