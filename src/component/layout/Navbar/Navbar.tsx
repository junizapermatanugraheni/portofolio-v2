import { navItems } from "./Navbar.data";
import Link from "next/link";
import { Button } from "@/component/ui/Button";
import { Heart } from "lucide-react";
import { ResumeButton } from "./ResumeButton";

export function Navbar() {
    return (
        <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
            <nav className="flex items-center justify-between w-[90vw] max-w-6xl rounded-full border border-white/60 bg-white/60 backdrop-blur-xl shadow-card px-6 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white shadow-card">
                        JN
                    </div>

                    <span className="font-heading text-xl font-bold">
                        Portfolio
                    </span>
                </Link>

                {/* Menu */}

                <div className="flex items-center gap-2">
                    {navItems.map((menu) => (
                        <Link key={menu.href} href={menu.href} className="rounded-full px-5 py-2.5 text-sm font-semibold text-foreground-secondary transition-all duration-300 hover:bg-white/80 hover:text-primary hover:shadow-card hover:-translate-y-0.5">
                            {menu.label}
                        </Link>
                    ))}
                </div>

                {/* CTA */}

                <ResumeButton />
            </nav>
        </header>
    )
}