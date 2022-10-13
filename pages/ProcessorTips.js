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
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <p>
                  Loss Payee Clause<br></br>
                  Citadel Servicing Corporation ISAOA<br></br>
                  25531 Commercentre Drive, Suite 160<br></br>
                  Lake Forest, CA 92630<br></br>
                  Loan #:
                </p>
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"></td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"></td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <Tabs>
        <TabList className="flex cursor-pointer">
          <Tab>
            <div className="relative rounded-xl overflow-auto">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      File Flows
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                  </tr>
                </thead>
              </table>
            </div>
          </Tab>
          <Tab>
          <div className="relative rounded-xl overflow-auto">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Underwriting
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                  </tr>
                </thead>
              </table>
            </div>
          </Tab>
          <Tab>
          <div className="relative rounded-xl overflow-auto">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      CD/Closing
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                  </tr>
                </thead>
              </table>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="relative rounded-xl overflow-auto">
            <table className="border-collapse table-auto w-full text-sm">
              <tbody className="bg-white dark:bg-slate-800">
              <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">BPO Ordering Policy & Procedure</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Broker Package Addendum</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Rework Request Form</td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Settlement Agent Fee</td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Business Purpose Attestation</td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel>
        <div className="relative rounded-xl overflow-auto">
            <table className="border-collapse table-auto w-full text-sm">
              <tbody className="bg-white dark:bg-slate-800">
              <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">BPO Ordering Policy & Procedure</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Broker Package Addendum</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Rework Request Form</td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Settlement Agent Fee</td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Business Purpose Attestation</td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="relative rounded-xl overflow-auto">
            <table className="border-collapse table-auto w-full text-sm">
              <tbody className="bg-white dark:bg-slate-800">
              <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">BPO Ordering Policy & Procedure</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Broker Package Addendum</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Rework Request Form</td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Settlement Agent Fee</td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400"></td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">Download</td>
            </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs> */}
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
