"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "I’ve never seen my partner cry over a gift before. It wasn’t just a box; it was our entire story.",
        author: "Ananya D.",
        location: "Mumbai"
    },
    {
        quote: "Finally, a gift that feels like I made it myself, but with the polish of a luxury brand.",
        author: "Rohan K.",
        location: "Pune"
    },
    {
        quote: "The quality of the paper, the scent, the layout—everything screamed intentionality.",
        author: "Priya M.",
        location: "Nashik"
    }
];

export function SocialProof() {
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="space-y-6 text-center"
                        >
                            <p className="text-xl md:text-2xl font-serif italic text-foreground/80 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="text-sm font-sans tracking-wide text-muted-foreground uppercase">
                                {t.author} — {t.location}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
