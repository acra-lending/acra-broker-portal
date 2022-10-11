import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faArrowAltCircleUp  } from "@fortawesome/free-regular-svg-icons";
function SideBar () {
    return (
        <div className="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <ul className="flex flex-col gap-10 pt-4 h-screen bg-white p-2">
            <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faChartBar}/>
            <Link href="/#"><a className="text-lg font-medium ">DashBoard</a></Link>
            </li>
            <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faArrowAltCircleUp}/>
            <Link href="/#"><a className="text-lg font-medium ">Condition Upload</a></Link>
            </li>
            <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faChartBar}/>
            <Link href="/#"><a className="text-lg font-medium ">Forms & Requetst</a></Link>
            </li>
            <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faChartBar}/>
            <Link href="/#"><a className="text-lg font-medium ">Loan Processor Tips</a></Link>
            </li>
        </ul>
        </div>
    )
}

export default SideBar;