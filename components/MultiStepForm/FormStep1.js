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
      <h2 className="mb-5">Pre-Screen Request</h2>
      <div className="input-field">
        <label 
          htmlFor="brokerID"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Acra Broker ID or NMLS Number *
        </label>
        <input
          type="text"
          id="brokerId"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          onChange={handleChange("brokerId")}
          defaultValue={values.brokerId}
        />
      </div>
      <div className="input-field">
        <label 
          htmlFor="aeSelect"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
            Acra Lending Account Executive *
        </label>
        <select
          id="aeSelect"
          onChange={handleChange("aeSelect")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          defaultValue={values.aeSelect}
        >
          <option value="" disabled>---</option>
          {aeList.map(name => (
            <option value={name}>{name}</option>

          ))}
        </select>
      </div>
      <div className="flex justify-end pt-4">
        <button className="btn" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}