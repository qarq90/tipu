export interface AgentDetail {
    label: string;
    value: string | number;
    isRedacted: boolean;
    redactionLength?: number;
}

export interface DossierSection {
    textA: string;
    redactionLengthA: number;
    textB: string;
    redactionLengthB?: number;
    textC?: string;
    redactionLengthC?: number;
    textD?: string;
    redactionLengthD?: number;
}
