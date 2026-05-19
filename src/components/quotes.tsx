import { Seperator } from "./ui/seperator";
import { Unredacted } from "./ui/unredacted";

export function Quotes({
    quotes,
}: {
    quotes: ReadonlyArray<{ quote: string; by: string }>;
}) {
    return (
        <>
            <Seperator />
            <div className="flex flex-col gap-4 text-center px-2">
                {quotes.map((quote, index) => (
                    <Unredacted key={index}>
                        {`${quote.quote} - ${quote.by}`}
                    </Unredacted>
                ))}
            </div>
        </>
    );
}
