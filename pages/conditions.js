import SideBar from "../components/SideBar";

function conditionsUpload({menuItems}) {

    const reminderBulletPoints = [
        'Save each condition, individually, as a PDF document',
        'Label each PDF with the number noted on the Conditional Loan Approval',
        'Avoid uploading password protected documents through the portal',
        'Do not combine multiple conditions into on PDF'
    ];

    return (
        <div className="md:flex">

            <SideBar props={menuItems} />
            <div className="md:flex p-10 md:w-2/3 md:ml-20">
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
    )
}

export async function getServerSideProps(context) {
    // const response = await fetch('http://localhost:1337/api/acra-broker-portal-menu-items')
    // const data = await response.json()
    return {
        props: { menuItems: {
          "data": [
            {
              "id": 1,
              "attributes": {
                "slug": "/dashboard",
                "menuTitle": "Dashboard"
              }
            },
            {
              "id": 1,
              "attributes": {
                "slug": "/conditions",
                "menuTitle": "Conditions Upload"
              }
            },
            {
              "id": 1,
              "attributes": {
                "slug": "/forms",
                "menuTitle": "Forms & Requests"
              }
            },
            {
              "id": 1,
              "attributes": {
                "slug": "/processor-tips",
                "menuTitle": "Loan Processor Tips"
              }
            },
  
        ]} },
    };
  }

export default conditionsUpload;