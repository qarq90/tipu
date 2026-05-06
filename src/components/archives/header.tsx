import { Redacted } from "../ui/redacted";
import { Unredacted } from "../ui/unredacted";

export function ArchivesHeader() {
    return (
        <>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 my-4">
                <Unredacted>CLASSIFIED ARCHIVES DIVISION</Unredacted>
                <div className="text-right">
                    <Unredacted>CLASSIFICATION: TOP SECRET</Unredacted>
                </div>

                <div>
                    <Redacted characters={16} />
                </div>
                <div className="text-right">
                    <Redacted characters={30} />
                </div>

                <Unredacted>SECURITY CLEARANCE REQUIRED</Unredacted>
                <div className="text-right">
                    <Unredacted>ACCESS LEVEL: RESTRICTED</Unredacted>
                </div>

                <div>
                    <Redacted characters={24} />
                </div>
                <div className="text-right">
                    <Unredacted>{`Date: ${new Date().toLocaleDateString()}`}</Unredacted>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col gap-2 mb-4">
                <Unredacted className="underline">
                    CREATIVE ARCHIVES DIVISION - CREATIVE INTERFACE AGENCY
                </Unredacted>
                <Unredacted>
                    THIS DOCUMENT CONTAINS SENSITIVE INFORMATION UNAUTHORIZED
                </Unredacted>
                <Unredacted>DISCLOSURE IS PROHIBITED</Unredacted>
            </div>

            <div className="flex flex-col gap-4 border border-foreground p-4 px-2 mb-4">
                <Unredacted className="text-2xl">MISSION BRIEFING:</Unredacted>
                <Unredacted>
                    The following documents contain classified information
                    regarding development operations conducted by Agent
                    "qarq90". Each operation represents a success mission in the
                    field of web development.
                </Unredacted>
                <Unredacted>
                    Clearance levels vary by operation sensitivity.
                </Unredacted>
            </div>
        </>
    );
}
