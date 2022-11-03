import SideBar from "../components/SideBar";
import Navbar from '../components/NavBar'


function wholesaleUpload({menuItems}) {

    const reminderBulletPoints = [
        'Save each condition, individually, as a PDF document',
        'Label each PDF with the number noted on the Conditional Loan Approval',
        'Avoid uploading password protected documents through the portal',
        'Do not combine multiple conditions into on PDF'
    ];

    return (
        <div className="relative w-full">
            <Navbar />
            <div className="md:flex relative">
                <SideBar props={menuItems} />
                <div className="md:flex p-10 md:w-2/3 md:ml-20 pt-32">
                    <iframe className="md:w-8/12 w-full aspect-video min-h-[510px]" src="https://acralending.com/box-api/box-wholesale-upload.html"></iframe>
                    <div className="md:w-4/12 w-full pt-8 md:pt-0 md:pl-8">
                        <h2 className="font-medium">Reminder:</h2>
                        <ul className="font-normal text-base mt-2 list-disc">
                            {reminderBulletPoints.map((point, key) => (
                                <li key={key} className="pb-4">{point}</li>
                            ))}
                        </ul>
                        <h3 className="text-base">
                            <mark>
                                EXAMPLE: If you have 10 conditions, we need 10 LEGIBLE PDF documents
                            </mark>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.BASE_URL}/broker-portal-menu-items`)
    const data = await response.json()
    return {
        props: { menuItems: data },
    };
  }

export default wholesaleUpload;