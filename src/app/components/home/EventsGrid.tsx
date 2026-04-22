
"use client"
import { events } from "@/app/data/eventsData";
import EventCard from "./EventCard";   // ajusta o caminho
import { EventComponent } from "../../../../types/event";
import { useEffect, useState } from "react";

const EventsGrid = () => {
   const [allEvents, setAllEvents] = useState<EventComponent[]>(events) // 👈 fonte original
    const [search, setSearch] = useState("")
    const [mes, setMes] = useState("")

  // 👇 ainda derivado, mas agora da lista que virá da API
const listEvents = allEvents
  .filter((event) => {
    if (search.trim() === "") return true
    const word = search.toLowerCase()
    return (
      event.title.toLowerCase().includes(word) ||
      event.place.toLowerCase().includes(word) ||
      event.address.city.toLowerCase().includes(word)
    )
  })
  .filter((event) => {
    if (mes === "") return true
    // date: "20/08/2026" → pega o índice [1] que é o mês
    const monthOfEvent = event.date.split("/")[1]
    return monthOfEvent === mes
  })

  // 👇 quando vier a API, só muda aqui
  /*
  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setAllEvents(data)) // popula a fonte original
  }, [])
  */
  return (
    <section className="w-full">
       <div className="flex flex-col lg:flex-row justify-between items-center mb-10 ">
      <h1 className="text-left self-start mb-5 md:mb-0 text-[16px] md:text-[24px] font-medium text-[#080708] megatitle">Encontre Eventos</h1>
      <div className="flex gap-3 w-full lg:w-[70%] overflow-hidden">
  <input
    className="flex-1.25 md:flex-2 min-w-0 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2"
    type="text"
    placeholder="Pesquise o evento"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <select className="flex-1 min-w-0 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2" value={mes} onChange={(e) => setMes(e.target.value)}>
    <option value="">Mês</option>
    <option value="01">Janeiro</option>
    <option value="02">Fevereiro</option>
    <option value="03">Março</option>
    <option value="04">Abril</option>
    <option value="05">Maio</option>
    <option value="06">Junho</option>
    <option value="07">Julho</option>
    <option value="08">Agosto</option>
    <option value="09">Setembro</option>
    <option value="10">Outubro</option>
    <option value="11">Novembro</option>
    <option value="12">Dezembro</option>
  </select>
      </div>
     </div>
      
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6
      ">
        {listEvents && listEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}

        {listEvents.length === 0 && <p className="text-[24px] font-medium text-blackmain">Nenhum Evento encontrado</p>}
      </div>

    </section>
  );
};

export default EventsGrid;