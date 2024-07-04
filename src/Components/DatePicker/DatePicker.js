import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import "./DatePicker.css";

function DatePicker() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
  });

  const handleDateRangeChange = (ranges) => {
    const { selection } = ranges;
    setFormData({
      ...formData,
      startDate: selection.startDate,
      endDate: selection.endDate,
    });
  };

   return (
    <div className="App">
      <form>     
        <div className="dateField">
          <label>Date Range: </label>
          <DateRangePicker
            ranges={[
              {
                startDate: formData.startDate,
                endDate: formData.endDate,
                key: "selection",
              },
            ]}
            onChange={handleDateRangeChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="forwards"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DatePicker;
