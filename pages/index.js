import SideBar from "../components/SideBar"
import Navbar from '../components/NavBar'
import DashLinks from "../components/DashLinks";


export default function Home({menuItems, dashboardItems}) {
  return (
    <div className="md:flex static">
      <SideBar props={menuItems}/>
      <div className="mx-auto">
         <DashLinks props={dashboardItems}/>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const [menuResponse, dashResponse] = await Promise.all([
    fetch('http://localhost:1337/api/broker-portal-menu-items'),
    fetch('http://localhost:1337/api/broker-portal-dashboard-items')
  ]); 

    const [menuItems, dashboardItems] = await Promise.all([
      menuResponse.json(),
      dashResponse.json()
    ]);
    
    return { props: { menuItems, dashboardItems } };
}
