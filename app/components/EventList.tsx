import { Event } from "../types";
import EventCard from "./EventCard";
import CreateEventDialog from "./CreateEventDialog";

interface EventListProps {
  events: Event[];
  refetchEvents : () => void
}

export default function EventList({ events,refetchEvents }: EventListProps) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} refetchEvents={refetchEvents} />
        ))}
      </div>

      <CreateEventDialog refetchEvents={refetchEvents} />
    </div>
  );
}
