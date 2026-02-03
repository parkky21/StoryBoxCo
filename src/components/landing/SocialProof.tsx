"use client";

import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TESTIMONIALS_DATA = [
    {
        id: 1,
        quote: "I’ve never seen my partner cry over a gift before. It wasn’t just a box; it was our entire story curated effectively.",
        name: "Ananya D.",
        title: "Thoughtful Partner",
        image: "https://ui-avatars.com/api/?name=Ananya+D&background=D4C5B0&color=fff&size=200",
        company: "Personal Gifting"
    },
    {
        id: 2,
        quote: "Finally, a gift that feels like I made it myself, but with the polish of a luxury brand. The attention to detail is unmatched.",
        name: "Rohan K.",
        title: "Creative Director",
        image: "https://ui-avatars.com/api/?name=Rohan+K&background=2C2621&color=fff&size=200",
        company: "Studio Design"
    },
    {
        id: 3,
        quote: "The quality of the paper, the scent, the layout—everything screamed intentionality. A truly premium experience.",
        name: "Priya M.",
        title: "Event Planner",
        image: "https://ui-avatars.com/api/?name=Priya+M&background=D4C5B0&color=fff&size=200",
        company: "Elite Events"
    },
    {
        id: 4,
        quote: "Every detail was perfect. The handwritten note added such a personal touch that you just can't find elsewhere.",
        name: "Vikram S.",
        title: "Tech Founder",
        image: "https://ui-avatars.com/api/?name=Vikram+S&background=2C2621&color=fff&size=200",
        company: "Innovate Labs"
    }
];

export function SocialProof() {
    // Initialize with unique IDs to allow keyed animation
    const [testimonials, setTestimonials] = useState(TESTIMONIALS_DATA.map(t => ({ ...t, uniqueId: t.id.toString() })));
    const [autoplay, setAutoplay] = useState(true);

    const handleNext = () => {
        setTestimonials((prev) => {
            const newArr = [...prev];
            const first = newArr.shift();
            if (first) {
                // Recycle the first item to the end with a new unique ID
                // to trigger the 'enter' animation
                newArr.push({ ...first, uniqueId: `${first.id}-${Date.now()}` });
            }
            return newArr;
        });
    };

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(handleNext, 4000); // 4 seconds per slide
        return () => clearInterval(interval);
    }, [autoplay]);

    return (
        <section className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
            <Container>

                {/* Header */}
                <div className="text-center mb-12 md:mb-20 space-y-4 px-4">
                    <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-accent uppercase font-sans">
                        Testimonials
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground max-w-2xl mx-auto leading-tight">
                        Trusted by Gift Givers, <br /> Loved by Recipients
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto font-sans">
                        See why thousands of people trust StoryBox to deliver their most meaningful moments.
                    </p>
                </div>

                {/* Stacked Card Section */}
                <div
                    className="relative w-full max-w-md mx-auto h-[400px] md:h-[450px] flex items-center justify-center px-4"
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                >
                    <AnimatePresence mode="popLayout">
                        {testimonials.map((t, index) => {
                            // Only render the front 3 cards
                            if (index > 2) return null;

                            const isFront = index === 0;

                            return (
                                <motion.div
                                    key={t.uniqueId} // Key is vital for recycling animation
                                    layoutId={`card-${t.uniqueId}`}
                                    initial={{ opacity: 0, scale: 0.9, y: 35, zIndex: 0 }}
                                    animate={{
                                        opacity: 1 - index * 0.2,
                                        scale: 1 - index * 0.05,
                                        y: index * 15,
                                        rotate: isFront ? 0 : index % 2 === 0 ? 2 : -2,
                                        zIndex: 3 - index
                                    }}
                                    exit={{
                                        x: 300, // Swipe right
                                        opacity: 0,
                                        scale: 1,
                                        rotate: 15,
                                        zIndex: 10
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 180,
                                        damping: 24
                                    }}
                                    className="absolute top-0 w-full px-4 md:px-0"
                                    style={{
                                        transformOrigin: "top center"
                                    }}
                                    onClick={() => handleNext()}
                                >
                                    {/* Physical Badge Render */}
                                    <div className="relative bg-background rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-border p-6 md:p-8 md:pt-12 overflow-hidden h-[320px] md:h-[340px]">

                                        {/* Card Content */}
                                        <div className="flex flex-col h-full justify-between relative z-10">

                                            {/* Top: Logo & Quote */}
                                            <div>
                                                <div className="flex justify-between items-start mb-6 mt-1">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background font-serif font-bold text-xs">
                                                            SB
                                                        </div>
                                                        <span className="font-bold text-xs md:text-sm tracking-wider text-muted-foreground/80 uppercase font-sans">{t.company}</span>
                                                    </div>
                                                    <Quote className="text-accent w-5 h-5 md:w-6 md:h-6" />
                                                </div>

                                                <p className="text-lg md:text-xl font-serif text-foreground leading-relaxed line-clamp-4">
                                                    "{t.quote}"
                                                </p>
                                            </div>

                                            {/* Bottom: Profile */}
                                            <div className="flex items-center gap-4 pt-6 border-t border-border">
                                                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-background shadow-sm">
                                                    <Image
                                                        src={t.image}
                                                        alt={t.name}
                                                        fill
                                                        className="object-cover"
                                                        unoptimized
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-foreground font-serif leading-tight text-sm md:text-base">{t.name}</h4>
                                                    <p className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wide font-sans">{t.title}</p>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Decorative Gradient Blob */}
                                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

            </Container>
        </section>
    );
}
