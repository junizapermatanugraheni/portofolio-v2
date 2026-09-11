"use client";

import { useState } from "react";
import { Button } from "@/component/ui/Button";
import { Modal } from "@/component/ui/Modal";
import { FileText, Download } from "lucide-react";

export function ResumeButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(true)}
                className="text-xs h-9 px-3.5"
            >
                <FileText size={14} className="text-foreground-secondary" />
                Resume
            </Button>

            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Curriculum Vitae"
                size="xl"
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between px-5 py-2.5 bg-surface-subtle border-b border-border text-xs text-foreground-secondary">
                        <span>Juniza Permata Nugraheni · Frontend Developer</span>
                        <a
                            href="/doc/Juniza_Permata_Nugraheni_Resume.pdf"
                            download
                            className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                        >
                            <Download size={13} />
                            Download PDF
                        </a>
                    </div>
                    <div className="flex-1 min-h-[70vh]">
                        <iframe
                            src="/doc/Juniza_Permata_Nugraheni_Resume.pdf"
                            title="Resume PDF"
                            className="w-full h-full border-none"
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
}