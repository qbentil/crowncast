import { FC } from "react";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import _ from "lodash";
import { cn } from "@/lib/utils";

interface CustomSelectProps {
    label?: string;
    required?: boolean;
    validation?: any;
    name?: string;
    id: string;
    placeholder?: string;
    options: { value: string; label: string; }[];
    onValueChange?: (value: string) => void;
    selectParentClass?: string
    value: any
}

const CustomSelect: FC<CustomSelectProps> = ({
    label,
    required,
    validation,
    name,
    id,
    placeholder = "Select an option",
    options,
    onValueChange,
    selectParentClass,
    value
}) => {
    const __id = id || _.toLower(name) || "";
    const error = _.get(validation?.errors, __id);
    const touched = _.get(validation?.touched, __id);

    const hasError = Boolean(error) && touched;

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <Label className="text-xs font-normal" htmlFor={__id}>
                    {label} {required && <span className="text-red-500">*</span>}
                </Label>
            )}
            <Select value={value} onValueChange={onValueChange} >
                <SelectTrigger
                    id={__id}
                    className={cn(
                        "w-full",
                        hasError ? "border-red-500" : "",
                        required && !_.get(validation?.values, __id) ? "required:border-red-500" : "",
                        selectParentClass,
                    )}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map(({ value, label }, idx) => (
                        <SelectItem key={idx} value={value}>
                            {label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {hasError && <p className="text-xs text-red-500">{error || `${name} is required`}</p>}
        </div>
    );
};

export default CustomSelect;
