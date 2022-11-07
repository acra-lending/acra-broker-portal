import React, { useState } from "react";
import styled from "styled-components";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import Confirm from "./Confirm";
import Success from "./Success";

// const StyledCard = styled.div`
// overflow: hidden;
// padding: 0 0 32px;
// margin: 48px auto 0;
// width: 50%;
// min-height: 300px;
// font-family: Quicksand, arial, sans-serif;
// box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
// border-radius: 5px;
// `;

export default function UserForm() {
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
  console.log(values);

  return (
    <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
      {switchStep()}
    </div>
  );
}