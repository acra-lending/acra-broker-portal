import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faArrowAltCircleUp, faAddressBook, faBookmark  } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import DashBoard from "../Dashboard";
import FormsTable from "../Forms";
function SideBar () {
    const menuItems = [
        {
            menuTitle: 'DashBoard',
            icon: faChartBar
        },
        {
            menuTitle: 'Condition Upload',
            icon: faArrowAltCircleUp 
        },
        {
            menuTitle: 'Forms & Requests',
            icon: faAddressBook
        },
        {
            menuTitle: 'Loan Processor Tips',
            icon: faBookmark
        }
    ];

    const [isMobile, setMobile] = useState(false);
    const [isActive, setIsActive] = useState(menuItems[0].menuTitle);

    const handleToggle = () => {
        setMobile(!isMobile);
    }

    const sideBarDeskTopClassNames = 'bg-white w-64 z-10 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out';
    const sideBarMobileClassNames = 'bg-white w-64 z-10 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out';
    
    return (
        <div className="relative min-h-screen md:flex">
            <div className="bg-[#0033A1] text-gray-100 flex justify-between md:hidden">
                <div></div>
                <button className="p-4" onClick={handleToggle}>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className={isMobile ? sideBarMobileClassNames : sideBarDeskTopClassNames}>
                <nav>
                {menuItems.map((item, key) => (
                <li 
                className={isActive === item.menuTitle ? "flex items-center gap-3 bg-[#0033A1] text-white p-3 rounded" : "flex items-center gap-3 p-3 rounded"} 
                key={key} 
                onClick={() => setIsActive(item.menuTitle)}
                >
            <FontAwesomeIcon icon={item.icon}/>
            <Link href="/#"><a className="text-lg font-medium ">{item.menuTitle}</a></Link>
            </li>
            ))}
                </nav>
            </div>
            <div className="flex-1 p-10 text-2xl font-bold">
               {isActive === 'DashBoard' && <DashBoard /> }
               {isActive === 'Forms & Requests' && <FormsTable /> }
            </div>
        </div>
    )
}

export default SideBar;