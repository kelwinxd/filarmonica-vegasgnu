
import ItemLink from "./ItemLink"


export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1d1c1b] p-6 main-font">
      <h1 className="text-lg font-bold mb-6 megatitle text-mainyellow">♫ FILARMONICA</h1>

      <nav className="flex flex-col gap-2 text-sm">

        <ItemLink href="/admin">
            Dashboard
        </ItemLink>

         <ItemLink href='/admin/eventos'>
            Eventos
         </ItemLink>

         <ItemLink href='/admin/inscricoes'>
            Inscrições
         </ItemLink>

        

      </nav>
    </aside>
  )
}