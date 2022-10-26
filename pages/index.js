import SideBar from "../components/SideBar"
import Navbar from '../components/NavBar'
import DashLinks from "../components/DashLinks";
import UsefulLinks from "../components/UsefulLinks";
// require('dotenv').config('../.env');
import sellersGuide from "./sellers-guide";
export default function Home({menuItems, dashboardItems, useLinksItems}) {
  return (
    <div className="relative w-full">
      <Navbar />
      <sellersGuide />
    <div className="md:flex static">
      <SideBar props={menuItems}/>

      <div className="xl:mx-32 lg:mx-24 md:mx-auto md:pt-32">
         <DashLinks props={dashboardItems}/>
        <div>
          <UsefulLinks props={useLinksItems}/>
        </div>
      </div>
    </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const [menuResponse, dashResponse, useLinksResponse] = await Promise.all([
    fetch(`${process.env.BASE_URL}/broker-portal-menu-items`),
    fetch(`${process.env.BASE_URL}/broker-portal-dashboard-items?populate=*`),
    fetch(`${process.env.BASE_URL}/broker-portal-useful-links-items?populate=*`)
  ]); 

    const [menuItems, dashboardItems, useLinksItems] = await Promise.all([
      menuResponse.json(),
      dashResponse.json(),
      useLinksResponse.json()
    ]);
    
    return { props: { menuItems, dashboardItems, useLinksItems } };
}
