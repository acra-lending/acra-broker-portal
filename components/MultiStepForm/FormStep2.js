import React from "react";

export default function FormStep2(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;
  return (
    <>
      <h2 className="mb-5">Broker Details</h2>
      <div className="input-field">
        <label 
          htmlFor="branchId"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Branch NMLS ID Number *
        </label>
        <input
          type="text"
          id="branchId"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("branchId")}
          defaultValue={values.branchId}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="companyName"
          className="block mb-2 text-sm font-medium text-gray-900"  
        >
            Company Name *
        </label>
        <input
          type="text"
          id="companyName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("companyName")}
          defaultValue={values.companyName}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="contactName"
          className="block mb-2 text-sm font-medium text-gray-900"  
        >
            Contact Name *
        </label>
        <input
          type="text"
          id="contactName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("contactName")}
          defaultValue={values.contactName}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="contactPhone"
          className="block mb-2 text-sm font-medium text-gray-900"  
        >
            Contact Phone *
        </label>
        <input
          type="text"
          id="contactPhone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("contactPhone")}
          defaultValue={values.contactPhone}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="contactEmail"
          className="block mb-2 text-sm font-medium text-gray-900"    
        >
            Contact Email *
        </label>
        <input
          type="email"
          id="contactEmail"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleChange("contactEmail")}
          defaultValue={values.contactEmail}
        />
      </div>
      <div className="flex justify-between pt-4">
        <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" onClick={back}>
          Back
        </button>
        <button className="text-white bg-[#0033A1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}
