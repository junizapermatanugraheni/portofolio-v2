import { profile } from "@/data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-border bg-surface py-8">
            <div className="container">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-primary text-white flex items-center justify-center text-[11px] font-bold">
                            JN
                        </div>
                        <span className="text-xs font-medium text-foreground-secondary">
                            © {year} Juniza Permata Nugraheni · Built with Next.js &amp; TypeScript
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="h-8 w-8 flex items-center justify-center rounded-lg border border-border text-foreground-secondary hover:text-foreground hover:border-primary/40 transition-colors"
                        >
                            <FaGithub size={14} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="h-8 w-8 flex items-center justify-center rounded-lg border border-border text-foreground-secondary hover:text-foreground hover:border-primary/40 transition-colors"
                        >
                            <FaLinkedin size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}