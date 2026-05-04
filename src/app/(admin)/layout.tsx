import Header from "../components/dash/Header"
import Sidebar from "../components/dash/Sidebar"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen main-font">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 overflow-auto bg-[#0d0d0d]">
          {children}
        </main>
      </div>
    </div>
  )
}