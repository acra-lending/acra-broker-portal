import React, { useState } from "react";
import axios from 'axios';
import {Oval} from "react-loader-spinner";


export default function Confirm(props) {
  const [isSubmitting, setIsSubmitting] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const next = (e) => {
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    let form = {
      formData:{
        brokerId: brokerId,
        aeSelect: aeSelect,
        branchId: branchId,
        companyName: companyName,
        contactName: contactName,
        contactPhone: contactPhone,
        contactEmail: contactEmail,
        loanType: loanType,
        borrowerName: borrowerName,
        borrowerAddress: borrowerAddress,
        borrowerBusinessName: borrowerBusinessName,
        businessType: businessType,
        ownership: ownership,
        bankStatementType: bankStatementType,
        explanation: explanation,
        loanAmount: loanAmount,
        appraisedValue: appraisedValue,
        ltv: ltv,
      }
    }

    // Send it
    await axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/ezforms/submit`,
      data: form,
      headers: {
          'Content-Type': 'application/json'
      },
      }).then(response => {
      // actions taken when submission goes OK
      setIsSubmitting(false)
      setSuccessMessage('Sent! Please upload files on next page.')
      }).catch(error => {
      // actions taken when submission goes wrong
      setIsSubmitting(false)
      setSuccessMessage('Uh oh! Looks like there was an error.')
      console.log(error)
      })

      setTimeout(() => {next(); window.scrollTo(0,0) }, 2000);

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
      <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" onClick={back}>
          Back
        </button>
        <button 
        className="text-white bg-[#0033A1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={submit}>
          {!isSubmitting && 'Submit'}
          {isSubmitting && 
            <div style={{position: "relative", left: "40%"}}>
                <Oval
                    height={30}
                    width={30}
                    color="#0033a1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#8ab7e9"
                    strokeWidth={10}
                    strokeWidthSecondary={10}
                />
            </div>
            }
        </button>
      </div>
      <div className="flex flex-row-reverse">
          <p>{successMessage ? successMessage : ''}</p>
      </div>
    </>
  );
}
