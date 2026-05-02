import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex flex-col uppercase tracking-widest items-center gap-2 mt-24">
            <Link href={"/"} className="opacity-75 w-32 border-t-2 p-2 text-xl border-foreground border-b-2 border-r-2">Cover</Link>
            <Link href={"/intel"} className="opacity-75 w-32 border-t-2 p-2 text-xl border-foreground border-b-2 border-r-2">Intel</Link>
            <Link href={"/archives"} className="opacity-70 w-32 border-t-2 p-2 text-xl border-foreground border-b-2 border-r-2">Archives</Link>
            <Link href={"/network"} className="opacity-80 w-32 border-t-2 p-2 text-xl border-foreground border-b-2 border-r-2">Network</Link>
        </nav>
    );
}
