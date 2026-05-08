import React from "react";
import { Redacted } from "../ui/redacted";
import { Unredacted } from "../ui/unredacted";
import Image from "next/image";
import { agentDetails } from "@/data/intel-data";

export function AgentProfile() {
    return (
        <section className="relative flex flex-col items-center my-4">
            <div className="flex flex-row w-full gap-8 max-w-5xl">
                <div className="w-[40%] flex justify-center">
                    <Image
                        src="/imgs/intel/qarq90 - Passport Pic (Edited).png?v=2"
                        alt="Intel"
                        width={400}
                        height={400}
                        className="grayscale opacity-80 w-full h-auto"
                        loading="eager"
                    />
                </div>

                <div className="w-[60%]">
                    <div className="grid grid-cols-2 gap-y-1">
                        {agentDetails.map((detail, index) => (
                            <React.Fragment key={index}>
                                <Unredacted>
                                    {String(detail.label + ":")}
                                </Unredacted>
                                <div className="uppercase tracking-wider">
                                    {!detail.isRedacted ? (
                                        <Unredacted>
                                            {String(detail.value)}
                                        </Unredacted>
                                    ) : (
                                        <Redacted
                                            characters={
                                                detail.redactionLength || 8
                                            }
                                        />
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
