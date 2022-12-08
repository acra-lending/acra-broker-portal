import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SideBar from "../components/SideBar";
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { fetcher } from "../lib/api";
import useSWR from "swr";
import {Grid} from "react-loader-spinner";

function FormsTable({menuItems, formsItems}) {

    const [isLoading, setIsLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLogged, setIsLogged] = useState();

    useEffect(() => {
        const router = useRouter();

        const fetchData = () => {
            setIsLoading(true);
            let token = localStorage.getItem('jwt');
    
            if(token) {
                setIsLogged(token);
                setIsLoading(false);
            } else {
                router.push('/')
            }
        }
        
        fetchData();

    }, [isLogged]);
    
    const URL = `https://api.acralending.com/api/broker-portal-forms-and-requests-items?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate=*`;
    
    const { data } = useSWR(URL,
        fetcher,
        {
            fallbackData: formsItems
        }
    );

    return (
        <div className="relative w-full">
            <Navbar />
            {isLoading ? (
                <div className="md:flex relative">
                <SideBar props={menuItems}/>
                    <div className="flex-1 p-10 text-2xl bg-slate-50 md:w-2/3 h-screen pt-32" >
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
                    </div>
                </div>
            ) : (
                <div className="md:flex relative">
                    <SideBar props={menuItems}/>
                    <div className="flex-1 p-10 text-2xl bg-slate-50 md:w-2/3 h-screen pt-32" >
                        <div className="relative rounded-xl overflow-auto">
                            <table className="border-collapse table-auto w-full text-sm">
                                <thead>
                                <tr>
                                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Filename</th>
                                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Download</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-slate-800">
                                {data.data.map((item, key) => (
                                    
                                <tr key={key}>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{item.attributes.formTitle}</td>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 pl-0">
                                        <a 
                                            href={`${process.env.NEXT_PUBLIC_API_URL}${item?.attributes?.pdf?.data[0]?.attributes.url}`} 
                                            className="hover:bg-gray-50 text-[#0033A1] font-medium py-2 px-4 border border-[#0033A1] hover:border-transparent rounded no-underline"
                                            target="_blank">
                                                Download
                                        </a>
                                    </td>
                                </tr>
                                ))}
                                </tbody>
                        </table>
                        <div className="flex justify-center mt-4 gap-4 pb-4">
                            <button
                            className={`inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                pageNumber === 1 ? 'bg-gray-300' : 'bg-white'
                            }`}
                            disabled={pageNumber === 1}
                            onClick={() => setPageNumber(pageNumber - 1)}
                            >
                            {' '}
                            Previous
                            </button>
                            <button
                            className={`inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                pageNumber === (data && data.meta.pagination.pageCount)
                                ? 'bg-gray-300'
                                : 'bg-white'
                            }`}
                            disabled={pageNumber === (data && data.meta.pagination.pageCount)}
                            onClick={() => setPageNumber(pageNumber + 1)}
                            >
                            Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        <Footer />
    </div>
    )
}

export async function getServerSideProps() {
    const [menuResponse, formsResponse] = await Promise.all([
      fetch(`${process.env.BASE_URL}/broker-portal-menu-items`),
      fetch(`${process.env.BASE_URL}/broker-portal-forms-and-requests-items?pagination[page]=1&pagination[pageSize]=8&populate=*`)
    ]); 
  
      const [menuItems, formsItems] = await Promise.all([
        menuResponse.json(),
        formsResponse.json()
      ]);
      
      return { props: { menuItems, formsItems } };
}

export default FormsTable;
