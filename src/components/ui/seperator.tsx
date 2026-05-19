import { Unredacted } from "./unredacted";

interface SeperatorProps {
    className?: string;
}

export function Seperator({ className }: SeperatorProps) {
    return (
        <Unredacted className={className}>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        </Unredacted>
    );
}
