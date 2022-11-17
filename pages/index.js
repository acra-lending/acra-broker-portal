import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router'; 
import SideBar from "../components/SideBar"
import Navbar from '../components/NavBar'
import DashLinks from "../components/DashLinks";
import UsefulLinks from "../components/UsefulLinks";
import Login from '../components/Login';

export default function Home({menuItems, dashboardItems, useLinksItems}) {

  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    setIsLogged(!!localStorage.getItem('jwt'));
  }, []);

  // const router = useRouter();
  return (
    <div className="relative w-full h-full bg-[url('https://7abe-107-194-134-60.ngrok.io/uploads/careers_navybg_b874f0bbad.jpg')]">
      <Navbar />
      <main>
            {isLogged ? (
              <>


                <div className="md:flex static">
                <SideBar props={menuItems}/>
                  <div className="mx-auto md:pt-32">

                      <h2 className="px-3 pb-2">Welcome, <b>{localStorage.firstname}</b>!</h2>

                    <DashLinks props={dashboardItems}/>
                    <div>
                      <UsefulLinks props={useLinksItems}/>
                    </div>
                  </div>
                </div>
              
              </>
            ) : (
              <>
                <div className="h-screen px-12 flex space-x-4 flex-col xl:flex-row xl:mx-32 lg:flex-row lg:mx-24 md:flex-row md:mx-24 md:pt-32 sm:flex sm:flex-col">
                  <div>
                    <h4 className="text-white pt-16">Welcome, please log in. <br/><br/>If this is your first time logging in since the update, you have to reset your password with "Forgot password"</h4>
                  </div>
                  <Login />
                </div>
              </>
            )}
        </main>
      </div>
  )
}
  {/* return (
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
} */}
export async function getServerSideProps(context) {
  const [menuResponse, dashResponse, useLinksResponse] = await Promise.all([
    fetch(`${process.env.BASE_URL}/corr-portal-menu-items`),
    fetch(`${process.env.BASE_URL}/corr-portal-dashboard-items?populate=*`),
    fetch(`${process.env.BASE_URL}/broker-portal-useful-links-items?populate=*`)
  ]); 

    const [menuItems, dashboardItems, useLinksItems] = await Promise.all([
      menuResponse.json(),
      dashResponse.json(),
      useLinksResponse.json()
    ]);
    
    return { props: { menuItems, dashboardItems, useLinksItems } };
}
