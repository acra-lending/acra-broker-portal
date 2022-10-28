import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
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

  const router = useRouter();

  return (
    <div className="relative w-full">
      <Navbar />
      <main>
            {isLogged ? (
              <>


                <div className="md:flex static">
                <SideBar props={menuItems}/>
                  <div className="mx-auto md:pt-32">

                      <p className='px-3'>Welcome back, <b>{localStorage.username}</b>!</p>

                    <DashLinks props={dashboardItems}/>
                    <div>
                      <UsefulLinks props={useLinksItems}/>
                    </div>
                  </div>
                </div>
              
              </>
            ) : (
              <>
                <div 
                  className="xl:mx-32 lg:mx-24 md:mx-auto md:pt-32"
                >
                  <p className="text-center">Welcome, please log in.</p>
                  <p className="pt-5 text-center">If this is your first time logging in since the update, you have to reset your password with "Forgot password"</p>
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
