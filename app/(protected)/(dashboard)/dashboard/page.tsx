import Search from "@/app/ui/search/search"
import Container from "@/app/ui/video/container"

export default function Dashboard() {
  return (
    <div className='w-full h-screen overflow-hidden   md:pl-[13rem] lg:pl-[16rem] md:pr-4 pt-24 md:pt-4 '>
    <div className="w-full h-full">
      <Search/>
      <Container/>
    </div>
    </div>
  )
}
