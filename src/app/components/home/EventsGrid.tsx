
import { events } from "@/app/data/eventsData";
import EventCard from "./EventCard";   // ajusta o caminho

const EventsGrid = () => {
  return (
    <section className="w-full">
      
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6
      ">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

    </section>
  );
};

export default EventsGrid;