import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
    title: "Abdurrahman Qureshi | Intel ",
    description:
        "Learn more about Abdurrahman Qureshi, a software engineer specializing in web development and front-end architecture. Discover my journey, skills, and philosophy.",
};

export default function Page() {
    return <Client />;
}
