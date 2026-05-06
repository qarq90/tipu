import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
    title: "Abdurrahman Qureshi | Network",
    description:
        "Get in touch with Abdurrahman Qureshi for collaboration, project inquiries, or professional networking. Connect via email, GitHub, LinkedIn, or other platforms.",
};

export default function Page() {
    return <Client />;
}
