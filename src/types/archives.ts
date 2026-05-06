export interface ArchivedProject {
    name: string;
    desc: string;
    img: string;
    link: string;
    isRedacted: boolean;
    redactionLength: number; 
    redactedFields?: ('name' | 'desc' | 'img')[]; 
}