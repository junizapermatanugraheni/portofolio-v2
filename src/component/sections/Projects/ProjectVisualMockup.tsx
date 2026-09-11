"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, ImageIcon } from "lucide-react";

interface ProjectVisualMockupProps {
    type?: "insightfull" | "erp" | "journal" | "dashboard";
    title: string;
    image?: string;
    liveUrl?: string;
}

export function ProjectVisualMockup({
    title,
    image = "/images/projects/mini-store.png",
    liveUrl = "https://mini-store-ashy.vercel.app/",
}: ProjectVisualMockupProps) {
    const [imageError, setImageError] = useState(false);

    // Extract clean display domain
    const displayUrl = liveUrl ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : "project-preview";

    return (
        <div className="group relative w-full rounded-2xl border border-border bg-surface shadow-card overflow-hidden flex flex-col transition-all duration-300 hover:shadow-card-hover hover:border-primary/30">
            {/* Browser Window Chrome Header */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-surface-subtle border-b border-border text-xs select-none">
                {/* Window control dots */}
                <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E57373]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F5C26B]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#69B98A]/80" />
                </div>

                {/* URL Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-border/80 text-[11px] text-foreground-secondary font-mono max-w-60 sm:max-w-80 truncate shadow-xs">
                    <span className="text-emerald-700">https://</span>
                    <span className="text-foreground truncate">{displayUrl}</span>
                </div>

                {/* External link button */}
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${title} in new tab`}
                        className="p-1 rounded-md text-foreground-subtle hover:text-foreground hover:bg-surface transition-colors"
                    >
                        <ExternalLink size={13} />
                    </a>
                )}
            </div>

            {/* Screenshot Display Area */}
            <div className="relative w-full aspect-16/10 bg-[#F6F5F2] overflow-hidden flex items-center justify-center">
                {image && !imageError ? (
                    <Image
                        src={image}
                        alt={`${title} screenshot preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        onError={() => setImageError(true)}
                        priority
                    />
                ) : (
                    /* Placeholder when image screenshot is not yet placed in public */
                    <div className="p-6 text-center flex flex-col items-center justify-center space-y-3">
                        <div className="h-12 w-12 rounded-2xl bg-white border border-border flex items-center justify-center text-foreground-secondary shadow-xs">
                            <ImageIcon size={22} className="text-primary" />
                        </div>
                        <div className="space-y-1 max-w-xs">
                            <p className="text-xs font-semibold text-foreground">
                                Screenshot Preview
                            </p>
                            <p className="text-[11px] text-foreground-secondary leading-snug">
                                Letakkan file gambar di:
                            </p>
                            <code className="inline-block font-mono text-[10px] bg-white px-2 py-1 rounded-md border border-border text-primary font-semibold">
                                {image || "/images/projects/mini-store.png"}
                            </code>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


