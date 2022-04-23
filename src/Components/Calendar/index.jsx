/* eslint-disable react/prop-types */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './EventCalendar.css';

function Calendar({ events }) {
  return (
    <FullCalendar
      locale="es"
      weekends={false}
      slotMinTime="07:00"
      slotMaxTime="19:00"
      allDaySlot={false}
      expandRows
      height="100%"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      slotLabelFormat={{ hour: 'numeric', minute: '2-digit' }}
      headerToolbar={{
        center: 'timeGridWeek,timeGridDay',
      }}
      events={events}
      eventColor="#1977cc"
      nowIndicator="true"
    />
  );
}

export default Calendar;
