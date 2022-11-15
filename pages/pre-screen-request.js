import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MultiStepForm from '../components/MultiStepForm/UserForm';
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { PrismaClient } from "@prisma/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faCreditCard, faFileInvoiceDollar, faLightbulb } from '@fortawesome/free-solid-svg-icons';
// import card from './'
const prisma = new PrismaClient();

function preScreenRequest ({ menuItems, aeList }) {
    const router = useRouter();

    const [isLogged, setIsLogged] = useState();

    const fetchData = () => {
        let token = localStorage.getItem('jwt');

        if(token) {
            setIsLogged(token);
        } else {
            router.push('/')
        }
    }

    useEffect(() => {
        
        fetchData();

    }, [isLogged]);


    return (
        <div className="relative w-full">
        <Navbar />
            <div className="md:flex static">
                <SideBar props={menuItems}/> 
                    <div className='flex flex-col lg:flex-row ml-8 mr-8 gap-12'>
                        <div className='w-full lg:w-1/3 mt-24 lg:mt-36 bg-preScreen flex flex-col items-center border'>
                            <div className="flex py-5 items-center w-full">
                                <div className="flex-grow h-px bg-white w-full ml-2"></div>
                                <span className='text-white text-center px-2 text-lg'>Instructions</span>
                                <div className="flex-grow h-px bg-white w-full mr-2"></div>
                            </div>                   
                           <div className='flex flex-col grow md:px-4'>
                                <div className='mb-[35px] bg-white rounded-lg border border-gray-200 shadow-md font-medium hover:bg-gray-100 transform hover:translate-y-[-5px] transition duration-500 ease-in-out'>
                                    <div className='text-center pt-4 pb-4'>
                                        <FontAwesomeIcon icon={faUserTie} size='2x' className='text-[#0033A1]'/>
                                    </div>
                                    <h5 className='text-center mb-[50px]'>Qualifying Criteria</h5>
                                    <p className='text-center text-sm mb-[25px]'>Self-Employed Borrowers Only</p>
                                    <p className='text-center text-sm'>Minimum (2) Years Self-Employment</p>
                                </div>
                                <div className='mb-[35px] bg-white rounded-lg border border-gray-200 shadow-md font-medium hover:bg-gray-100 transform hover:translate-y-[-5px] transition duration-500 ease-in-out'>
                                    <div className='text-center pt-4 pb-4'>
                                        <FontAwesomeIcon icon={faCreditCard} size='2x' className='text-[#0033A1]'/>
                                    </div>
                                    <h5 className='text-center mb-[25px]'>Credit Grades</h5>
                                    <p className='text-center text-sm mb-[25px]'>AAA to B</p>
                                    <p className='text-center text-sm mb-[25px]'>Individuals on the account must be a borrower on <br></br>loan</p>
                                </div>
                                <div className='mb-[35px] bg-white rounded-lg border border-gray-200 shadow-md font-medium hover:bg-gray-100 transform hover:translate-y-[-5px] transition duration-500 ease-in-out'>
                                    <div className='text-center pt-4 pb-4'>
                                        <FontAwesomeIcon icon={faFileInvoiceDollar} size='2x' className='text-[#0033A1]'/>
                                    </div>
                                    <h5 className='text-center mb-[25px]'>Most Recent</h5>
                                    <p className='text-center text-sm mb-[20px]'>12 or 24 months bank statements for <br></br>ONE ACCOUNT</p>
                                    <p className='text-center text-sm mb-0'>*Bank statements must be in English</p>
                                    <p className='text-center text-sm mb-[25px]'>*3 MBS not eligible for Pre-Screen Review</p>
                                </div>
                                <div className='mb-[35px] bg-white rounded-lg border border-gray-200 shadow-md font-medium hover:bg-gray-100 transform hover:translate-y-[-5px] transition duration-500 ease-in-out'>
                                    <div className='text-center pt-4 pb-4'>
                                        <FontAwesomeIcon icon={faLightbulb} size='2x' className='text-[#0033A1]'/>
                                    </div>
                                    <h5 className='text-center mb-[25px]'>Provide</h5>
                                    <p className='text-center text-sm mb-[25px]'>ALL pages of bank statements</p>
                                    <p className='text-center text-sm mb-[25px]'>Bank Statements with redacted info are not acceptable</p>
                                </div>
                           </div>
                        </div>
                        <div className="w-[95%] lg:w-2/3 mx-auto pt-24 md:pt-36">
                            <MultiStepForm aeList={aeList}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export async function getServerSideProps() {
    const response = await fetch(`${process.env.BASE_URL}/corr-portal-menu-items`)
    const users = await prisma.$queryRaw`SELECT * FROM role_user, s2zar_jsn_users WHERE role_user.role_id = 7 AND role_user.user_id = s2zar_jsn_users.id ORDER BY s2zar_jsn_users.firstname ASC`
    const data = await response.json()
    const rawAEList = JSON.stringify(users, (key, value) =>  (typeof value === 'bigint' ? value.toString() : value))
    const aeList = JSON.parse(rawAEList)
    return {
        props: { 
            menuItems: data, aeList 
        },
    };
}

export default preScreenRequest;