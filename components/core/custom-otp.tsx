import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { FC } from "react";
import { InputProps } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import _ from "lodash";
import { cn } from "@/lib/utils";

const regexMap = {
    digits: REGEXP_ONLY_DIGITS,
    chars: REGEXP_ONLY_CHARS,
    all: REGEXP_ONLY_DIGITS_AND_CHARS,
};

type RegexType = keyof typeof regexMap;

interface CustomOTPProps extends InputProps {
    label?: string;
    required?: boolean;
    validation?: any;
    regex?: RegexType;
    maxLength?: number;
    className?: string;
}

const CustomOTP: FC<CustomOTPProps> = ({ label, required, validation, regex, maxLength = 6, ...props }) => {
    const __id = props?.id || _.toLower(props.name) || "";
    const error = _.get(validation?.errors, __id);
    const touched = _.get(validation?.touched, __id);
    const hasError = Boolean(error) && touched;
    const pattern = regexMap[regex || "all"];
    const array = Array.from({ length: maxLength });

    const handleChange = (newValue: string) => {
        if (props.onChange) {
            // Invoke Formik's onChange with the new value
            props.onChange({
                target: {
                    id: props.id,
                    value: newValue,
                },
            } as any);
        }
    };

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <Label className="text-xs font-normal text-text" htmlFor={__id}>
                    {label} {required && <span className="text-red-500">*</span>}
                </Label>
            )}

            <InputOTP
                size={10}
                required={required}
                id={__id}
                maxLength={maxLength}
                pattern={pattern}
                className={cn(
                    "w-full mx-auto",
                    hasError ? "border-red-500" : "",
                    (touched && required && !props.value) ? "required:border-red-500" : ""
                )}
                value={_.toString(props.value) || ""}
                onChange={handleChange}  // Pass handleChange directly here
            >
                <InputOTPGroup className="mx-auto">
                    {array.map((_, idx) => (
                        <InputOTPSlot
                            className="w-16 focus:outline-primary focus:ring-2 focus:ring-primary-500"
                            key={idx}
                            index={idx}
                        />
                    ))}
                </InputOTPGroup>
            </InputOTP>

            {hasError && <p className="text-xs text-red-500">{error || `${_.startCase(props.name)} is required`}</p>}
        </div>
    );
};

export default CustomOTP;
