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
      <h1>Please confirm and submit</h1>
      <br/>
      <span>Acra Broker ID or NMLS Number: {brokerId}</span>
      <span>Acra Lending Account Executive: {aeSelect}</span>
      <span>Branch NMLS ID Number: {branchId}</span>
      <span>Company Name: {companyName}</span>
      <span>Contact Name: {contactName}</span>
      <span>Contact Phone: {contactPhone}</span>
      <span>Contact Email: {contactEmail}</span>
      <span>Loan Type: {loanType}</span>
      <span>Borrower Name: {borrowerName}</span>
      <span>Borrower's Mailing Address: {borrowerAddress}</span>
      <span>Borrower's Self-Employment Business Name: {borrowerBusinessName}</span>
      <span>Type of Business: {businessType}</span>
      <span>Percentage of Ownership: {ownership}</span>
      <span>Bank Statement Type: {bankStatementType}</span>
      <span>Explanation of Non-Business, Payroll Deposits, etc.: {explanation}</span>
      <span>Loan Amount: {loanAmount}</span>
      <span>Appraised Value: {appraisedValue}</span>
      <span>LTV: {ltv}</span>
      <div>
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
