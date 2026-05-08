import { networkChannels } from "@/data/network-data";
import { Unredacted } from "../ui/unredacted";

export function Channels() {
    return (
        <section className="grid gap-4 grid-cols-2 my-4">
            {networkChannels.map((c, i) =>
                c.isRedacted ? (
                    <div
                        key={i}
                        className="flex items-center gap-4 p-4 border border-dashed cursor-not-allowed"
                    >
                        <c.icon size={64} className="text-redaction/95" />
                        <div className="flex-col flex">
                            <div className="bg-redaction/95 text-background text-center tracking-widest h-6 w-32 flex items-center justify-center">
                                [REDACTED]
                            </div>
                            <div className="bg-redaction/95 text-background text-center tracking-widest h-4 w-48 flex items-center justify-center mt-1">
                                [ACCESS DENIED]
                            </div>
                        </div>
                    </div>
                ) : (
                    <a
                        key={i}
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 border hover:border-foreground transition-all duration-300"
                    >
                        <c.icon size={64} />
                        <div className="flex-col flex">
                            <Unredacted className="text-xl">
                                {c.name}
                            </Unredacted>
                            <Unredacted>{c.desc}</Unredacted>
                        </div>
                    </a>
                ),
            )}
        </section>
    );
}
