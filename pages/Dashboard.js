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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-3 pt-4 mx-auto my-0">
            {dashBoardItems.map((item, key) => (
                <div key={key} class="flex justify-center items-center border-1 rounded-xl p-6 bg-white drop-shadow-xl">{item}</div>
            ))}
        </div>
    )
}

export default DashBoard;