"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "./Navbar.data";
import { ResumeButton } from "./ResumeButton";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300">
            <nav
                className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl border transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 ${
                    scrolled
                        ? "border-border bg-surface/90 shadow-card backdrop-blur-md"
                        : "border-border/60 bg-surface/75 shadow-xs backdrop-blur-md"
                }`}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5 group cursor-pointer"
                >
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-primary text-white font-semibold text-xs sm:text-sm tracking-tight transition-transform duration-200 group-hover:scale-105">
                        JN
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm sm:text-base tracking-tight text-foreground leading-none">
                            Juniza P.
                        </span>
                        <span className="text-[11px] font-medium text-foreground-subtle hidden sm:inline leading-tight mt-0.5">
                            Frontend Dev
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((menu) => (
                        <Link
                            key={menu.href}
                            href={menu.href}
                            className="rounded-lg px-3.5 py-1.5 text-xs font-medium text-foreground-secondary hover:text-foreground hover:bg-surface-subtle transition-colors"
                        >
                            {menu.label}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden sm:flex items-center gap-2">
                    <ResumeButton />
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-accent-hover active:scale-[0.98] transition-all"
                    >
                        Let&apos;s Talk
                        <ArrowUpRight size={13} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 sm:hidden">
                    <ResumeButton />
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Navigation Menu"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground hover:bg-surface-subtle transition-colors"
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-border bg-surface/95 p-4 shadow-card-hover backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col gap-1">
                        {navItems.map((menu) => (
                            <Link
                                key={menu.href}
                                href={menu.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground-secondary hover:bg-surface-subtle hover:text-foreground transition-colors"
                            >
                                {menu.label}
                            </Link>
                        ))}
                        <div className="pt-2 mt-1 border-t border-border">
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
                            >
                                Let&apos;s Talk
                                <ArrowUpRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}