import { Text } from "@/component/ui/Text";
import { Section } from "../Section";
import { navItems } from "./Navbar.data";
import Link from "next/link";

export function Navbar() {
    return (
        <aside className="sticky top-0 flex h-screen w-80 flex-col justify-between py-24">
            <nav className="space-y-5">

                {navItems.map((menu) => (
                    <Link
                        key={menu.href}
                        href={menu.href}
                        className="group flex items-center gap-4"
                    >
                        <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />

                        <Text
                            weight="semibold"
                            className="uppercase tracking-widest transition-colors group-hover:text-accent"
                        >
                            {menu.label}
                        </Text>

                    </Link>
                ))}

            </nav>
        </aside>
        // <nav className="fixed top-6 left-1/2 -translate-x-1/2">
        //     <div className="flex items-center gap-6 rounded-full bg-white/70 backdrop-blur-lg px-12 py-4 ring-1 ring-white/80 inset-shadow-md shadow-[0_6px_12px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.05)]">
        //         <ul className="flex items-center gap-6 list-none p-0 m-0">
        //             {navItems.map((item) => (

        //                 <li key={item.href} >
        //                     <a href={item.href} className="font-semibold text-xs rounded-full px-4 py-2.5  tracking-wide transition-all hover:text-white hover:bg-primary hover:inset-shadow-sm">
        //                         {item.label}
        //                     </a>
        //                 </li>

        //             ))}
        //         </ul>
        //     </div>
        // </nav>
    )
}