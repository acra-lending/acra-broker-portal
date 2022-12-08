import AcraLogo from '../public/AcraLogo.png';
import Image from 'next/image';
import Sidebar from './SideBar';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar({props}) {

  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    setIsLogged(!!localStorage.getItem('jwt'));
  }, []);

  return (
    <>

      <div className="absolute left-0 top-0 w-full z-10">
        <nav className=" justify-between font-sans md:flex hidden items-center text-center sm:flex-row sm:text-left py-1.5 px-6 bg-white shadow w-full">
          <div>
            <Link href="/">
              <a>
                <img 
                  src="/AcraLogo.png" 
                  alt="acra-logo"
                  style={{ 
                      width: 'auto', 
                      height: '50px', 
                      padding: '8px'}}
                />
              </a>
            </Link>
          </div>
          <div>
            {!isLogged ? (
                <Link href="/">
                    <a className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"></a>
                </Link>
              ) : (
                <Link href="/auth/logout">
                    <a className="text-lg no-underline text-grey-darkest hover:text-blue-dark">Logout</a>
                </Link>
              )}
          </div>
        </nav>
      </div>
    
      {/* <div className='h-screen flex flex-row justify-start'>
        <Sidebar props={props}/>
        </div>

          <div className="bg-primary flex justify-end p-4 text-black'">
            <div>
            <a
              href="/signout"
              className="text-lg"
            >
              Sign Out
            </a>
            </div>
          </div> */}
    </>
  );
}
