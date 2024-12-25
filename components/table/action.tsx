import _ from "lodash"
import { cn } from "@/lib/utils";

const colorsMap = {
    black: "text-text",
    warning: "text-yellow-500",
    danger: "text-red-500",
    success: "text-green-500",
    info: "text-blue-500",
    primary: "text-primary"
}


type Props = {
    label: string
    color?: keyof typeof colorsMap
    className?: string
}

export default function ActionButton({ label, color, className }: Props) {
    const __color = colorsMap[color || "primary"]
    return (
        <button className={cn(
            "border border-neutral-300 px-2 py-1 ",
            __color,
            className
        )}>
            {_.startCase(label)}
        </button>
    )
}