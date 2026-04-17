import { events } from "@/app/data/eventsData";
import { notFound } from "next/navigation";
import Image from 'next/image'
import { EventMap } from "@/app/components/EventMap";

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

       {/* Ficha Evento */}
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
<p className="text-subparag text-sm md:text-[16px] font-medium">{event!.place}</p>
     </div>

     <div className="w-fit h-[39px] p-2.5 mt-5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">EVENTO GRATUITO</h1>
        </div>
      

        </div>

        <div className="relative w-full h-[280px] lg:h-[320px] lg:flex-1">
        <Image src="/depo1.jpg" fill alt="depo imagem" className="object-cover rounded-lg"/>

        </div>
        </div>

      {/* Descrição Evento */}
      <div className="w-full mt-[60px] mb-[50px]">
      <div className="flex gap-[41px] mt-16">
      <img src="/arrow.png" alt="" className="h-[34px] mt-2" />
      <p className="text-3xl md:text-4xl text-parag">
          Descrição do Evento
      </p>
      </div>
      <div className="mt-16">
      <p className="text-subparag text-sm md:text-[16px] font-medium leading-auto">
        Prepare-se para uma noite especial de música e emoção! O <span className="text-main font-bold">Grande Concerto da Filarmônica de Metais Gnu/Vegas</span> chega ao <span className="text-main font-bold">Centro Cultural de Santa Bárbara d’Oeste</span>, no dia <span className="text-main font-bold">24 de agosto de 2026, às {event.time}</span>, reunindo alunos e professores em uma apresentação única.
      </p>

      <p className="mt-3 text-subparag text-sm  md:text-[16px] font-medium">
        O público poderá vivenciar um repertório envolvente, com diferentes formações de instrumentos de metais, em um espetáculo que combina talento, dedicação e energia no palco.
      </p>
       <p className="mt-3 text-subparag text-sm  md:text-[16px] font-medium">
        <span className="text-main font-bold">Com entrada gratuita</span>, o evento é uma oportunidade para toda a família prestigiar de perto um projeto que vem transformando vidas através da música e da educação.
      </p>
       <p className="mt-3 text-subparag text-sm  md:text-[16px] font-medium">
     Garanta sua presença e venha fazer parte dessa experiência ao vivo!
      </p>
    </div>
      </div>

       {/* Mapa */}
      <div>
        <div className="mt-20 w-[153px] h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">LOCAL</h1>
        </div>

      <p className="mt-8 text-blackmain text-sm md:text-[16px] font-medium">
        Centro Cultural de Santa Bárbara D Oeste
      </p>
      <div className="mt-4 mb-10 flex items-center gap-3">
 <Image src="/icons/pin.png" width={26} height={26} alt="" />
      <p className="text-subparag text-sm md:text-[16px] font-medium">
  {`${event.address.street}, ${event.address.number}, ${event.address.neighborhood}`}
</p>
      </div>

      <div className="mb-16">
        <EventMap event={event} />
      </div>
    
      </div>
   
       </div>
    </div>
  );
}