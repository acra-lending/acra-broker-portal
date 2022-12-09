import { useState, useEffect } from 'react';
import SideBar from "../components/SideBar"
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import DashLinks from "../components/DashLinks";
import UsefulLinks from "../components/UsefulLinks";
import Login from '../components/Login';
import {Grid} from "react-loader-spinner";


export default function Home({menuItems, dashboardItems, useLinksItems}) {

  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState();
  const [alert, setAlert] = useState();


  useEffect(() => {
    setIsLoading(true);
    setIsLogged(!!localStorage.getItem('jwt'));
    setIsLoading(false);
  }, []);

  // const router = useRouter();
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <main>
            {isLoading ? (
              <div style={{position: "absolute", left: "47%", top: "35%"}}>
                <Grid
                  height="80"
                  width="80"
                  color="#0033a1"
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              isLogged ? (
                <>
  
  
                  <div className="md:flex static">
                  <SideBar props={menuItems}/>
                    <div className="mx-auto md:pt-32 sm:pb-16">
  
                        <h2 className="px-3 pb-2 sm:pt-4">Welcome, <b>{localStorage.firstname}</b>!</h2>
                        <h2 className="px-3 pb-2">Broker Portal Dashboard</h2>
                      <DashLinks props={dashboardItems}/>
                      <div>
                        <UsefulLinks props={useLinksItems}/>
                      </div>
                    </div>
                  </div>
                
                </>
              ) : (
                <>
                  <div className="h-screen px-12 flex space-x-4 flex-col xl:flex-row xl:px-32 lg:flex-row lg:px-24 md:flex-row md:px-24 md:pt-32 sm:flex sm:flex-col sm:space-x-0 bg-[url('https://api.acralending.com/uploads/careers_navybg_b874f0bbad.jpg')] bg-cover">
                    <div>
                      <h2 className="text-white pt-10 sm:pt-2">Broker Portal</h2>
                      <h4 className="text-white pt-10 sm:py-2">Welcome, please log in. <br/><br/>If this is your first time logging in since the update, you have to reset your password with "Forgot password"</h4>
                    </div>
                    {alert && (
                
                      <div 
                          className='bg-red-300 rounded p-2'
                      >
                        <div 
                            dangerouslySetInnerHTML={{ __html: alert[1] }}
                            className="text-center"
                        />
                      </div>
                    )}
                    <Login />
                  </div>
                </>
              )
            )}
          </main>
        {/* <Footer /> */}
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
