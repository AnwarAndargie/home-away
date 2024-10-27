"use client";
import * as React from "react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

function CalendarSelect() {
  const defaltDate: DateRange = {
    from: undefined,
    to: undefined,
  };

  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    defaltDate
  );

  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      className="rounded-md border shadow"
    />
  );
}

export default CalendarSelect;
