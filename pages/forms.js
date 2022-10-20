import SideBar from "../components/SideBar";
import Navbar from '../components/NavBar'

function formsTable({menuItems, formsItems}) {
    return (
        <div className="relative w-full">
            <Navbar />
            <div className="md:flex relative">
                <SideBar props={menuItems}/>
                <div className="flex-1 p-10 text-2xl font-bold bg-slate-50 md:w-2/3 h-screen pt-32" >
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
                            {formsItems?.data.map((item, key) => (
                                
                            <tr key={key}>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{item.attributes.formTitle}</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"></td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                    <a href={item.attributes.pdfLink} target="_blank">Download</a>
                                </td>
                            </tr>
                            ))}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}

export async function getServerSideProps(context) {
    const [menuResponse, formsResponse] = await Promise.all([
      fetch('https://1532-70-183-23-147.ngrok.io/api/broker-portal-menu-items'),
      fetch('https://1532-70-183-23-147.ngrok.io/api/broker-portal-forms-and-requests-items')
    ]); 
  
      const [menuItems, formsItems] = await Promise.all([
        menuResponse.json(),
        formsResponse.json()
      ]);
      
      return { props: { menuItems, formsItems } };
  }

export default formsTable;
