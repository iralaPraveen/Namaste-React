import React, { useState } from "react";

const UncontrolledComponent = () => {
  const [submittedValue, setSubmittedValue] = useState("");

  function handleForm(e) {
    e.preventDefault(); // prevent page refresh
    const input = document.getElementById("in").value;
    setSubmittedValue(input); // update state to display
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <h2>Enter the Input - This is the Uncontrolled Component</h2>
        <input id="in" type="text" placeholder="Enter the text" />
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted value */}
      {submittedValue && <p>You entered: {submittedValue}</p>}
    </div>
  );
};

export default UncontrolledComponent;
