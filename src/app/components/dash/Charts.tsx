"use client"

import { acessosAoSite, inscricoesPorEvento } from "@/app/data/adminData"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, CartesianGrid,
} from "recharts"



const Charts = () => {
  return (
    <div className="flex gap-4">

      {/* Gráfico de Barras */}
      <div className="flex-1 bg-[#1a1a1a] rounded-xl p-6">
        <h2 className="text-white font-semibold mb-4">Inscrições por Evento</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={inscricoesPorEvento}>
             <CartesianGrid stroke="#333" vertical={false} />
            <XAxis
              dataKey="evento"
              tick={{ fill: "#aaa", fontSize: 12, width:50 }}
              axisLine={false}
              tickLine={false}
              className="max-w-10 text-amber-600"
            />
            <YAxis
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: 8 }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#C9A84C" }}
            />
            <Bar barSize={70} dataKey="inscritos" fill="#C9A84C" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Área */}
      <div className="flex-1 bg-[#1a1a1a] rounded-xl p-6">
        <h2 className="text-white font-semibold mb-4">Acessos ao Site</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={acessosAoSite}>
            <defs>
              <linearGradient id="gradientAcessos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#333" vertical={false} />
            <XAxis
              dataKey="dia"
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={[400, 1000]}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#222", border: "none", borderRadius: 8 }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#C9A84C" }}
            />
            <Area
              type="monotone"
              dataKey="acessos"
              stroke="#C9A84C"
              strokeWidth={2}
              fill="url(#gradientAcessos)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default Charts