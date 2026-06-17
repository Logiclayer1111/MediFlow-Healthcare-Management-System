import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function AppointmentCalendar() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="card">
      <Calendar onChange={(value) => setDate(value as Date | null)} value={date} />
      <p className="mt-4 text-sm text-gray-600">Selected: {date?.toDateString()}</p>
      {/* Here you would fetch appointments for that date */}
    </div>
  );
}
