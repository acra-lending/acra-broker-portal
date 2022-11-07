import React, { useState } from "react";
import styled from "styled-components";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import Confirm from "./Confirm";
import Success from "./Success";

const StyledCard = styled.div`
  background: #fff;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0.25);
`;

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

  return <StyledCard>{switchStep()}</StyledCard>;
}