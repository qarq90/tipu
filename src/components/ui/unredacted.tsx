"use client";

import { useEffect, useState } from "react";

export function Unredacted({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const text = String(children || "");

    return (
        <span className="opacity-85 uppercase">
            <span
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #1a1c1e 50%, transparent 50%)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: mounted ? "0% 0%" : "100% 0%",
                    transition: "background-position 2s ease-in-out",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {text}&nbsp;
            </span>
        </span>
    );
}