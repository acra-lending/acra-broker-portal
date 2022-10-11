function DashBoard () {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3 pt-4">
            {dashBoardItems.map((item, key) => (
                <div key={key} class="flex justify-center items-center border-1 rounded-xl p-6 bg-white drop-shadow-xl">{item}</div>
            ))}
        </div>
    )
}

export default DashBoard;