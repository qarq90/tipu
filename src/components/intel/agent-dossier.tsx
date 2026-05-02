"use client";

import { Redacted } from "@/components/ui/redacted";
import { Unredacted } from "@/components/ui/unredacted";
import { dossierSections } from "@/data/intel-data";

export function AgentDossier() {
    return (
        <div className="max-w-full leading-loose whitespace-normal my-12">
            <span className="break-all align-baseline">
                {dossierSections.map((section, idx) => (
                    <span key={idx}>
                        {idx > 0 && idx % 2 !== 0 && (
                            <>
                                <br />
                                <br />
                            </>
                        )}
                        {section.text && (
                            <Unredacted>{section.text}</Unredacted>
                        )}
                        <Redacted characters={section.redactionLength} />
                        {section.suffix && (
                            <Unredacted>{section.suffix}</Unredacted>
                        )}
                    </span>
                ))}
            </span>
        </div>
    );
}
