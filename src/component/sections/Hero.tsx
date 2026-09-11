"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "../layout/Section/Section";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
    ArrowDown,
    ArrowUpRight,
    ExternalLink,
    Grid,
    ImageIcon,
    Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export function Hero() {
    const [viewMode, setViewMode] = useState<"catalog" | "detail">("catalog");
    const [catalogImgError, setCatalogImgError] = useState(false);
    const [detailImgError, setDetailImgError] = useState(false);

    const views = {
        catalog: {
            title: "Products Catalog & AI Assistant",
            url: "mini-store-ashy.vercel.app/products",
            image: "/images/projects/mini-store-hero.png",
            error: catalogImgError,
            setError: setCatalogImgError,
            description: "Katalog 30+ produk dengan AI assistant, filter kategori, dan pencarian instan.",
        },
        detail: {
            title: "Product Detail View",
            url: "mini-store-ashy.vercel.app/products/1",
            image: "/images/projects/mini-store-detail.png",
            error: detailImgError,
            setError: setDetailImgError,
            description: "Halaman detail spesifikasi produk, galeri gambar, rating, dan aksi add to cart.",
        },
    };

    const current = views[viewMode];

    return (
        <Section
            id="hero"
            className="pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 overflow-hidden"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left Column: Headline & Value Proposition */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    {/* Status & Eyebrow */}
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground-secondary shadow-xs mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-semibold text-foreground tracking-tight">
                            Juniza Permata Nugraheni
                        </span>
                        <span className="text-border">|</span>
                        <span>Frontend Developer</span>
                    </div>

                    {/* Main Headline */}
                    <Heading
                        level="h1"
                        className="text-foreground tracking-tight font-extrabold max-w-2xl"
                    >
                        Building modern interfaces that{" "}
                        <span className="gradient-text font-extrabold">
                            feel as good
                        </span>{" "}
                        as they work.
                    </Heading>

                    {/* Supporting Body */}
                    <Text
                        variant="lg"
                        className="mt-6 text-foreground-secondary max-w-xl leading-relaxed text-sm sm:text-base"
                    >
                        Frontend developer specializing in scalable component
                        architecture, thoughtful design systems, and resilient
                        enterprise web applications built with{" "}
                        <span className="font-semibold text-foreground">
                            React, Next.js, and TypeScript
                        </span>
                        .
                    </Text>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
                        <Link href="#projects" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary-hover shadow-sm"
                            >
                                <span>View Projects</span>
                                <ArrowDown size={15} />
                            </Button>
                        </Link>
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto gap-2"
                            >
                                <span>Contact Me</span>
                                <ArrowUpRight size={15} />
                            </Button>
                        </Link>
                    </div>

                    {/* Social links & metadata pill */}
                    <div className="mt-10 pt-6 border-t border-border/80 flex flex-wrap items-center gap-6 text-xs text-foreground-subtle">
                        <div className="flex items-center gap-3">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground-secondary hover:text-foreground hover:border-primary/40 hover:bg-surface-subtle transition-colors"
                            >
                                <FaGithub size={16} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground-secondary hover:text-foreground hover:border-primary/40 hover:bg-surface-subtle transition-colors"
                            >
                                <FaLinkedin size={16} />
                            </a>
                        </div>
                        <div className="h-4 w-px bg-border hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>Yogyakarta, Indonesia (Remote / Hybrid)</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Real Project Showcase Frame with View Switcher */}
                <div className="lg:col-span-5 w-full">
                    <div className="group relative rounded-2xl border border-border bg-surface shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-primary/30">
                        {/* Browser Window Chrome */}
                        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border bg-surface-subtle">
                            {/* Window Dots */}
                            <div className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#E57373]/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#F5C26B]/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#69B98A]/80" />
                            </div>

                            {/* View Switcher Tabs: Catalog vs Detail */}
                            <div className="flex items-center rounded-lg border border-border bg-surface p-0.5 text-xs">
                                <button
                                    type="button"
                                    onClick={() => setViewMode("catalog")}
                                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                                        viewMode === "catalog"
                                            ? "bg-primary text-white font-semibold shadow-xs"
                                            : "text-foreground-secondary hover:text-foreground"
                                    }`}
                                >
                                    <Grid size={11} />
                                    <span>Halaman Produk</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setViewMode("detail")}
                                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                                        viewMode === "detail"
                                            ? "bg-primary text-white font-semibold shadow-xs"
                                            : "text-foreground-secondary hover:text-foreground"
                                    }`}
                                >
                                    <Sparkles size={11} />
                                    <span>Detail Produk</span>
                                </button>
                            </div>

                            {/* Live Site Link */}
                            <a
                                href={`https://${current.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open live store"
                                className="p-1 rounded-md text-foreground-subtle hover:text-foreground hover:bg-surface transition-colors"
                            >
                                <ExternalLink size={13} />
                            </a>
                        </div>

                        {/* URL Bar Strip */}
                        <div className="px-3.5 py-1.5 bg-[#FAF8F5] border-b border-border/70 flex items-center justify-between text-[11px] font-mono text-foreground-secondary">
                            <span className="truncate">
                                <span className="text-emerald-700 font-semibold">https://</span>
                                <span>{current.url}</span>
                            </span>
                            <span className="text-[10px] bg-surface-subtle px-1.5 py-0.5 rounded border border-border text-foreground-subtle shrink-0">
                                Live
                            </span>
                        </div>

                        {/* Screenshot Area */}
                        <div className="relative w-full aspect-16/11 bg-[#F5F3EF] overflow-hidden flex items-center justify-center">
                            {!current.error ? (
                                <Image
                                    src={current.image}
                                    alt={current.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                    onError={() => current.setError(true)}
                                    priority
                                />
                            ) : (
                                <div className="p-6 text-center flex flex-col items-center justify-center space-y-2.5">
                                    <div className="h-11 w-11 rounded-2xl bg-white border border-border flex items-center justify-center text-primary shadow-xs">
                                        <ImageIcon size={20} />
                                    </div>
                                    <div className="space-y-1 max-w-xs">
                                        <p className="text-xs font-semibold text-foreground">
                                            {current.title}
                                        </p>
                                        <p className="text-[11px] text-foreground-secondary leading-snug">
                                            Simpan screenshot di:
                                        </p>
                                        <code className="inline-block font-mono text-[10px] bg-white px-2 py-0.5 rounded-md border border-border text-primary font-semibold">
                                            {current.image}
                                        </code>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Status Bar */}
                        <div className="px-3.5 py-2 border-t border-border bg-surface-subtle flex items-center justify-between text-[11px] text-foreground-secondary">
                            <span className="truncate pr-2">
                                {current.description}
                            </span>
                            <Badge variant="mint" size="xs" className="shrink-0">
                                Next.js 16
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}