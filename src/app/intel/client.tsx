"use client";

import { AgentDossier } from "@/components/intel/agent-dossier";
import { AgentProfile } from "@/components/intel/agent-profile";
import { PageLayout } from "@/components/layouts/page-layout";
import { Quotes } from "@/components/quotes";
import { Stamp } from "@/components/stamp";
import { intelQuotes } from "@/data/intel-data";

export default function Client() {
    return (
        <PageLayout>
            <Stamp tilt="right">Intel</Stamp>

            <AgentProfile />
            <AgentDossier />
            <Quotes quotes={intelQuotes} />
        </PageLayout>
    );
}
