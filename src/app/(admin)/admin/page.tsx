import Charts from "@/app/components/dash/Charts"

const statsData = [
  {
    id: 1,
    icon: "/icons/eventsicon.png",
    label: "Próximos Eventos",
    value: "04",
  },
  {
    id: 2,
    icon: "/icons/eventsicon.png",
    label: "Total Inscritos",
    value: "1,248",
  },
  {
    id: 3,
    icon: "/icons/eventsicon.png",
    label: "Novas Mensagens",
    value: "12",
  },
  {
    id: 4,
    icon: "/icons/eventsicon.png",
    label: "Novos Parceiros",
    value: "03",
  },
]

const Page = () => {
  return (
    <div>

    
    <div className="flex gap-4">
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="flex items-center gap-4 bg-[#1a1a1a] rounded-xl px-6 py-5 flex-1"
        >
          <img src={stat.icon} alt={stat.label} className="w-10 h-10" />
          <div>
            <h3 className="text-sm text-gray-400">{stat.label}</h3>
            <h1 className="text-2xl font-semibold text-white">{stat.value}</h1>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-9">
      <Charts />
    </div>
    </div>
  )
}

export default Page