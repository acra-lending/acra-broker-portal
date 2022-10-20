// import DashLinks from "../components/DashLinks";
// import SideBar from '../components/SideBar'

// function dashboard ({menuItems, dashboardItems}) {
//     return (
//         <div className="md:flex relative">
//             <SideBar props={menuItems}/>
//                 <div className="max-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-3 pt-4 mx-auto my-0 text-center">
//                     <DashLinks props={dashboardItems}/>
//                 </div>
//         </div>
//     )
// }

// export async function getServerSideProps(context) {
//   const [menuResponse, dashResponse] = await Promise.all([
//     fetch('http://localhost:1337/api/broker-portal-menu-items'),
//     fetch('http://localhost:1337/api/broker-portal-dashboard-items')
//   ]); 

//     const [menuItems, dashboardItems] = await Promise.all([
//       menuResponse.json(),
//       dashResponse.json()
//     ]);
    
//     return { props: { menuItems, dashboardItems } };
// }

// export default dashboard;
