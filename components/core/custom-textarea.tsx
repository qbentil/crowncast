import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FC } from "react";
import _ from "lodash";
import { cn } from "@/lib/utils";

interface CustomTextareaProps extends TextareaProps {
    label?: string;
    required?: boolean;
    validation?: any;
}

const CustomTextarea: FC<CustomTextareaProps> = ({ label, required, validation, ...props }) => {
    const __id = props?.id || _.toLower(props.name) || "";
    const error = _.get(validation?.errors, __id);
    const touched = _.get(validation?.touched, __id);
    const __value = _.get(validation?.values, __id)

    const hasError = Boolean(error) && touched;

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <Label className="text-xs font-normal" htmlFor={__id}>
                    {label} {required && <span className="text-red-500">*</span>}
                </Label>
            )}
            <Textarea
                required={required}
                id={__id}
                value={__value}
                {...props}
                className={cn(
                    hasError ? "border-red-500" : "",
                    (touched && required && !props.value) ? "required:border-red-500" : ""
                )}
            />
            {hasError && <p className="text-xs text-red-500">{error || `${props.name} is required`}</p>}
        </div>
    );
};

export default CustomTextarea;
