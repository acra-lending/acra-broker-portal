import SVG from 'react-inlinesvg';
import Link from 'next/link';
function DashLinks ({ props }) {
    return (
        <div className="max-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-3 pt-4">
            {props?.data.map((item, key) => (
                <Link
                    key={key} 
                    href={item.attributes.link}
                >
                    <a target='_blank'>
                        <div className="flex items-center justify-center gap-3 cursor-pointer break-normal font-medium text-lg p-6 bg-white border-1 rounded-xl drop-shadow-lg">
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