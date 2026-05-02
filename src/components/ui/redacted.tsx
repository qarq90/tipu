export function Redacted({ characters }: Readonly<{ characters: number }>) {
    return (
        <span className="break-all">
            {Array(characters)
                .fill(null)
                .map((_, i) => (
                    <span
                        key={i}
                        className="inline-block bg-[#1a1c1e] opacity-75"
                        style={{ width: "0.6ch", height: "1em" }}
                    />
                ))}&nbsp;
        </span>
    );
}
