import { Unredacted } from "../ui/unredacted";

export function NetworkHeader() {
    return (
        <>
           <div className="flex flex-col gap-4 text-center my-4">
                <Unredacted>
                    Region: UNKNOWN - Last ping: South Asia Node
                </Unredacted>
                <Unredacted>AUTH CODE: 3F29-XQ91-ZL7A-F81C</Unredacted>
            </div>

            <div className="flex flex-col gap-y-4 border border-foreground p-4 px-2 my-4">
                <Unredacted className="text-2xl tracking-widest">
                    Communication Protocol:
                </Unredacted>
                <Unredacted>
                    All messages are monitored. Unauthorized access will be
                    reported.
                </Unredacted>
                <Unredacted>UNAUTHORIZED DISCLOSURE IS PROHIBITED</Unredacted>
            </div>

            <div className="flex flex-col text-center my-4">
                <Unredacted>
                   Final secure channels for operative contact — monitored and time-sensitive.
                </Unredacted>
            </div>
        </>
    );
}
