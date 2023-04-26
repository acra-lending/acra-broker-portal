import { useState, useEffect } from 'react';
import Router from 'next/router';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SideBar from '../components/SideBar';
import Navbar from '../components/NavBar'
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
          <div className="flex-1 lg:p-10 lg:pt-28 text-2xl font-bold bg-slate-50 md:w-2/3 md:pt-28 sm:pt-4 sm:p-2">
            <div className="relative rounded-xl sm:pb-20">
              <h6 className="px-4 pb-2 w-full">Essential Contact Points</h6>
                <div className="md:flex content-center flex-wrap -mx-2 p-3">
                  {contactPoints?.data.map(item => (
                    <div key={item.id}className="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
                      <div className="md:flex-1 p-4 rounded shadow bg-white border-b border-r border-grey-dark">
                        <h4 className="mb-2 font-bold tracking-tight text-slate-800 dark:text-slate-400">
                          {item.attributes.contactName}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.attributes.position}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          <a href={'tel:' + item.attributes.phoneNumber + ',363'} className="text-sm text-slate-500 dark:text-slate-400">
                            {formatPhoneNumber(item.attributes.phoneNumber)}
                          </a>
                          {' ' + item.attributes.ext}</p>
                          <a className="text-sm text-slate-500 dark:text-slate-400 no-underline" href={'mailto:' + item.attributes.email}>
                            {item.attributes.email}
                          </a>
                      </div>
                    </div>
                  ))}

                  <div className="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
                    <div className="md:flex-1 p-4 rounded shadow bg-white border-b border-r border-grey-dark">
                      <h4 className="mb-2 font-bold tracking-tight text-slate-800 dark:text-slate-400">
                        Loss Payee Clause
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Citadel Servicing Corporation dba Acra Lending<br/>
                        3 Ada Parkway<br/>
                        Suite 200A<br/>
                        Irvine, CA 92618<br/>
                        Loan #:
                      </p>
                    </div>
                  </div>
                </div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="File Flow" value="1" />
                      <Tab label="Underwriting" value="2" />
                      <Tab label="CD/Closing" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1" sx={{ paddingLeft: '4px', paddingRight: '4px' }}>
                    <table className="border-collapse table-fixed w-full text-sm">
                        <thead>
                        <tr>
                            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">Filename</th>
                            <th className="border-b dark:border-slate-600 font-medium pl-11 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">Download</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800">
                        {processorTipsItems?.data.map(item => (
                          item.attributes.category === 'File Flow' && (
                            <tr key={item.id}>
                              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{item.attributes.formTitle}</td>
                              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-500 pl-0">
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
                  <TabPanel value="2" sx={{ paddingLeft: '4px', paddingRight: '4px' }}>
                  <table className="border-collapse table-fixed w-full text-sm">
                      <thead>
                      <tr>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">Filename</th>
                          <th className="border-b dark:border-slate-600 font-medium pl-11 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">Download</th>
                      </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800">
                        {processorTipsItems?.data.map(item => (
                          item.attributes.category === 'Underwriting' && (
                            <tr key={item.id}>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{item.attributes.formTitle}</td>
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
                  <TabPanel value="3" sx={{ paddingLeft: '4px', paddingRight: '4px' }}>
                  <table className="border-collapse table-fixed w-full text-sm">
                      <thead>
                      <tr>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">Filename</th>
                          <th className="border-b dark:border-slate-600 font-medium pl-11 pt-0 pb-3 text-slate-600 dark:text-slate-500 text-left">Download</th>
                      </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800">
                        {processorTipsItems?.data.map(item => (
                          item.attributes.category === 'Closing' && (
                            <tr key={item.id}>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{item.attributes.formTitle}</td>
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
