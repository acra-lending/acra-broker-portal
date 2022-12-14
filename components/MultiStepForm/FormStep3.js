import React from "react";
// import { useState } from "react";
// import validator from "validator";
export default function FormStep3(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
    // if (
    //   validator.isEmpty(values.loanType) || 
    //   validator.isEmpty(values.borrowerName) ||
    //   validator.isEmpty(values.borrowerAddress) || 
    //   validator.isEmpty(values.borrowerBusinessName) ||
    //   validator.isEmpty(values.businessType) || 
    //   validator.isEmpty(values.ownership) || 
    //   validator.isEmpty(values.bankStatementType) || 
    //   validator.isEmpty(values.explanation)
    //   ) {
    //     setError(true)
    //   } else {
    //     props.nextStep();
    // }
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;
  // const [error, setError] = useState(false);

  const loanType = [
    'Purchase',
    'Refinance',
  ]

  const bankStatementType = [
    'Personal Bank Statement',
    'Business Bank Statement',
    'Personal Bank Statement used for Business Purpose',
  ]

  const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2";
  // const errorInputClass = "bg-gray-50 border-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2";
  
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
          required
          className={inputClass}
          onChange={handleChange("loanType")}
          defaultValue={values.loanType}
        >
          <option value="" disabled>---</option>
          {loanType.map((loanType, i) => (
            <option 
              key={i}
              value={loanType}>
                {loanType}
            </option>

          ))}
        </select>
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
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
          required
          id="borrowerName"
          className={inputClass}
          onChange={handleChange("borrowerName")}
          defaultValue={values.borrowerName}
        />
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
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
          required
          id="borrowerAddress"
          className={inputClass}
          onChange={handleChange("borrowerAddress")}
          defaultValue={values.borrowerAddress}
        />
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
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
          required
          id="borrowerBusinessName"
          className={inputClass}
          onChange={handleChange("borrowerBusinessName")}
          defaultValue={values.borrowerBusinessName}
        />
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
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
          required
          id="businessType"
          className={inputClass}
          onChange={handleChange("businessType")}
          defaultValue={values.businessType}
        />
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
      </div>
      <div className="input-field">
        <label 
          htmlFor="ownership"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Percentage of Ownership *
        </label>
        <input
          type="text"
          required
          id="ownership"
          className={inputClass}
          onChange={handleChange("ownership")}
          defaultValue={values.ownership}
        />
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
      </div>
      <label 
        htmlFor="bankStatementType"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
          Bank Statement Type *
      </label>
        <select
          id="bankStatementType"
          required
          className={inputClass}
          onChange={handleChange("bankStatementType")}
          defaultValue={values.bankStatementType}
        >
          <option value="" disabled>---</option>
          {bankStatementType.map((bankStatementType, i) => (
            <option 
              key={i}
              value={bankStatementType}>
                {bankStatementType}
            </option>

          ))}
        </select>
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
        <div className="input-field">
        <label 
          htmlFor="explanation"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Explanation of Non-Business, Payroll Deposits, etc. *
        </label>
        <textarea
          id="explanation"
          required
          rows="3"
          cols="40"
          onChange={handleChange("explanation")}
          className={inputClass}
          defaultValue={values.explanation}
        ></textarea>
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
      </div>
      <div className="flex justify-between pt-4">
      <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" onClick={back}>
          Back
        </button>
        {!values.loanType || !values.borrowerName || !values.borrowerAddress || !values.borrowerBusinessName || !values.businessType || !values.ownership || !values.bankStatementType || !values.explanation ? (
          <button 
            disabled
            className="text-white bg-[#0033A1] hover:bg-blue-800 disabled:opacity-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={next}
          >
            Next
          </button>
        ) : (
          <button className="text-white bg-[#0033A1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={next}>
            Next
          </button>
        )
      }
      </div>
    </>
  );
}