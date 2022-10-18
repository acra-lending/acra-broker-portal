import Link from "next/link";
import { useState } from "react";
import AcraLogo from '../public/AcraLogo.png';
import Image from "next/image";
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
    const sideBarDeskTopClassNames = 'h-screen min-w-fit bg-white w-64 z-10 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r shadow-md';
    const sideBarMobileClassNames = 'bg-white h-screen w-64 z-10 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out border-r shadow-md';
    const activeTabClassNames = 'flex items-center gap-3 bg-[#0033A1] text-white p-3 rounded';
    const tabClassNames = 'flex items-center gap-3 p-3 rounded';
   
    //function to toggle th sidebar close when user taps on a menu item on mobile
    const handleToggle = () => {
        setMobile(!isMobile);
    }

    return (
        <>
            <div className="text-black flex justify-between md:hidden p-3 items-center ">
            <Image
                src={AcraLogo}
                height={50}
                width={256}
                className="p-52"
                />
                <button className="p-4" onClick={handleToggle}>
                    <svg className="h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className={isMobile ? sideBarMobileClassNames : sideBarDeskTopClassNames}>
                <nav>
                {props?.data.map((item, key) => (
                    <Link href={item.attributes.slug} key={key} >
                    <a className="text-lg font-medium ">
                    <li 
                    className={router.pathname === item.attributes.slug ? activeTabClassNames : tabClassNames} 
                    onClick={() => {setIsActive(item.attributes.menuTitle); handleToggle();}}
                    >
                        <SVG 
                            src={item.attributes.icon}
                            width={25}
                            height="auto" 
                        />
                        {item.attributes.menuTitle}
                    </li>
                    </a>
                </Link>
            ))}
                <Link href="/sign-out">
                    <a className="text-lg font-medium sm:hidden">
                        <li 
                            className={"flex items-center gap-3 p-3 rounded"} 
                            >
                            Sign Out
                        </li>
                    </a>
                </Link>
                </nav>
            </div>
        </>
            
    )
}
