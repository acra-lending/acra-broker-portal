import SideBar from "./SideBar"
export default function Home({menuItems}) {
  console.log(menuItems)
  return (
    <div className="bg-slate-50 h-screen">
      <SideBar 
        props={menuItems}
      />
    </div>
  )
}
export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:1337/api/acra-broker-portal-menu-items')
  const data = await response.json()
  return {
      props: { menuItems: data },
  };
}