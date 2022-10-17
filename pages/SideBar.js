import Link from "next/link";
import { useState } from "react";
import AcraLogo from '../public/AcraLogo.png';
import Image from "next/image";
export default function SideBar ({ props }) {
    console.log(props);
    const [isMobile, setMobile] = useState(false);
    const [isActive, setIsActive] = useState(props.data[0].attributes.menuTitle);
    
    const handleToggle = () => {
        setMobile(!isMobile);
    }
    
    console.log(isActive)
    
    const sideBarDeskTopClassNames = 'h-screen min-w-fit bg-white w-64 z-10 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r shadow-md';
    const sideBarMobileClassNames = 'bg-white w-64 z-10 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out border-r shadow-md';
    
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
                {props.data?.map((item, key) => (
                    <Link href={item.attributes.slug} key={key} >
                    <a className="text-lg font-medium ">
                    <li 
                    className={isActive === item.attributes.menuTitle ? "flex items-center gap-3 bg-[#0033A1] text-white p-3 rounded" : "flex items-center gap-3 p-3 rounded"} 
                    onClick={() => {setIsActive(item.attributes.menuTitle); handleToggle();}}
                    >
                        {/* <img>
                            {item.attributes.icon}
                        </img> */}
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
