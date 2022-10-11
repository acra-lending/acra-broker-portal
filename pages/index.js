import autoprefixer from "autoprefixer"
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <div className="bg-slate-50 h-screen">
    <NavBar />
    <SideBar />
    </div>
  )
}
