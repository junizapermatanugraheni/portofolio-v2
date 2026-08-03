"use client";

import { useState } from "react";

import { Button } from "@/component/ui/Button";
import { Modal } from "@/component/ui/Modal";


export function ResumeButton() {

    const [open, setOpen] = useState(false);


    return (
        <>

            <Button
                onClick={() => setOpen(true)}
            >
                Resume
            </Button>


            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Resume"
                size="xl"
            >

                <iframe
                    src="/doc/Juniza_Permata_Nugraheni_Resume.pdf"
                    className="
                        w-full
                        h-full
                    "
                />

            </Modal>


        </>
    );
}