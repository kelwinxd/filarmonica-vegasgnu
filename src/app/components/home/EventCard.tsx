import Image from 'next/image'
import type { EventComponent } from "../../../../types/event";
import Link from 'next/link';

type EventCardProps = {
  event: EventComponent;
};

function EventCard({ event } : EventCardProps) {
  return (
    <Link href={`/eventos/${event.id}`} className="block h-full">
  <div className="rounded-[8px] overflow-hidden shadow-md bg-white h-[340px] flex flex-col">
    {/* imagem */}
    <div className="relative h-[180px] shrink-0">
      <Image src={event.image} alt="" fill className="object-cover" />
    </div>

    {/* conteúdo */}
    <div className="p-4 flex flex-col flex-1 bg-white">
      <h3 className="font-medium uppercase text-sm md:text-lg text-blackmain megatitle">
        {event.title}
      </h3>
      <p className="text-sm text-subparag">{event.place}</p>
      <p className="text-sm font-medium text-subparag">
        {event.date} | {event.time}
      </p>

      <button className="mt-auto w-fit bg-mainyellow hover:bg-[#F8D184] px-4 py-2 rounded text-blackmain font-medium text-sm cursor-pointer">
        Confira →
      </button>
    </div>
  </div>
</Link>
  );
}

export default EventCard;