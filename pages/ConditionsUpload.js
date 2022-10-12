function ConditionsUpload() {
    const reminderBulletPoints = [
        'Save each condition, individually, as a PDF document',
        'Label each PDF with the number noted on the Conditional Loan Approval',
        'Avoid uploading password protected documents through the portal',
        'Do not combine multiple conditions into on PDF'
    ];

    return (
        <div className="md:flex">
            <iframe class="md:w-8/12 w-full aspect-video min-h-[510px]" src="https://acralending.com/box-api/box-wholesale-upload.html"></iframe>
            <div className="md:w-4/12 w-full pt-8 md:pt-0 md:pl-8">
                <h2 className="font-medium">Reminder:</h2>
                <ul className="font-normal text-base mt-2 list-disc">
                    {reminderBulletPoints.map((point, key) => (
                        <li key={key} className="pb-4">{point}</li>
                    ))}
                </ul>
                <h3 className="text-base"><mark>EXAMPLE: If you have 10 conditions, we need 10 LEGIBLE PDF documents</mark></h3>
            </div>
        </div>
    )
}

export default ConditionsUpload;