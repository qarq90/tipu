import { intelQuotes } from "@/data/intel-data";
import { Unredacted } from "../ui/unredacted";

export function IntelQuotes(){
    return(
        <div className="flex flex-col gap-2 text-center">
            {intelQuotes.map((q,i)=>(
                <Unredacted key={i}>{q.quote}-{q.by}</Unredacted>
            ))}
        </div>
    )
}