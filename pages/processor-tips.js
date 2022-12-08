import { useState, useEffect } from 'react';
import Router from 'next/router';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SideBar from '../components/SideBar';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import formatPhoneNumber from '../lib/phoneFormatter.js';
import {Grid} from "react-loader-spinner";

function ProcessorTips({menuItems, contactPoints, processorTipsItems}) {

    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('1');
    const [isLogged, setIsLogged] = useState();

    useEffect(() => {
      
      const fetchData = () => {
        setIsLoading(true);
        let token = localStorage.getItem('jwt');

        if(token) {
            setIsLoading(false);
            setIsLogged(token);
        } else {
            Router.push('/')
        }
      }
        
        fetchData();

    }, [isLogged]);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className="relative w-full">
      <Navbar />
      {isLoading ? (
        <div className='md:flex relative'>
        <SideBar props={menuItems} />
          <div className="flex-1 p-10 text-2xl font-bold bg-slate-50 md:w-2/3 pt-32">
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
        <div className='md:flex relative'>
          <SideBar props={menuItems} />
          <div className="flex-1 p-10 text-2xl font-bold bg-slate-50 md:w-2/3 pt-32">
            <div className="relative rounded-xl overflow-auto">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Essential Contact Points
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                  {contactPoints?.data.map(item => (
                  <tr key={item.id}>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      {item.attributes.contactName}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {item.attributes.position}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      <a href={'tel:' + item.attributes.phoneNumber + ',363'}>
                        {formatPhoneNumber(item.attributes.phoneNumber)}
                      </a>
                      {' ' + item.attributes.ext}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {item.attributes.email}
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
              <p className='text-slate-500 dark:text-slate-400 text-base pl-8 pt-8 pb-8'>
                        Loss Payee Clause<br></br>
                        Citadel Servicing Corporation ISAOA<br></br>
                        25531 Commercentre Drive, Suite 160<br></br>
                        Lake Forest, CA 92630<br></br>
                        Loan #:
                      </p>
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="File Flow" value="1" />
                  <Tab label="Underwriting" value="2" />
                  <Tab label="CD/Closing" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <table className="border-collapse table-auto w-full text-sm">
                    <thead>
                    <tr>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Filename</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Download</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800">
              {processorTipsItems?.data.map(item => (
                item.attributes.category === 'File Flow' && (
                <tr key={item.id}>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{item.attributes.formTitle}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 pl-0">
                          <a 
                            target="_blank"
                            rel="noreferrer"
                            href={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.pdf.data[0].attributes.url}`}
                            className="hover:bg-gray-50 text-[#0033A1] font-medium py-2 px-4 border border-[#0033A1] hover:border-transparent rounded no-underline"
                          >
                            Download
                            </a>
                         
                        </td>
                    </tr>
                )
              ))}
                   
                    </tbody>
                </table>
              </TabPanel>
              <TabPanel value="2">
              <table className="border-collapse table-auto w-full text-sm">
                  <thead>
                  <tr>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Filename</th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Download</th>
                  </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800">
                    {processorTipsItems?.data.map(item => (
                      item.attributes.category === 'Underwriting' && (
                        <tr key={item.id}>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{item.attributes.formTitle}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 pl-0">
                              <a 
                                target="_blank"
                                rel="noreferrer"
                                href={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.pdf.data[0].attributes.url}`}
                                className="hover:bg-gray-50 text-[#0033A1] font-medium py-2 px-4 border border-[#0033A1] hover:border-transparent rounded no-underline"
                              >
                                 Download
                              </a>
                            </td>
                        </tr>
                      )
                    ))}
                  
                  </tbody>
              </table>
              </TabPanel>
              <TabPanel value="3">
              <table className="border-collapse table-auto w-full text-sm">
                  <thead>
                  <tr>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Filename</th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                      <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Download</th>
                  </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800">
                    {processorTipsItems?.data.map(item => (
                      item.attributes.category === 'Closing' && (
                        <tr key={item.id}>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{item.attributes.formTitle}</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 pl-0">
                              <a 
                                target="_blank"
                                rel="noreferrer"
                                href={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.pdf.data[0].attributes.url}`}
                                className="hover:bg-gray-50 text-[#0033A1] font-medium py-2 px-4 border border-[#0033A1] hover:border-transparent rounded no-underline"
                              >
                                Download
                              </a>
                            </td>
                        </tr>
                      )
                    ))}
                  </tbody>
              </table>
              </TabPanel>
            </TabContext>
          </Box>
      </div>
      </div>
    </div>

      )}
    <Footer />
</div>
  );
}

export async function getServerSideProps() {
  const [menuResponse, contactPointsResponse, processorTipsItemsResponse] = await Promise.all([
    fetch(`${process.env.BASE_URL}/broker-portal-menu-items`),
    fetch(`${process.env.BASE_URL}/broker-portal-processor-tips-contacts`),
    fetch(`${process.env.BASE_URL}/broker-portal-processor-tips-items?populate=*`)
  ]); 

    const [menuItems, contactPoints, processorTipsItems] = await Promise.all([
      menuResponse.json(),
      contactPointsResponse.json(),
      processorTipsItemsResponse.json()
    ]);
    
    return { props: { menuItems, contactPoints, processorTipsItems } };
}


export default ProcessorTips;
