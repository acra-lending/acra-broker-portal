import React, { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import Confirm from "./Confirm";
import Success from "./Success";

export default function UserForm({ aeList }) {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    brokerId: "",
    aeSelect:"",
    branchId: "",
    companyName: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    loanType: "",
    borrowerName: "",
    borrowerAddress: "",
    borrowerBusinessName: "",
    businessType: "",
    ownership: "",
    bankStatementType: "",
    explanation: "",
    // loanAmount: "",
    // appraisedValue: "",
    // ltv: "",   

  });

  const [loanAmount, setLoanAmount] = useState("");
  const [appraisedValue, setAppraisedValue] = useState("");
  const [ltv, setLtv] = useState("");

  const values = {
    ...user,
    loanAmount,
    appraisedValue,
    ltv,
  }
    

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) =>
    setUser({ ...user, [input]: e.target.value });

  const switchStep = () => {
    switch (step) {
      case 1:
        return (
          <FormStep1
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            aeList={aeList}
          />
        );
      case 2:
        return (
          <FormStep2
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3: 
          return (
            <FormStep3
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
          );
      case 4: 
          return (
            <FormStep4
            nextStep={nextStep}
            prevStep={prevStep}
            // handleChange={handleChange}
            setLoanAmount={setLoanAmount}
            setAppraisedValue={setAppraisedValue}
            setLtv={setLtv}
            values={values}
          />
          );
      case 5:
        return (
          <Confirm 
            nextStep={nextStep} 
            prevStep={prevStep} 
            values={values} />
        );
      case 6:
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        {switchStep()}
      </div>
      <div className="text-[15px] p-10">
        <p className="font-medium pt-3">
          <strong>Note: </strong>
          1:00 pm PT request cut off time; Please allow 1 – 3 business days for feedback
        </p>
        <p className="text-[#ff0000]">
        <span className="font-medium">Consecutive statements, including the <u>most recent statement issued</u> through the statement closing date must be provided.</span><br></br>
        (Ex. statement ending date on the 30th of each month; Pre-Screen request submitted 07/06/21; Broker must include 12 (or 24) statements including the 06/30/21 statement)
        </p>
        <p className="text-xs">
          <em>
            <strong>Disclaimer: </strong>The preliminary bank statement analysis is intended for informational purposes, for mortgage professionals only. This is not a credit application, credit
            approval, or a commitment to lend and should not be construed as lending advice. Loans are subject to borrower qualifications, including but not limited to, verified
            credit score, assets, existing debt, property evaluation or other factors, and final credit approval. Approvals are subject to underwriting guidelines, rates, terms, and
            program guidelines, which are subject to change without notice based on the applicant’s eligibility and market conditions. Not all applicants may qualify. Acra is an
            equal opportunity lender. See State Licenses Information for where we lend.
          </em>
        </p>
      </div>
    </>
  );
}