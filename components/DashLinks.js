import SVG from 'react-inlinesvg';
import Link from 'next/link';
function DashLinks ({ props }) {
    props?.data.map((item, key) => console.log(item))
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-3 pt-4">
            {props?.data.map(item => (
                <Link
                    key={item.id} 
                    href={item.attributes?.file?.data ? `https://068c-107-194-134-60.ngrok.io${item.attributes.file.data.attributes.url}` : item.attributes.link}
                >
                    <a>
                        <div className="flex items-center justify-center hover:scale-105 gap-3 cursor-pointer break-normal font-medium text-lg p-6 bg-white border-1 rounded-xl drop-shadow-lg">
                            <SVG 
                                src={item.attributes.icon}
                                width={35}
                            />
                            {item.attributes.title}
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default DashLinks;