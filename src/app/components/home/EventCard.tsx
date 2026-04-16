import Image from 'next/image'
import type { EventComponent } from "../../../../types/event";

type EventCardProps = {
  event: EventComponent;
};

function EventCard({ event } : EventCardProps) {
  return (
    <a href={event.link} className="block">
      <div className="rounded-[8px] overflow-hidden shadow-md bg-white">
        {/* imagem */}
        <div className="relative h-[180px]">
          <Image
            src={event.image}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* conteúdo */}
        <div className="p-4">
          <h3 className="font-medium text-sm md:text-lg text-blackmain megatitle">
            GRANDE CONCERTO
          </h3>

          <p className="text-sm text-subparag">
            {event.address}
          </p>

          <p className="text-sm font-medium text-subparag">
            {event.date} | {event.time}
          </p>

          <button className="mt-3 bg-mainyellow hover:bg-[#F8D184] px-4 py-2 rounded text-white text-sm cursor-pointer hover:">
            Confira →
          </button>
        </div>
      </div>
    </a>
  );
}

export default EventCard;