"use client";

import { cn } from "@/lib/cn";
import { ModalProps } from "./Modal.types";
import { createPortal } from "react-dom";

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
    if (!isOpen) return null;

    const sizeClass = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
    };

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10 backdrop-blur-sm p-5" onClick={onClose}>
            <div className={cn(`relative w-full h-[90vh] rounded-3xl bg-surface overflow-hidden`, sizeClass[size])} onClick={(e) => e.stopPropagation()}>
                {
                    title && (
                        <div className="flex items-center justify-between p-5 border-b border-border">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    )
                }
                <div className="h-full">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}