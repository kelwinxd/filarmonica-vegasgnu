import { events } from "@/app/data/eventsData";
import { notFound } from "next/navigation";
import Image from 'next/image'

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: Props) {
  const { id } = await params; 

  const event = events.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-white">
        <div className="w-full relative h-[70vh]">
            <Image src={event.image} width={1440} height={620} className="object-cover h-full" alt="" />
        </div>
        <div className="px-5 md:px-10 lg:px-26">

       
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center min-h-[320px] mt-16 mb-16">

      
        <div className="flex-1" >
   <h1 className=" font-medium text-blackmain text-2xl md:text-3xl">
        Evento {event!.id}
      </h1>
      <div className="flex items-center gap-3">
        <Image src="/icons/calendar.png" width={26} height={26} alt="" />
        <p className="text-subparag text-sm md:text-[16px] font-medium">{event!.date} -  {event!.time}</p>
      </div>
     
     <div className="flex items-center gap-3">
          <Image src="/icons/pin.png" width={26} height={26} alt="" />
<p className="text-subparag text-sm md:text-[16px] font-medium">{event!.address}</p>
     </div>

     <div className="w-fit h-[39px] p-2.5 mt-5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">EVENTO GRATUITO</h1>
        </div>
      

        </div>

        <div className="relative w-full h-[280px] lg:h-[320px] lg:flex-1">
        <Image src="/depo1.jpg" fill alt="depo imagem" className="object-cover rounded-lg"/>

        </div>
        </div>
   
       </div>
    </div>
  );
}