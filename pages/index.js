import SideBar from "../components/SideBar"
import Navbar from '../components/NavBar'
import DashLinks from "../components/DashLinks";


export default function Home({menuItems}) {
  return (
    <div className="md:flex static">
    <SideBar props={menuItems}/>
        <div className="mx-auto">
            <DashLinks />
        </div>
</div>
  )
}
export async function getServerSideProps(context) {
  // const response = await fetch('http://localhost:1337/api/acra-broker-portal-menu-items')
  // const data = await response.json()
  return {
      props: { menuItems: {
        "data": [
          {
            "id": 1,
            "attributes": {
              "slug": "/",
              "menuTitle": "Dashboard"
            }
          },
          {
            "id": 1,
            "attributes": {
              "slug": "/conditions",
              "menuTitle": "Conditions Upload"
            }
          },
          {
            "id": 1,
            "attributes": {
              "slug": "/forms",
              "menuTitle": "Forms & Requests"
            }
          },
          {
            "id": 1,
            "attributes": {
              "slug": "/processor-tips",
              "menuTitle": "Loan Processor Tips"
            }
          },

      ]} },
  };
}