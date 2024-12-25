
type Props = {
    label: string;
    value: string;
    valueColor?: string;
};

export default function ViewInput({ label, value, valueColor }: Props) {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-sm">
                {label}
            </p>
            {
                value &&
                <div className="text-base px-2 py-2 dbug bg-neutral-100" style={{
                    color: valueColor && valueColor
                }}>
                    {value}
                </div>
            }
        </div>
    );
}