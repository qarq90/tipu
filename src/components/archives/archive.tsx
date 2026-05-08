"use client";

import Image from "next/image";
import Link from "next/link";
import { Unredacted } from "@/components/ui/unredacted";
import { ArchivedProject } from "@/types/archives";

export function Archive({ project }: { project: ArchivedProject }) {
    return (
        <div className="flex flex-col gap-2">
            {project.isRedacted ? (
                <div className="bg-foreground/95 text-background text-center flex justify-center items-center tracking-widest h-48 w-full mb-1">
                    [IMAGE EXPUNGED]
                </div>
            ) : (
                <div className="relative w-full h-48 mb-1">
                    <Image
                        src={project.img}
                        alt="archive-ss"
                        fill
                        className="object-cover grayscale"
                        loading="eager"
                    />
                </div>
            )}

            {project.isRedacted ? (
                <>
                    <div className="bg-foreground/95 text-background text-center flex justify-center items-center tracking-widest h-6 mt-1">
                        [CLASSIFIED TITLE]
                    </div>
                    <div className="bg-foreground/95 text-background text-center flex justify-center items-center tracking-widest h-32 mt-1">
                        [CLASSIFIED CONTENT]
                    </div>
                </>
            ) : (
                <>
                    <Unredacted className="text-2xl">{project.name}</Unredacted>
                    <Unredacted>{project.desc}</Unredacted>
                </>
            )}

            {project.isRedacted ? (
                <div className="bg-foreground/95 text-background text-center flex justify-center items-center tracking-widest h-6 w-2/3 mt-1">
                    [ACCESS RESTRICTED]
                </div>
            ) : (
                <Link
                    href={project.link}
                    target="_blank"
                    className="self-start"
                >
                    <Unredacted className="uppercase">
                        Open Archive &gt;
                    </Unredacted>
                </Link>
            )}
        </div>
    );
}
