import React from "react";
import axios from 'axios';

export default function Confirm(props) {
  const next = (e) => {
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const submit = async (e) => {
    e.preventDefault();

    let form = {
      formName: 'Test Form<br/><br/>', 
      formData:{
        name: `${brokerId}<br/>`,
        email: 'test@gmail.com<br/>',
        message: 'Hello World'
      }
    }

    // Send it
    await axios({
      method: 'post',
      url: `http://localhost:1337/api/ezforms/submit`,
      data: form,
      headers: {
          'Content-Type': 'application/json'
      },
      }).then(response => {
      // actions taken when submission goes OK
      console.log(response)
      reset({})
      // setMessageSent(true)
      // setMessage(response.data.message)
      // setIsSuccessMessage(true)
      }).catch(error => {
      // actions taken when submission goes wrong
      // setMessageSent(true)
      // setMessage(error.message)
      // setIsSuccessMessage(false)
      console.log(error)
      })

      setTimeout(() => {next(); window.scrollTo(0,0) }, 4000);

  }

  const {
    values: { 
      brokerId,
      aeSelect,
      branchId,
      companyName,
      contactName,
      contactPhone,
      contactEmail,
      loanType,
      borrowerName,
      borrowerAddress,
      borrowerBusinessName,
      businessType,
      ownership,
      bankStatementType,
      explanation,
      loanAmount,
      appraisedValue,
      ltv,
     },
  } = props;

  // const ltvCalculator = (Number.parseFloat(loanAmount.replace(/,/g, '')) / Number.parseFloat(appraisedValue.replace(/,/g, ''))).toFixed(2);

  return (
    <>
      <h2 className="mb-5">Please confirm and submit</h2>
      <br/>
      <span className="block">Acra Broker ID or NMLS Number: {brokerId}</span>
      <span className="block">Acra Lending Account Executive: {aeSelect}</span>
      <span className="block">Branch NMLS ID Number: {branchId}</span>
      <span className="block">Company Name: {companyName}</span>
      <span className="block">Contact Name: {contactName}</span>
      <span className="block">Contact Phone: {contactPhone}</span>
      <span className="block">Contact Email: {contactEmail}</span>
      <span className="block">Loan Type: {loanType}</span>
      <span className="block">Borrower Name: {borrowerName}</span>
      <span className="block">Borrower's Mailing Address: {borrowerAddress}</span>
      <span className="block">Borrower's Self-Employment Business Name: {borrowerBusinessName}</span>
      <span className="block">Type of Business: {businessType}</span>
      <span className="block">Percentage of Ownership: {ownership}</span>
      <span className="block">Bank Statement Type: {bankStatementType}</span>
      <span className="block">Explanation of Non-Business, Payroll Deposits, etc.: {explanation}</span>
      <span className="block">Loan Amount: {loanAmount}</span>
      <span className="block">Appraised Value: {appraisedValue}</span>
      <span className="block">LTV: {ltv}</span>
      <div className="flex justify-between pt-4">
        <button className="btn" onClick={back}>
          Back
        </button>
        <button className="btn" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}
