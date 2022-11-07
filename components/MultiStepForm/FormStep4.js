import React from "react";

export default function FormStep4(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, setLoanAmount, setAppraisedValue, setLtv } = props;


  const ltvCalculator = (e) => {
    setLtv((Number.parseFloat(values.loanAmount.replace(/,/g, '')) / Number.parseFloat(values.appraisedValue.replace(/,/g, ''))).toFixed(2));

  }


  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");


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
          id="loanAmount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          // onChange={handleChange("loanAmount")}
          onChange={event => setLoanAmount(addCommas(removeNonNumeric(event.target.value)))}
          // defaultValue={values.loanAmount}
          value={values.loanAmount}
        />
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
          id="appraisedValue"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          // onChange={handleChange("appraisedValue")}
          onChange={event => setAppraisedValue(addCommas(removeNonNumeric(event.target.value)))}
          // defaultValue={values.appraisedValue}
          value={values.appraisedValue}
        />
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // onChange={handleChange("ltv")}
          onFocus={ltvCalculator}
          value={values.ltv}
        />
      </div>
      <div className="flex justify-between pt-4">
        <button className="btn" onClick={back}>
          Back
        </button>
        <button className="btn" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}
