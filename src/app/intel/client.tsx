import { AgentDossier } from "@/components/intel/agent-dossier";
import { AgentProfile } from "@/components/intel/agent-profile";
import { IntelQuotes } from "@/components/intel/intel-quotes";
import { PageLayout } from "@/components/layouts/page-layout";
import { Stamp } from "@/components/stamp";

export default function Client() {
    return (
        <PageLayout>
            <Stamp tilt="right">Intel</Stamp>

            <AgentProfile />
            <AgentDossier />
            <IntelQuotes />
           
            <Stamp tilt="left">Confidential</Stamp>
        </PageLayout>
    );
}
