// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
function processorTips() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
    <>
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
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                Trisa Nelson
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                Director Of Operations
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                xxx-xxx-xxxx
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                email@email.com
              </td>
            </tr>
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                Trisa Nelson
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                Director Of Operations
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                xxx-xxx-xxxx
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                email@email.com
              </td>
            </tr>
          </tbody>
        </table>
        <p className='text-slate-500 dark:text-slate-400 text-base pl-8 pt-8'>
                  Loss Payee Clause<br></br>
                  Citadel Servicing Corporation ISAOA<br></br>
                  25531 Commercentre Drive, Suite 160<br></br>
                  Lake Forest, CA 92630<br></br>
                  Loan #:
                </p>
      </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="File Flows" value="1" />
            <Tab label="Underwriting" value="2" />
            <Tab label="CD/Closing" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">File Flows</TabPanel>
        <TabPanel value="2">Underwriting</TabPanel>
        <TabPanel value="3">CD/Closing</TabPanel>
      </TabContext>
    </Box>
    </>
  );
}

export default processorTips;
