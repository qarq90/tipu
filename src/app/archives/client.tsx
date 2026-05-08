"use client";
import { ArchivesGrid } from "@/components/archives/archives-grid";
import { ArchivesHeader } from "@/components/archives/header";
import { PageLayout } from "@/components/layouts/page-layout";
import { Quotes } from "@/components/quotes";
import { Stamp } from "@/components/stamp";
import { archivesQuotes } from "@/data/archives-data";

export default function Client() {
    return (
        <PageLayout>
            <Stamp tilt="left">Archives</Stamp>

            <ArchivesHeader />
            <ArchivesGrid />
            <Quotes quotes={archivesQuotes} />
        </PageLayout>
    );
}
