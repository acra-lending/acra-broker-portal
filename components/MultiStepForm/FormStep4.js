import React from "react";
import { useState } from "react";
import validator from "validator";

export default function FormStep4(props) {
  const next = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.loanAmount) || 
      validator.isEmpty(values.appraisedValue) 
      ) {
        setError(true)
      } else {
        props.nextStep();
    }
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, setLoanAmount, setAppraisedValue, setLtv } = props;
  const [error, setError] = useState(false);


  const ltvCalculator = (e) => {
    setLtv((Number.parseFloat(values.loanAmount.replace(/,/g, '')) / Number.parseFloat(values.appraisedValue.replace(/,/g, ''))).toFixed(2));

  }


  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

  const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2";
  const errorInputClass = "bg-gray-50 border-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2";

  return (
    <>
      <h2 className="mb-5">Loan Details</h2>
      <div className="input-field">
      {/* <input type="text" value={loanAmount} onInput={handleChange} /> */}


        <label 
          htmlFor="loanAmount"
          className="block mb-2 text-sm font-medium text-gray-900"  
        >
            Loan Amount * $
        </label>
        <input
          type="text"
          required
          id="loanAmount"
          className={error ? errorInputClass : inputClass}
          // onChange={handleChange("loanAmount")}
          onChange={event => setLoanAmount(addCommas(removeNonNumeric(event.target.value)))}
          // defaultValue={values.loanAmount}
          defaultValue={values.loanAmount}
        />
        {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      }
      </div>
      <div className="input-field">
        <label 
          htmlFor="appraisedValue"
          className="block mb-2 text-sm font-medium text-gray-900"  
        >
            Appraised Value * $
        </label>
        <input
          type="text"
          required
          id="appraisedValue"
          className={error ? errorInputClass : inputClass}
          // onChange={handleChange("appraisedValue")}
          onChange={event => setAppraisedValue(addCommas(removeNonNumeric(event.target.value)))}
          // defaultValue={values.appraisedValue}
          defaultValue={values.appraisedValue}
        />
        {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      }
      </div>
      <div className="input-field">
        <label 
          htmlFor="ltv"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            LTV (click to auto-calculate)
        </label>
        <input
          type="text"
          id="ltv"
          className={inputClass}
          // onChange={handleChange("ltv")}
          onFocus={ltvCalculator}
          defaultValue={values.ltv}
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
