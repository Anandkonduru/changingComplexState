import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function handleInputs(event) {
    const { name, value } = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName };
      } else if (name === "lName") {
        return {
          lName: value,
          fName: prevValue.fName
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleInputs}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleInputs}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
