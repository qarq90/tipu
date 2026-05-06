export function Stamp({
    children,
    tilt = "left",
}: Readonly<{
    children: React.ReactNode;
    tilt?: "left" | "right";
}>) {
    const tiltClass = tilt === "left" ? "-rotate-4" : "rotate-4";

    return (
        <>
            <section
                className={`bebas-neue inline-block uppercase text-7xl opacity-75 tracking-widest rounded-sm text-center my-8 border-3 text-red-500 border-red-500 p-4 shadow-md ${tiltClass}`}
            >
                {children}
            </section>
        </>
    );
}
