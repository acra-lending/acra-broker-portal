// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import Navbar from '../components/NavBar'
import formatPhoneNumber from '../lib/phoneFormatter.js';
import Link from 'next/link';


function processorTips({menuItems, contactPoints, processorTipsItems}) {
    const [value, setValue] = useState('1');
    console.log(processorTipsItems)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    // console.log(process.env.PDF_BASE_URL);
    // console.log(process.env.BASE_URL);
    return (
      <div className="relative w-full">
      <Navbar />
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
                      <a href={'tel:' + item.attributes.phoneNumber}>
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
                  <Tab label="File Flows" value="1" />
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
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                          <a 
                            target="_blank"
                            href={`https://b71a-107-194-134-60.ngrok.io${item.attributes.pdf.data[0].attributes.url}`}
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
                  <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Cond 4503 Vetting Training</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
                  </tr>
                  <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Vetting Review</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
                  </tr>
                  <tr>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Cond 4503 - Secure Insight Registration</td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
                  </tr>
                  <tr>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Secure Insights - Acra's Agents List</td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
                  </tr>
                  <tr>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Interest Only Calculator</td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
                  </tr>
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
                  <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Taxing Nuances</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
                  </tr>
                  <tr>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Subject Property FAQ Feb 2019</td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
                  </tr>
                  <tr>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Seller Credit Apr 2019</td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
                  </tr>
                  </tbody>
              </table>
              </TabPanel>
            </TabContext>
          </Box>
      </div>
      </div>
    </div>
</div>
  );
}

// export async function getServerSideProps(context) {
//   const [response] = await fetch(`${process.env.BASE_URL}/broker-portal-menu-items`)
//     const data = await response.json()
//     return {
//         props: { menuItems: data },
//     };
// }
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


export default processorTips;
