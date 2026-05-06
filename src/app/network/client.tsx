"use client"

import { PageLayout } from "@/components/layouts/page-layout";
import { Quotes } from "@/components/quotes";
import { Stamp } from "@/components/stamp";
import { networkQuotes } from "@/data/network-data";

export default function Client() {
    return (
        <PageLayout>
            <Stamp tilt="right">Network</Stamp>

            <Quotes quotes={networkQuotes} />

        </PageLayout>
    );
}
