import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { FC } from "react";
import { InputProps } from "../ui/input";
import { Label } from "@/components/ui/label";
import _ from "lodash";
import { cn } from "@/lib/utils";

interface CustomRadioGroupProps extends InputProps {
    label?: string;
    required?: boolean;
    validation?: any;
    options: { value: string; label: string }[];
    layout?: "inline" | "vertical";
}

const CustomRadioGroup: FC<CustomRadioGroupProps> = ({
    label,
    required,
    validation,
    options,
    layout = "vertical",
    ...props
}) => {
    const __id = props?.id || _.toLower(props.name) || "";
    const __value = _.get(validation?.values, __id);
    const error = _.get(validation?.errors, __id);
    const touched = _.get(validation?.touched, __id);

    // Only show error if the field has been touched and there’s a current error
    const hasError = touched && error;

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <Label className="text-xs font-normal text-text" htmlFor={__id}>
                    {label} {required && <span className="text-red-500">*</span>}
                </Label>
            )}
            <RadioGroup
                value={__value || ""}
                onValueChange={(val) => validation?.setFieldValue(__id, val)} // Explicitly update the value
                className={cn(
                    layout === "inline" ? "flex gap-4" : "",
                    hasError ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                )}
            >
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={cn(
                            " cursor-pointer flex items-center gap-2",
                            layout === "inline" ? "flex-row" : "flex-col"
                        )}
                    >
                        <RadioGroupItem
                            value={option.value}
                            id={`${__id}-${option.value}`}
                            className={cn(
                                "focus:ring-2",
                                hasError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray focus:ring-blue-500"
                            )}
                        />
                        <Label className="cursor-pointer" htmlFor={`${__id}-${option.value}`}>{option.label}</Label>
                    </div>
                ))}
            </RadioGroup>
            {hasError && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default CustomRadioGroup;
