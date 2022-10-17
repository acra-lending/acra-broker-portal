import SideBar from "./SideBar";
function formsTable({menuItems}) {
    console.log(menuItems)
    return (
        <div className="md:flex">
            <SideBar props={menuItems}/>
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
        </div>
    )
}
export default formsTable;
export async function getServerSideProps(context) {
    const response = await fetch('http://localhost:1337/api/acra-broker-portal-menu-items')
    const data = await response.json()
    return {
        props: { menuItems: data },
    };
  }