"use client";;
import { AgencySeal } from "@/components/cover/agency-seal";
import { ConverInfo } from "@/components/cover/conver-info";
import { PageLayout } from "@/components/layouts/page-layout";
import { Stamp } from "@/components/stamp";

export default function Client() {
    return (
        <PageLayout>
            <Stamp tilt="left">Top Secret</Stamp>

            <AgencySeal />
            <ConverInfo />

            <Stamp tilt="right">Confidential</Stamp>
        </PageLayout>
    );
}
