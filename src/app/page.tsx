import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
    title: "Abdurrahman Qureshi ",
    description:
        "Explore the portfolio of Abdurrahman Qureshi featuring web development projects, front-end engineering work, and open-source contributions. View case studies and technical implementations.",
};

export default function Page() {
    return <Client />;
}
