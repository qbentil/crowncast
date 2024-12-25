import { FC, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { DatePicker as DesktopDatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from "@mui/material/TextField";
import { classNames } from "@/utils";

interface DatePickerProps {
  id: string;
  variant?: "mobile" | "default";
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string; // Expecting a string in 'YYYY-MM-DD' format
  handleChange?: (date: Dayjs | null) => void;
  handleBlur?: () => void;
  error?: string;
  touched?: boolean;
  min?: string; // Expecting a string in 'YYYY-MM-DD' format
  max?: string; // Expecting a string in 'YYYY-MM-DD' format
  labelHidden?: boolean;
}

const DatePicker: FC<DatePickerProps> = ({
  id,
  label,
  placeholder,
  disabled,
  required,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  min,
  max,
  labelHidden,
  variant="default"
}) => {
  // Internal state for value if handleChange is not provided
  const [internalValue, setInternalValue] = useState<Dayjs | null>(
    value ? dayjs(value) : null
  );

  const onChange = (date: Dayjs | null) => {
    if (handleChange) {
      handleChange(date);
    } else {
      setInternalValue(date);
    }
  };

  // Determine the current value to be displayed in the DatePicker
  const currentValue = handleChange ? (value ? dayjs(value) : null) : internalValue;
 // Choose the correct DatePicker based on the variant prop
 const MUIDatePicker = variant === "mobile" ? MobileDatePicker : DesktopDatePicker;
  return (
    <div>
      {!labelHidden && (
        <label htmlFor={id} className="block text-sm font-medium text-text">
          {label} {required ? <span className="text-red-500">*</span> : ""}
        </label>
      )}
      <div className={classNames(labelHidden ? "" : "mt-1", "relative")}>
        <MUIDatePicker
          value={currentValue}
          onChange={onChange}
          onClose={handleBlur}
          disabled={disabled}
          minDate={min ? dayjs(min) : undefined}
          maxDate={max ? dayjs(max) : undefined}
          slots={{
            textField: (params) => (
              <TextField
                {...params}
                id={id}
                placeholder={placeholder}
                required={required}
                error={Boolean(error && touched)}
                helperText={error && touched ? error : ""}
                fullWidth
                inputProps={{
                  ...params.inputProps,
                  placeholder,
                }}
                InputProps={{
                  ...params.InputProps,
                  className: classNames(
                    error && touched ? "text-red-500 focus:ring-red-500 focus:border-red-500 border-red-600" : "focus:ring-secondary  border-gray focus:border-secondary text-primary",
                    disabled ? "cursor-not-allowed bg-gray-100" : "",
                    "shadow-sm block w-full sm:text-sm rounded placeholder:font-light placeholder:text-xs h-[38px] border border-gray pl-5 text-lg outline-none"
                  ),
                }}
              />
            )
          }}
        />
        {error && touched ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <AiOutlineExclamationCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        ) : null}
      </div>
      {error && touched ? (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default DatePicker;
