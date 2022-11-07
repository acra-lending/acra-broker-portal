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
      <h1>Loan Details</h1>
      <div className="input-field">
      {/* <input type="text" value={loanAmount} onInput={handleChange} /> */}


        <label htmlFor="loanAmount">Loan Amount * $</label>
        <input
          type="text"
          id="loanAmount"
          // onChange={handleChange("loanAmount")}
          onChange={event => setLoanAmount(addCommas(removeNonNumeric(event.target.value)))}
          // defaultValue={values.loanAmount}
          value={values.loanAmount}
        />
      </div>
      <div className="input-field">
        <label htmlFor="appraisedValue">Appraised Value * $</label>
        <input
          type="text"
          id="appraisedValue"
          // onChange={handleChange("appraisedValue")}
          onChange={event => setAppraisedValue(addCommas(removeNonNumeric(event.target.value)))}
          // defaultValue={values.appraisedValue}
          value={values.appraisedValue}
        />
      </div>
      <div className="input-field">
        <label htmlFor="ltv">LTV (click to auto-calculate)</label>
        <input
          type="text"
          id="ltv"
          // onChange={handleChange("ltv")}
          onFocus={ltvCalculator}
          value={values.ltv}
        />
      </div>
      <div>
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
