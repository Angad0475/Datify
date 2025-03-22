"use client";
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setRecurrence } from '@/Redux/datePickerSlice';
import SimpleCalendar from '@/components/datepicker/SimpleCalendar'; // Calendar preview component

const Datepicker = () => {
  const dispatch = useDispatch();
  const { selectedDate, recurrence, recurringDates } = useSelector((state) => state.datePicker);

  const handleDateChange = (date) => {
    dispatch(setDate(date));
  };

  const handleRecurrenceChange = (e) => {
    dispatch(setRecurrence(e.target.value));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-gray-800 text-2xl font-bold mb-4 uppercase tracking-wide">Select Date</h2>
        
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          className="w-full p-2 border border-gray-300 rounded-md text-center"
          dateFormat="MM/dd/yyyy"
          placeholderText="Click to select a date"
        />

        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Recurrence:</label>
          <select
            value={recurrence}
            onChange={handleRecurrenceChange}
            className="w-full p-2 border border-gray-300 rounded-md text-center"
          >
            <option value="none">None</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Calendar Preview</h3>
          <SimpleCalendar selectedDate={selectedDate} recurringDates={recurringDates} />
        </div>
      </div>
    </div>
  );
};

export default Datepicker;
