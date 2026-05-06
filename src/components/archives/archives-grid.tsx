import { archivedProjects } from "@/data/archives-data";
import { Archive } from "./archive";

export function ArchivesGrid() {
    return (
        <div className="grid grid-cols-2 gap-8 mb-4">
            {archivedProjects.map((project, index) => (
                <Archive key={index} project={project} />
            ))}
        </div>
    );
}
