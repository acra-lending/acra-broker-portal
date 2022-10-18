function DashLinks () {
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
            {dashBoardItems.map((item, key) => (
                <div key={key} className="flex justify-center items-center break-normal font-medium text-lg border-1 rounded-xl p-6 bg-white drop-shadow-xl">{item}</div>
            ))}
        </div>
    )
}

export default DashLinks;