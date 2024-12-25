import { Input, InputProps } from "@/components/ui/input";

import { FC } from "react";
import { Label } from "@/components/ui/label";
import _ from "lodash";
import { cn } from "@/lib/utils";

interface CustomInputProps extends InputProps {
    label?: string;
    required?: boolean;
    validation?: any;
}
const CustomInput: FC<CustomInputProps> = ({ label, required, validation, ...props }) => {
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
            <Input
                required={required}
                id={__id}
                value={__value || ""}
                {...props}
                className={cn(
                    "focus:outline-none focus:ring-2",
                    hasError
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray focus:ring-blue-500"
                )}
            />
            {hasError && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default CustomInput;
