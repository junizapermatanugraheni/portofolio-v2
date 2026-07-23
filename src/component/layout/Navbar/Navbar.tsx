import { Section } from "../Section";
import { navItems } from "./Navbar.data";

export function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-6 rounded-full bg-white/70 backdrop-blur-lg px-12 py-4 ring-1 ring-white/80 inset-shadow-md shadow-[0_6px_12px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.05)]">
                <ul className="flex items-center gap-6 list-none p-0 m-0">
                    {navItems.map((item) => (

                        <li key={item.href} >
                            <a href={item.href} className="font-semibold text-xs rounded-full px-4 py-2.5  tracking-wide transition-all hover:text-white hover:bg-primary hover:inset-shadow-sm">
                                {item.label}
                            </a>
                        </li>

                    ))}
                </ul>
            </div>
        </nav>
    )
}