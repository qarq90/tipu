import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Abdurrahman Qureshi",
    description:
        "Personal website of Abdurrahman Qureshi, a software engineer specializing in web development and open-source contributions. Explore projects, blog posts, and contact information.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-full flex flex-col items-center">
                {children}
            </body>
        </html>
    );
}
