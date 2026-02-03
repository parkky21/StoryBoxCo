import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function ShowcasePage() {
    return (
        <Container className="py-24">
            <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">Curated Collections</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                    <div key={i} className="aspect-square relative bg-secondary/30 rounded-sm overflow-hidden group">
                        <Image
                            src="/images/hero-box.png"
                            alt={`Collection ${i}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <span className="text-white font-serif text-2xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                                View Collection
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
