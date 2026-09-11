"use client";

import { useState } from "react";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card/Card";
import {
    ArrowRight,
    Bot,
    CheckCircle2,
    CornerDownRight,
    Cpu,
    ExternalLink,
    Filter,
    Heart,
    Search,
    Sparkles,
    Star,
    Zap,
} from "lucide-react";

interface AIQueryPreset {
    id: string;
    label: string;
    query: string;
    parsedTokens: { label: string; value: string }[];
    aiInsight: string;
    products: {
        id: string;
        name: string;
        price: string;
        originalPrice?: string;
        specs: string[];
        matchScore: number;
        reasoning: string;
        rating: number;
    }[];
}

const PRESETS: AIQueryPreset[] = [
    {
        id: "laptop",
        label: "Dev Laptop under $1,000",
        query: "I need a laptop for programming under $1,000 with 16GB+ RAM and long battery life.",
        parsedTokens: [
            { label: "Category", value: "Laptops" },
            { label: "Max Price", value: "$1,000" },
            { label: "Min Memory", value: "16GB RAM" },
            { label: "Intent", value: "Software Engineering" },
        ],
        aiInsight:
            "Filtered 420 items down to 2 top matches based on benchmark compilation tests, thermals, and display ergonomics.",
        products: [
            {
                id: "p1",
                name: "NovaBook Ultra 14 (Pro M-Silicon)",
                price: "$949.00",
                originalPrice: "$1,099.00",
                specs: ["16GB Unified RAM", "512GB NVMe Gen4", "18h Battery"],
                matchScore: 98,
                reasoning:
                    "Best compilation speed per dollar; quiet cooling during continuous Docker builds.",
                rating: 4.9,
            },
            {
                id: "p2",
                name: "ThinkCraft X13 Developer Edition",
                price: "$879.00",
                originalPrice: "$999.00",
                specs: ["16GB LPDDR5", "1TB SSD", "Matte IPS Display"],
                matchScore: 94,
                reasoning:
                    "Superior keyboard travel with native Linux / WSL kernel hardware support.",
                rating: 4.8,
            },
        ],
    },
    {
        id: "monitor",
        label: "4K USB-C Monitor",
        query: "Ergonomic 4K monitor with single-cable 90W USB-C charging for MacBook.",
        parsedTokens: [
            { label: "Category", value: "Monitors" },
            { label: "Resolution", value: "3840 x 2160 (4K)" },
            { label: "Power Delivery", value: "≥ 90W PD" },
            { label: "Panel", value: "IPS Color Calibrated" },
        ],
        aiInsight:
            "Matched single-cable docking capabilities; verified 99% sRGB color gamut for UI/UX design workflows.",
        products: [
            {
                id: "p3",
                name: "ProView 27\" UltraSharp 4K Hub",
                price: "$549.00",
                specs: ["96W Power Delivery", "Delta E < 2", "Height & Pivot Stand"],
                matchScore: 99,
                reasoning:
                    "Clean desk single-cable setup; includes Gigabit Ethernet pass-through.",
                rating: 4.9,
            },
            {
                id: "p4",
                name: "StudioDisplay Flex 32\"",
                price: "$689.00",
                originalPrice: "$750.00",
                specs: ["90W USB-C", "HDR 600", "Anti-Glare Etched Glass"],
                matchScore: 91,
                reasoning:
                    "Generous screen real estate for multiple terminal and browser split-views.",
                rating: 4.7,
            },
        ],
    },
    {
        id: "keyboard",
        label: "Silent Mechanical Keyboard",
        query: "Hot-swappable mechanical keyboard with quiet silent tactile switches for open office.",
        parsedTokens: [
            { label: "Category", value: "Keyboards" },
            { label: "Switch Type", value: "Silent Tactile" },
            { label: "Feature", value: "Hot-Swappable PCB" },
            { label: "Connectivity", value: "Tri-mode (BT / 2.4G / Wire)" },
        ],
        aiInsight:
            "Analyzed decibel test charts to guarantee under 42dB typing sound profile for team environments.",
        products: [
            {
                id: "p5",
                name: "KeebStudio SilentPro 75%",
                price: "$149.00",
                specs: ["Outemu Silent Peach Switches", "Gasket Mount", "Mac/Win Toggle"],
                matchScore: 97,
                reasoning:
                    "Pre-lubed stabilizers eliminate rattle; factory foam eliminates hollow resonance.",
                rating: 4.9,
            },
            {
                id: "p6",
                name: "Velocty Q3 Custom Aluminum",
                price: "$189.00",
                specs: ["CNC Aluminum Body", "QMK/VIA Programmable", "Double-Shot PBT"],
                matchScore: 92,
                reasoning:
                    "Endlessly programmable layers for IDE shortcuts and custom vim navigation.",
                rating: 4.8,
            },
        ],
    },
];

export function AIProductExperience() {
    const [selectedPresetId, setSelectedPresetId] = useState("laptop");
    const [addedCartId, setAddedCartId] = useState<string | null>(null);

    const activePreset =
        PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];

    const handleAddToCart = (id: string) => {
        setAddedCartId(id);
        setTimeout(() => setAddedCartId(null), 1800);
    };

    return (
        <Section id="ai-experience" className="py-20 sm:py-28 border-t border-border/60">
            {/* Header Block */}
            <div className="flex flex-col items-start max-w-2xl mb-12">
                <Badge variant="glass" size="sm" className="mb-4">
                    <Sparkles size={12} className="text-accent mr-1" />
                    AI + Product Experience
                </Badge>
                <Heading level="h2" className="text-foreground tracking-tight">
                    Ask your data. Understand the why.
                </Heading>
                <Text variant="md" className="mt-4 text-foreground-secondary leading-relaxed">
                    AI shouldn&apos;t just be an isolated chat sidebar. I design intelligent frontend pipelines that convert vague user intentions into structured query filters, transparent decision reasoning, and friction-free product actions.
                </Text>
            </div>

            {/* Interactive Experience Container */}
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-card">
                {/* Step 1: Preset Selector */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary">
                            Step 1 · Select or Simulate User Intent
                        </span>
                        <span className="text-[11px] font-mono text-primary flex items-center gap-1">
                            <Zap size={12} /> Interactive Flow
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {PRESETS.map((preset) => (
                            <button
                                key={preset.id}
                                type="button"
                                onClick={() => setSelectedPresetId(preset.id)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                                    selectedPresetId === preset.id
                                        ? "bg-primary text-white border-primary shadow-xs font-semibold"
                                        : "bg-surface-subtle border-border text-foreground-secondary hover:border-primary/40 hover:text-foreground"
                                }`}
                            >
                                {preset.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Flow Visualization: Pipeline from Query -> Parsing -> Results */}
                <div className="mt-8 space-y-6">
                    {/* User Prompt Bubble */}
                    <div className="rounded-2xl border border-border bg-surface-subtle/70 p-4 sm:p-5 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-foreground-secondary font-medium">
                            <span className="h-6 w-6 rounded-full bg-border flex items-center justify-center text-[10px] font-bold text-foreground">
                                U
                            </span>
                            <span>Natural Language Prompt:</span>
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-foreground pl-8 italic">
                            &ldquo;{activePreset.query}&rdquo;
                        </p>
                    </div>

                    {/* Step 2: Extraction & Reasoning Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pl-2 sm:pl-4 border-l-2 border-primary/30 py-1">
                        <div className="md:col-span-4 space-y-1">
                            <span className="text-[11px] font-mono uppercase text-accent font-semibold flex items-center gap-1">
                                <Cpu size={12} /> Structured Entity Extraction
                            </span>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {activePreset.parsedTokens.map((token) => (
                                    <span
                                        key={token.label}
                                        className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-border text-foreground"
                                    >
                                        <span className="text-foreground-subtle">
                                            {token.label}:
                                        </span>
                                        <span className="font-semibold text-primary">
                                            {token.value}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-8 rounded-xl bg-accent-light/60 border border-accent/20 p-3 text-xs text-foreground leading-relaxed flex items-start gap-2.5">
                            <Sparkles size={16} className="text-accent shrink-0 mt-0.5" />
                            <div>
                                <span className="font-semibold text-accent block text-[11px] uppercase tracking-wide">
                                    AI Decision Model &amp; Synthesis
                                </span>
                                <span>{activePreset.aiInsight}</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Resolved Product Cards */}
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-xs text-foreground-secondary">
                            <span className="font-semibold uppercase tracking-wider">
                                Step 3 · Direct Product Recommendations with Context
                            </span>
                            <span className="font-mono text-[11px] text-foreground-subtle">
                                Ranked by weighted relevance score
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activePreset.products.map((item) => (
                                <Card
                                    key={item.id}
                                    className="p-5 bg-white border border-border hover:border-primary/40 hover:shadow-card-hover transition-all flex flex-col justify-between"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-700">
                                                        <CheckCircle2 size={11} /> {item.matchScore}% Match
                                                    </span>
                                                    <span className="flex items-center text-xs font-semibold text-amber-600 gap-0.5">
                                                        <Star size={11} className="fill-amber-500 text-amber-500" />
                                                        {item.rating}
                                                    </span>
                                                </div>
                                                <h4 className="font-bold text-sm text-foreground mt-1.5">
                                                    {item.name}
                                                </h4>
                                            </div>

                                            <div className="text-right">
                                                <div className="text-sm font-bold font-mono text-foreground">
                                                    {item.price}
                                                </div>
                                                {item.originalPrice && (
                                                    <div className="text-[10px] text-foreground-subtle line-through">
                                                        {item.originalPrice}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Specs */}
                                        <div className="flex flex-wrap gap-1">
                                            {item.specs.map((spec) => (
                                                <span
                                                    key={spec}
                                                    className="text-[10px] px-2 py-0.5 rounded bg-surface-subtle text-foreground-secondary border border-border-subtle"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Contextual AI Reason */}
                                        <div className="rounded-lg bg-surface-subtle p-2.5 text-xs text-foreground-secondary border border-border/70">
                                            <span className="font-semibold text-foreground block text-[11px] mb-0.5">
                                                Why this was recommended:
                                            </span>
                                            <span className="text-[11px] leading-snug">
                                                {item.reasoning}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="pt-4 mt-4 border-t border-border/70 flex items-center justify-between">
                                        <span className="text-[11px] font-mono text-foreground-subtle">
                                            In Stock · Fast Dispatch
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => handleAddToCart(item.id)}
                                            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                                                addedCartId === item.id
                                                    ? "bg-emerald-600 text-white"
                                                    : "bg-primary text-white hover:bg-primary-hover active:scale-[0.98]"
                                            }`}
                                        >
                                            {addedCartId === item.id
                                                ? "Added to Cart ✓"
                                                : "Select & Configure"}
                                        </button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
