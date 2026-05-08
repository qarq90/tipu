"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className="flex flex-col uppercase tracking-widest items-center gap-2 mt-24">
            <Link
                href={"/"}
                className={`opacity-75 w-32 border-t-2 p-2 text-xl border-foreground border-b-2 border-r-2 ${isActive("/") ? "bg-redaction opacity-95 text-background" : ""}`}
            >
                Cover
            </Link>
            <Link
                href={"/intel"}
                className={`opacity-75 w-32 border-t-2 p-2 text-xl border-foreground border-b-2 border-r-2 ${isActive("/intel") ? "bg-redaction opacity-95 text-background" : ""}`}
            >
                Intel
            </Link>
            <Link
                href={"/archives"}
                className={`opacity-70 w-32 border-t-2 p-2 text-xl border-foreground border-b-2 border-r-2 ${isActive("/archives") ? "bg-redaction opacity-95 text-background" : ""}`}
            >
                Archives
            </Link>
            <Link
                href={"/network"}
                className={`opacity-80 w-32 border-t-2 p-2 text-xl border-foreground border-b-2 border-r-2 ${isActive("/network") ? "bg-redaction opacity-95 text-background" : ""}`}
            >
                Network
            </Link>
        </nav>
    );
}
