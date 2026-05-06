"use client";

import { Redacted } from "@/components/ui/redacted";
import { Unredacted } from "@/components/ui/unredacted";
import { dossierSections } from "@/data/intel-data";

export function AgentDossier() {
    return (
        <div className="max-w-full leading-loose whitespace-normal">
            {dossierSections.map((section, idx) => (
                <div key={idx} className="break-all align-baseline mb-4">
                    {section.textA && <Unredacted>{section.textA}</Unredacted>}
                    {section.redactionLengthA && (
                        <Redacted characters={section.redactionLengthA} />
                    )}
                    {section.textB && <Unredacted>{section.textB}</Unredacted>}
                    {section.redactionLengthB && (
                        <Redacted characters={section.redactionLengthB} />
                    )}
                    {section.textC && <Unredacted>{section.textC}</Unredacted>}
                    {section.redactionLengthC && (
                        <Redacted characters={section.redactionLengthC} />
                    )}
                    {section.textD && <Unredacted>{section.textD}</Unredacted>}
                </div>
            ))}
        </div>
    );
}
