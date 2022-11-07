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
      <h1>Borrower Details</h1>
      <div className="input-field">
      <label htmlFor="loanType">Loan Type *</label>
        <select
          id="loanType"
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
        <label htmlFor="borrowerName">Borrower Name *</label>
        <input
          type="text"
          id="borrowerName"
          onChange={handleChange("borrowerName")}
          defaultValue={values.borrowerName}
        />
      </div>
      <div className="input-field">
        <label htmlFor="borrowerAddress">Borrower's Mailing Address *</label>
        <input
          type="text"
          id="borrowerAddress"
          onChange={handleChange("borrowerAddress")}
          defaultValue={values.borrowerAddress}
        />
      </div>
      <div className="input-field">
        <label htmlFor="borrowerBusinessName">Borrower's Self-Employment Business Name *</label>
        <input
          type="text"
          id="borrowerBusinessName"
          onChange={handleChange("borrowerBusinessName")}
          defaultValue={values.borrowerBusinessName}
        />
      </div>
      <div className="input-field">
        <label htmlFor="businessType">Type of Business *</label>
        <input
          type="text"
          id="businessType"
          onChange={handleChange("businessType")}
          defaultValue={values.businessType}
        />
      </div>
      <div className="input-field">
        <label htmlFor="ownership">Percentage of Onwership *</label>
        <input
          type="text"
          id="ownership"
          onChange={handleChange("ownership")}
          defaultValue={values.ownership}
        />
      </div>
      <label htmlFor="bankStatementType">Bank Statement Type *</label>
        <select
          id="bankStatementType"
          onChange={handleChange("bankStatementType")}
          defaultValue={values.bankStatementType}
        >
          <option value="" disabled>---</option>
          {bankStatementType.map(bankStatementType => (
            <option value={bankStatementType}>{bankStatementType}</option>

          ))}
        </select>
        <div className="input-field">
        <label htmlFor="explanation">Explanation of Non-Business, Payroll Deposits, etc. *</label>
        <textarea
          id="explanation"
          rows="3"
          cols="40"
          onChange={handleChange("explanation")}
          defaultValue={values.explanation}
        ></textarea>
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
