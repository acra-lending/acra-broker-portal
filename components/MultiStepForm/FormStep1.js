import React from "react";
// import { useState } from "react";
// import validator from "validator";
export default function FormStep1(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
    // if (
    //   validator.isEmpty(values.brokerId) || 
    //   validator.isEmpty(values.aeSelect)
    //   ) {
    //     setError(true)
    //   } else {
    //     props.nextStep();
    // }
  };
  const { values, handleChange } = props;
  // const [error, setError] = useState(false);

  const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2";
  // const errorInputClass = "bg-gray-50 border-red-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2";
  return (
    <>
      <h2 className="mb-5">Pre-Screen Request</h2>
      <p className="leading-8 font-medium mb-5 text-[15px]">
        <strong>Note: </strong>Requests will only be processed for APPROVED Acra Lending brokers.<br></br>
        Contact brokers@acralending.com or your AE to confirm Broker ID #<br></br>
        Acra Pre-Screen Desk will not process 'updated' income requests. Please contact your Account Executive on next steps for submission.
      </p>
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
          required
          className={inputClass}
          onChange={handleChange("brokerId")}
          defaultValue={values.brokerId}
        />
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
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
          required
          onChange={handleChange("aeSelect")}
          className={inputClass}
          defaultValue={values.aeSelect}
        >
          <option value="" disabled>---</option>
          {props.aeList.map((ae, i) => (
            <option 
              key={i} 
              value={ae.firstname + ' ' + ae.lastname}>{ae.firstname + ' ' + ae.lastname}
            </option>
          ))}
        </select>
        {/* {error ? (
          <div className="flex justify-center text-red-500">This field is required</div>
        ) : (
          ''
        )
      } */}
      </div>
      <div className="flex justify-end pt-4">
        {!values.brokerId || !values.aeSelect ? (
          <button 
            disabled
            className="text-white bg-[#0033A1] hover:bg-blue-800 disabled:opacity-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={next}
          >
            Next
          </button>
        ) : (
          <button 
            className="text-white bg-[#0033A1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={next}
          >
            Next
          </button>
        )
        }
      </div>
    </>
  );
}