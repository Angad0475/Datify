"use client";
import React from 'react';
import { format, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';

const SimpleCalendar = ({ selectedDate, recurringDates }) => {
  const month = selectedDate ? selectedDate.getMonth() : new Date().getMonth();
  const year = selectedDate ? selectedDate.getFullYear() : new Date().getFullYear();

  // Calculate the first and last days of the month
  const firstDayOfMonth = startOfMonth(new Date(year, month));
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);

  // Calculate the starting and ending days of the calendar view
  const startDay = startOfWeek(firstDayOfMonth); // Include days from the previous month
  const endDay = endOfWeek(lastDayOfMonth); // Include days from the next month

  // Generate array of days for the calendar
  const daysArray = [];
  let currentDay = startDay;
  while (currentDay <= endDay) {
    daysArray.push(currentDay);
    currentDay = new Date(currentDay);
    currentDay.setDate(currentDay.getDate() + 1);
  }

  // Day labels
  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="flex items-center justify-center h-[400px] bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[320px] text-center transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-gray-800 text-xl font-bold mb-3 uppercase tracking-wide">Simple Calendar</h2>

        {/* Calendar Header */}
        <div className="grid grid-cols-7 gap-1 text-blue-500 font-semibold text-xs">
          {dayLabels.map((label, index) => (
            <div key={index} className="text-center">{label}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mt-2">
          {daysArray.map((day, index) => {
            const isSelected = isSameDay(day, selectedDate);
            const isRecurring = recurringDates.some((recurringDate) => isSameDay(day, recurringDate));

            return (
              <div
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded-md text-gray-700 
                  transition-all duration-200 shadow-md cursor-pointer text-sm
                  ${isSelected ? 'bg-blue-500 text-white scale-105' : 'bg-gray-100'} 
                  ${isRecurring ? 'bg-green-500 text-white' : ''} 
                  hover:bg-blue-500 hover:text-white hover:scale-105`}
              >
                {format(day, 'd')}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimpleCalendar;
