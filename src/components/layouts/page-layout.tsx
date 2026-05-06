"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "../navbar";
import { Unredacted } from "../ui/unredacted";

export function PageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    const pageName = (() => {
        switch (pathname) {
            case "/":
                return "cover";
            case "/intel":
                return "intel";
            case "/archives":
                return "archives";
            case "/network":
                return "network";
            default:
                return "classified";
        }
    })();

    return (
        <main className="h-full max-w-5xl flex flex-row courier-new">
            <main className="h-full max-w-4xl w-4xl flex flex-row gap-4 courier-new">
                <div className="flex flex-row gap-1.5">
                    <div className="w-1 bg-foreground opacity-75" />
                    <div className="w-1 bg-foreground opacity-50" />
                </div>
                <div className="flex-1 flex flex-col gap-4 py-4 px-2">
                    {children}
                    <div className="uppercase flex flex-row justify-between border-t-4 pt-4 border-foreground/70">
                        <Unredacted>File: 17D01O05B-24R51L66N</Unredacted>
                        <Unredacted>{`Page: ${pageName}`}</Unredacted>
                    </div>
                </div>
                <div className="flex flex-row gap-1.5">
                    <div className="w-1 bg-foreground opacity-65" />
                    <div className="w-1 bg-foreground opacity-75" />
                </div>
            </main>
            <Navbar />
        </main>
    );
}
