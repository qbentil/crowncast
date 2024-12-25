import { FC, useEffect, useRef, useState } from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';
import { DateRangePicker } from 'react-date-range';
import { classNames } from "@/utils"; // Replace with your own utility for handling classes
import { format } from 'date-fns';

interface MyDateRangePickerProps {
  handleDateChange?: (dates: { startDate: Date; endDate: Date }) => void;
  label?: string;
}

const MyDateRangePicker: FC<MyDateRangePickerProps> = ({ handleDateChange, label }) => {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const [showPicker, setShowPicker] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ right: "auto", left: "auto" });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showPicker && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (containerRect.right > windowWidth) {
        setPickerPosition({
          right: "0px",
          left: "auto"
        });
      } else {
        setPickerPosition({
          left: "0px",
          right: "auto"
        });
      }
    }
  }, [showPicker]);

  const handleSelect = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;
    setRange({ ...range, startDate, endDate });

    if (handleDateChange) {
      handleDateChange({ startDate, endDate });
    }

    // Close the date picker after selection
    setShowPicker(false);
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const formattedStartDate = format(range.startDate, 'do MMMM yyyy');
  const formattedEndDate = format(range.endDate, 'do MMMM yyyy');

  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-text mb-2">
          {label}
        </label>
      )}
      <div 
        onClick={togglePicker} 
        className={classNames(
          "border border-gray-300 rounded px-3 py-2 flex items-center cursor-pointer",
          showPicker ? "shadow-lg" : "shadow-sm"
        )}
      >
        <AiOutlineCalendar className="mr-2 text-xl text-primary" />
        <span className="text-sm">
          {formattedStartDate} → {formattedEndDate}
        </span>
      </div>

      {showPicker && (
        <div 
          className="absolute z-10 mt-2"
          style={{ 
            left: pickerPosition.left, 
            right: pickerPosition.right 
          }}
        >
          <DateRangePicker
            ranges={[range]}
            onChange={handleSelect}
            rangeColors={["#5850EC"]}
            editableDateInputs
          />
        </div>
      )}
    </div>
  );
};

export default MyDateRangePicker;
