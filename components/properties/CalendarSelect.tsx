"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

function CalendarSelect() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  );
}

export default CalendarSelect;
