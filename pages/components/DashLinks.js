function DashLinks () {
    const dashBoardItems = [
        'Cutoff Dates',
        'Turn Times',
        'Loan Processor Tips',
        'Pre-Screen Request',
        'Conditions',
        ' Upload',
        'Forms & Requests',
        'Wholesale File',
        'Seller’s Guide'
    ];
    return (
        <>
            {dashBoardItems.map((item, key) => (
                <div key={key} className="flex justify-center items-center break-normal font-medium text-lg border-1 rounded-xl p-6 bg-white drop-shadow-xl">{item}</div>
            ))}
        </>
    )
}

export default DashLinks;