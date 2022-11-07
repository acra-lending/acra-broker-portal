import React from "react";

export default function FormStep2(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;
  return (
    <>
      <h1>Broker Details</h1>
      <div className="input-field">
        <label htmlFor="branchId">Branch NMLS ID Number *</label>
        <input
          type="text"
          id="branchId"
          onChange={handleChange("branchId")}
          defaultValue={values.branchId}
        />
      </div>
      <div className="input-field">
        <label htmlFor="companyName">Company Name *</label>
        <input
          type="text"
          id="companyName"
          onChange={handleChange("companyName")}
          defaultValue={values.companyName}
        />
      </div>
      <div className="input-field">
        <label htmlFor="contactName">Contact Name *</label>
        <input
          type="text"
          id="contactName"
          onChange={handleChange("contactName")}
          defaultValue={values.contactName}
        />
      </div>
      <div className="input-field">
        <label htmlFor="contactPhone">Contact Phone *</label>
        <input
          type="text"
          id="contactPhone"
          onChange={handleChange("contactPhone")}
          defaultValue={values.contactPhone}
        />
      </div>
      <div className="input-field">
        <label htmlFor="contactEmail">Contact Email *</label>
        <input
          type="email"
          id="contactEmail"
          onChange={handleChange("contactEmail")}
          defaultValue={values.contactEmail}
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
