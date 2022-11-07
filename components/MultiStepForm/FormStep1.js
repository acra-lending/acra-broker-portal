import React from "react";

export default function FormStep1(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const { values, handleChange } = props;

  const aeList = [
    'Adam Morris',
    'Chris Clark',
  ]

  return (
    <>
      <h1>Pre-Screen Request</h1>
      <div className="input-field">
        <label htmlFor="brokerID">Acra Broker ID or NMLS Number *</label>
        <input
          type="text"
          id="brokerId"
          onChange={handleChange("brokerId")}
          defaultValue={values.brokerId}
        />
      </div>
      <div className="input-field">
        <label htmlFor="aeSelect">Acra Lending Account Executive *</label>
        <select
          id="aeSelect"
          onChange={handleChange("aeSelect")}
          defaultValue={values.aeSelect}
        >
          <option value="" disabled>---</option>
          {aeList.map(name => (
            <option value={name}>{name}</option>

          ))}
        </select>
      </div>
      <button className="btn" onClick={next}>
        Next
      </button>
    </>
  );
}