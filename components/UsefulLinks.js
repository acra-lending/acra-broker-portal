function UsefulLinks ({ props }) {
    return (
        <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Useful Links</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {props?.data.map(item => (
                    <a 
                        href={item.attributes.url}
                        target="_blank"
                        key={item.id}
                        rel="noreferrer"
                    >
                        <img 
                            src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.previewImage.data[0].attributes.url}`}
                            alt={item.attributes.linkName}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default UsefulLinks;