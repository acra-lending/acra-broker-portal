import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import SVG from 'react-inlinesvg';
export default function SideBar ({ props }) {
    /**
     * hooks used for the following:
     *  isMobile - changes class names depending on whether user is using mobile or desktop screen
     * isActive - Sets the styling for the tab if it is active or not
     * **/
    const [isMobile, setMobile] = useState(false);
    const [isActive, setIsActive] = useState(props.data[0].attributes.menuTitle);
    
    //useRouter is used here to get the current pathname(slug) to determine if the tab is active
    const router = useRouter(); 

    //Classnames for div and tabs
    const sideBarDeskTopClassNames = 'min-h-screen min-w-fit bg-white w-64 z-10 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r shadow-md';
    const sideBarMobileClassNames = 'min-h-screen min-w-fit bg-white w-64 z-40 fixed inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out border-r shadow-md';
    const activeTabClassNames = 'flex items-center gap-3 bg-[#0033A1] text-white p-3 rounded';
    const tabClassNames = 'flex items-center gap-3 p-3 rounded hover:bg-[#f3f4f6]';
   
    //function to toggle th sidebar close when user taps on a menu item on mobile
    const handleToggle = () => {
        setMobile(!isMobile);
    }
    
    return (
        <>
            <div className="flex justify-end flex-row bg-slate-300 md:hidden p-3">
                <button className="p-4" onClick={handleToggle}>
                    <svg className="h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className={isMobile ? sideBarMobileClassNames : sideBarDeskTopClassNames}>
                <nav className="pl-1 pr-1 md:min-w-[275px]">
                    <div>
                        <img 
                            src="/AcraLogo.png" 
                            alt="acra-logo"
                            style={{ 
                                width: 'auto', 
                                height: '50px', 
                                padding: '10px'}}
                            />
                    </div>
                    <div>
                        {props?.data.map((item, key) => (
                            <Link href={item.attributes.slug} key={key} >
                            <a className='text-lg font-medium text-black no-underline'>
                                <li 
                                    className={router.pathname === item.attributes.slug ? activeTabClassNames : tabClassNames} 
                                >
                                    <SVG 
                                        src={item.attributes.icon} 
                                        width={25}
                                    />
                                    {item.attributes.menuTitle}
                                </li>
                            </a>
                        </Link>
                    ))}
                </div>
                <div>
                    <Link href="/auth/logout">
                        <a className="text-lg font-medium md:hidden no-underline">
                            <li 
                                className={"flex items-center gap-3 p-3 rounded"} 
                            >
                                Sign Out
                            </li>
                        </a>
                    </Link>
                </div>
                </nav>
            </div>
        </>       
    )
}
