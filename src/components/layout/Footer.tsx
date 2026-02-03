import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="border-t border-black/5 bg-secondary/30 py-16">
            <Container>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl font-medium">StoryBoxCo.</h3>
                        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                            Curating deeply personal gift experiences that turn memories into tangible treasures.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Shop</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/builder" className="hover:text-foreground">Build a Box</Link></li>
                            <li><Link href="/collections" className="hover:text-foreground">Collections</Link></li>
                            <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
                            <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 flex flex-col justify-between items-center gap-4 border-t border-black/5 pt-8 text-xs text-muted-foreground sm:flex-row">
                    <p>&copy; {new Date().getFullYear()} StoryBoxCo. All rights reserved.</p>
                    <p>Designed with emotion.</p>
                </div>
            </Container>
        </footer>
    );
}
