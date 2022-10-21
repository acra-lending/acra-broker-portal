import SideBar from "../components/SideBar"
import Navbar from '../components/NavBar'
import DashLinks from "../components/DashLinks";
// require('dotenv').config('../.env');

export default function Home({menuItems, dashboardItems}) {
  return (
    <div className="relative w-full">
      <Navbar />

    <div className="md:flex static">
      <SideBar props={menuItems}/>

      <div className="xl:mx-32 lg:mx-24 md:mx-auto pt-32">
         <DashLinks props={dashboardItems}/>
      </div>
    </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const [menuResponse, dashResponse] = await Promise.all([
    fetch(`${process.env.BASE_URL}/broker-portal-menu-items`),
    fetch(`${process.env.BASE_URL}/broker-portal-dashboard-items`)
  ]); 

    const [menuItems, dashboardItems] = await Promise.all([
      menuResponse.json(),
      dashResponse.json()
    ]);
    console.log(menuItems)
    
    return { props: { menuItems, dashboardItems } };
}
