import Menu from "@/app/ui/menu/menu"
import Nav from "@/app/ui/nav/nav"


export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex flex-col md:flex-">
     <Menu/>
     <Nav/>
    {children}
    </div>
  )
}
