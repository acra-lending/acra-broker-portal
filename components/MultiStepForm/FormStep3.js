import React from "react";

export default function FormStep3(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  const loanType = [
    'Purchase',
    'Refinance',
  ]

  const bankStatementType = [
    'Personal Bank Statement',
    'Business Bank Statement',
    'Personal Bank Statement used for Business Purpose',
  ]

  return (
    <>
      <h2 className="mb-5">Borrower Details</h2>
      <div className="input-field">
      <label 
        htmlFor="loanType"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
          Loan Type *
      </label>
        <select
          id="loanType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("loanType")}
          defaultValue={values.loanType}
        >
          <option value="" disabled>---</option>
          {loanType.map(loanType => (
            <option value={loanType}>{loanType}</option>

          ))}
        </select>
      </div>
      <div className="input-field">
        <label 
          htmlFor="borrowerName"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Borrower Name *
        </label>
        <input
          type="text"
          id="borrowerName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("borrowerName")}
          defaultValue={values.borrowerName}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="borrowerAddress"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Borrower's Mailing Address *
        </label>
        <input
          type="text"
          id="borrowerAddress"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("borrowerAddress")}
          defaultValue={values.borrowerAddress}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="borrowerBusinessName"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Borrower's Self-Employment Business Name *
        </label>
        <input
          type="text"
          id="borrowerBusinessName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("borrowerBusinessName")}
          defaultValue={values.borrowerBusinessName}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="businessType"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Type of Business *
        </label>
        <input
          type="text"
          id="businessType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("businessType")}
          defaultValue={values.businessType}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="ownership"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Percentage of Onwership *
        </label>
        <input
          type="text"
          id="ownership"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("ownership")}
          defaultValue={values.ownership}
        />
      </div>
      <label 
        htmlFor="bankStatementType"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
          Bank Statement Type *
      </label>
        <select
          id="bankStatementType"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("bankStatementType")}
          defaultValue={values.bankStatementType}
        >
          <option value="" disabled>---</option>
          {bankStatementType.map(bankStatementType => (
            <option value={bankStatementType}>{bankStatementType}</option>

          ))}
        </select>
        <div className="input-field">
        <label 
          htmlFor="explanation"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Explanation of Non-Business, Payroll Deposits, etc. *
        </label>
        <textarea
          id="explanation"
          rows="3"
          cols="40"
          onChange={handleChange("explanation")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          defaultValue={values.explanation}
        ></textarea>
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
