import { Unredacted } from "./ui/unredacted";

export function Quotes({
    quotes,
}: {
    quotes: ReadonlyArray<{ quote: string; by: string }>;
}) {
    return (
        <div className="flex flex-col gap-4 text-center border border-foreground py-4 px-2">
            {quotes.map((quote, index) => (
                <Unredacted key={index}>
                    {`${quote.quote} - ${quote.by}`}
                </Unredacted>
            ))}
        </div>
    );
}
