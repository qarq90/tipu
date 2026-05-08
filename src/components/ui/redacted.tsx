export function Redacted({ characters }: Readonly<{ characters: number }>) {
    return (
        <span className="break-all align-baseline">
            {Array(characters)
                .fill(null)
                .map((_, i) => (
                    <span
                        key={i}
                        className="inline-block bg-redaction opacity-95 align-middle"
                        style={{ width: "0.6ch", height: "1.2em" }}
                    />
                ))}
        </span>
    );
}
