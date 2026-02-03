"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { PenLine, Box, HeartHandshake } from "lucide-react";

const steps = [
    {
        id: 1,
        icon: Box,
        title: "Choose Your Canvas",
        description: "Select a premium box style that matches the mood of your story.",
    },
    {
        id: 2,
        icon: PenLine,
        title: "Write & Curate",
        description: "Drag in photos, letters, and meaningful keepsakes. Narrate every item.",
    },
    {
        id: 3,
        icon: HeartHandshake,
        title: "Give a Feeling",
        description: "We pack it with white-glove care and deliver an unforgettable moment.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-secondary/30">
            <Container>
                <div className="text-center mb-20 space-y-4">
                    <span className="text-xs font-serif uppercase tracking-widest text-muted-foreground">Process</span>
                    <h2 className="text-3xl md:text-5xl font-serif">How it Works</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-border z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center space-y-6"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
                                <step.icon className="w-8 h-8 text-foreground/80 stroke-1" />
                            </div>
                            <div className="space-y-3 max-w-xs">
                                <h3 className="text-xl font-serif">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
