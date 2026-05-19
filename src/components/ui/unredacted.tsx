"use client";

import { useEffect, useState } from "react";

interface UnredactedProps {
    children: React.ReactNode;
    className?: string;
}

export function Unredacted({ children, className }: UnredactedProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const text = String(children || "");

    const mergedClassName = ["opacity-85 uppercase", className]
        .filter(Boolean)
        .join(" ");

    return (
        <span className={mergedClassName}>
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
                {text}
            </span>
        </span>
    );
}
