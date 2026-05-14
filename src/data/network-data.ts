import { Quote } from "@/types/quote";
import { FaGithub, FaLinkedin, FaLock } from "react-icons/fa";
import { FaDiscord, FaReddit } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export const networkChannels = [
    {
        name: "GitHub",
        desc: "Operative development activity tracked.",
        url: "https://github.com/qarq90",
        icon: FaGithub,
        isRedacted: false,
    },
    {
        name: "Mail",
        desc: "Send encrypted messages to operative.",
        url: "mailto:wetworksspectre@gmail.com",
        icon: MdMail,
        isRedacted: false,
    },
    {
        name: "[REDACTED]",
        desc: "[CLASSIFIED - LEVEL 5 CLEARANCE]",
        url: "#",
        icon: FaLock,
        isRedacted: true,
    },
    {
        name: "LinkedIn",
        desc: "Professional operative network profile.",
        url: "https://www.linkedin.com/in/abdurrahman-qureshi-a10349282/",
        icon: FaLinkedin,
        isRedacted: false,
    },
    {
        name: "[EXPUNGED]",
        desc: "[INFORMATION REMOVED BY ORDER]",
        url: "#",
        icon: FaLock,
        isRedacted: true,
    },
    {
        name: "[UNKNOWN]",
        desc: "[SOURCE ANONYMIZED]",
        url: "#",
        icon: FaLock,
        isRedacted: true,
    },
    {
        name: "Reddit",
        desc: "Field reports and intelligence posts.",
        url: "https://www.reddit.com/u/WetWorksSpectre05/s/v6eEyNVr9I",
        icon: FaReddit,
        isRedacted: false,
    },
    {
        name: "Discord",
        desc: "Contactfor secure classified channel access.",
        url: "https://discord.com/users/1454681391479390258",
        icon: FaDiscord,
        isRedacted: false,
    },
];

export const networkQuotes: Quote[] = [
    {
        quote: "It's Not About Money. It's About Sending A Message.",
        by: "Joker",
    },
    {
        quote: "Do not wait for leaders; do it alone, person to person.",
        by: "Mother Teresa", 
    },
    {
        quote: "I've been waiting for you. Have you come to end my suffering?",
        by: "Donna Beneviento",
    },
];
