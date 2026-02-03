import { Container } from "@/components/ui/container";

export default function AboutPage() {
    return (
        <Container className="py-24">
            <div className="max-w-3xl mx-auto space-y-8 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-serif">Our Story</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    StoryBoxCo wasn't born in a boardroom. It started on a living room floor, surrounded by old letters, polaroids, and a desire to make feeling seen tangible.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe that the best gifts aren't just things—they are memories, packaged. In a world of digital noise, we deal in the currency of touch, scent, and sentiment.
                </p>
                <div className="pt-8 py-4 border-t border-border">
                    <p className="font-serif italic text-xl">"To give is to remember."</p>
                </div>
            </div>
        </Container>
    );
}
