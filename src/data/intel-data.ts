import { AgentDetail, DossierSection } from "@/types/intel";
import { Quote } from "@/types/quote";

export const agentDetails: AgentDetail[] = [
    {
        label: "Operative",
        value: "Abdurrahman Qureshi",
        isRedacted: false,
    },
    {
        label: "Codename",
        value: "qarq90",
        isRedacted: false,
    },
    {
        label: "DOB",
        value: 10,
        isRedacted: true,
        redactionLength: 10,
    },
    {
        label: "Nationality",
        value: "Indian",
        isRedacted: false,
    },
    {
        label: "Height",
        value: `5'10"`,
        isRedacted: false,
    },
    {
        label: "Weight",
        value: "90 KG",
        isRedacted: false,
    },
    {
        label: "Hair Color",
        value: "Black",
        isRedacted: false,
    },
    {
        label: "Eye Color",
        value: "Brown",
        isRedacted: false,
    },
    {
        label: "Languages Known",
        value: "English, Hindi, Urdu",
        isRedacted: false,
    },
    {
        label: "Field Experience",
        value: "",
        isRedacted: true,
        redactionLength: 12,
    },
    {
        label: "Grade",
        value: 5,
        isRedacted: true,
        redactionLength: 5,
    },
    {
        label: "Parents",
        value: 32,
        isRedacted: true,
        redactionLength: 32,
    },
    {
        label: "Last Known Location",
        value: "Mumbai",
        isRedacted: false,
    },
];

export const dossierSections: DossierSection[] = [
    {
        textA: 'The agent operating under the alias "qarq90" is a',
        redactionLengthA: 192,
        textB: " and a highly specialized digital operative with core expertise in web design",
        redactionLengthB: 250,
        textC: " user interface development, and the orchestration of critical front-end architecture.",
    },
    {
        textA: "Origins of this operative",
        redactionLengthA: 300,
        textB: " Safa High School",
        redactionLengthB: 170,
        textC: " Diploma from M.H.H.S.S.Polytechnic",
        redactionLengthC: 128,
        textD: " M.H. Saboo Siddik College of Engineering - Information Technology.",
    },
    {
        textA: "Known for exceptional design instinct,",
        redactionLengthA: 217,
        textB: " precise execution, and the ability to craft purpose-driven digital frameworks,",
        redactionLengthB: 165,
        textC: " Every build is scoped and deployed like a precision operation but engineered for fluidity, scalability,",
        redactionLengthC: 171,
        textD: " and seamless functionality.",
    },
    {
        textA: "Proficiency includes deep experience in",
        redactionLengthA: 256,
        textB: " UX architecture, adaptive front-end engineering, and dynamic component systems.",
    },
    {
        textA: "Reports reveal objective of this agent are",
        redactionLengthA: 151,
        textB: " creating advanced web technologies through craft and with precise digital designs, sleek and refined.",
    },
];

export const intelQuotes: Quote[] = [
    {
        quote: "If I were two-faced, would I be wearing this one?",
        by: "Abraham Lincoln",
    },
    {
        quote: "I wish I had acquired wisdom at less of a price.",
        by: "Hosea Matthews",
    },
    {
        quote: "You are not the only one cursed with knowledge.",
        by: "Thanos",
    },
];
