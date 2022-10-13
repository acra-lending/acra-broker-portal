import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faArrowAltCircleUp, faAddressBook, faBookmark  } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
function SideBar ({children}) {
    const menuItems = [
        {
            menuTitle: 'dashboard',
            icon: faChartBar,
            href: '/dashboard'
        },
        {
            menuTitle: 'Condition Upload',
            icon: faArrowAltCircleUp,
            href: '/conditionsUpload' 
        },
        {
            menuTitle: 'Forms & Requests',
            icon: faAddressBook,
            href: '/forms'
        },
        {
            menuTitle: 'Loan Processor Tips',
            icon: faBookmark,
            href: '/processorTips'
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
                <Link href={item.href}>
                    <a className="text-lg font-medium ">
                    <li 
                    className={isActive === item.menuTitle ? "flex items-center gap-3 bg-[#0033A1] text-white p-3 rounded" : "flex items-center gap-3 p-3 rounded"} 
                    key={key} 
                    onClick={() => {setIsActive(item.menuTitle); handleToggle();}}
                    >
                        <FontAwesomeIcon icon={item.icon}/>
                        {item.menuTitle}
                    </li>
                    </a>
                </Link>
            ))}
                </nav>
            </div>
            <div className="flex-1 p-10 text-2xl font-bold">
              {children}
            </div>
        </div>
    )
}

export default SideBar;