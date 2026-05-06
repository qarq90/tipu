"use client";
import { PageLayout } from "@/components/layouts/page-layout";
import { Channels } from "@/components/network/channels";
import { NetworkHeader } from "@/components/network/header";
import { Quotes } from "@/components/quotes";
import { Stamp } from "@/components/stamp";
import { networkQuotes } from "@/data/network-data";

export default function Client() {
    return (
        <PageLayout>
            <Stamp tilt="right">Network</Stamp>

            <NetworkHeader />
            <Channels />
            <Quotes quotes={networkQuotes} />
        </PageLayout>
    );
}
