import Image from "next/image";

export function AgencySeal() {
    return (
        <section className="relative flex flex-col items-center my-12 opacity-75">
            <div className="relative w-[280px] h-[280px]">
                <svg className="absolute inset-0 w-full h-full">
                    <defs>
                        <path
                            id="circlePath"
                            d="M 140,140 
                       m -115,0 
                       a 115,115 0 1,1 230,0 
                       a 115,115 0 1,1 -230,0"
                        />
                    </defs>

                    <text
                        className="text-[10px] font-mono font-bold fill-[#1a1c1e] uppercase tracking-wider"
                        fontFamily="monospace"
                        fontSize="10"
                        fontWeight="bold"
                        letterSpacing="3"
                    >
                        <textPath
                            href="#circlePath"
                            startOffset="0%"
                            className="text-xl tracking-wider"
                        >
                            &nbsp;&nbsp;&nbsp;CREATIVE INTERFACE AGENCY
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ACCESS LEVEL: ██████
                        </textPath>
                    </text>
                </svg>

                <Image
                    src="/imgs/logo_stroke.png"
                    alt="CIA Logo Stroke"
                    width={200}
                    height={200}
                    className="absolute inset-0 m-auto z-10"
                    loading="eager"
                />
                <Image
                    src="/imgs/pfp_without_bg.png?v=2"
                    alt="CIA Logo"
                    width={200}
                    height={200}
                    className="absolute inset-0 m-auto z-0"
                    loading="eager"
                />
            </div>
        </section>
    );
}
