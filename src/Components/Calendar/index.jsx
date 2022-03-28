import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './EventCalendar.css';

const events = [
  {
    id: 1014254,
    title: 'cita con alejandra',
    start: '2022-03-25T10:00:00',
    end: '2022-03-25T11:00:00',
  },
  {
    id: 258789,
    title: 'cita con mafe',
    start: '2022-03-25T13:00:00',
    end: '2022-03-25T14:00:00',
  },
];
function FullCalendarApp() {
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
      eventColor="green"
      nowIndicator="true"
    />
  );
}
export default FullCalendarApp;
