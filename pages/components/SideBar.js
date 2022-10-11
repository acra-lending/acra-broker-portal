import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faArrowAltCircleUp, faAddressBook, faBookmark  } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
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

    const [isActive, setIsActive] = useState(menuItems[0].menuTitle);
    return (
        <div className="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <ul className="flex flex-col pt-4 h-screen bg-white">
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
        </ul>
        </div>
    )
}

export default SideBar;