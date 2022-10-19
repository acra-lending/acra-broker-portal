import SVG from 'react-inlinesvg';

function DashLinks ({ props }) {
    console.log(props.data.map((item, key) => item))
    const dashBoardItems = [
        'Cutoff Dates',
        'Turn Times',
        'Loan Processor Tips',
        'Pre-Screen Request',
        'Conditions',
        'Upload',
        'Forms & Requests',
        'Wholesale File',
        'Seller’s Guide'
    ];
    return (
        <div className="max-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 pt-4">
            {props?.data.map((item, key) => (
                <div key={key} className="grid grid-cols-2 bg-white border-1 rounded-xl drop-shadow-lg justify-center ">
                    <div className='flex justify-center items-center '>
                        <SVG 
                            src={item.attributes.icon}
                            width={35}
                        />
                    </div>
                    <div 
                        className="flex justify-center items-center break-normal font-medium text-lg p-6">
                            {item.attributes.title}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DashLinks;