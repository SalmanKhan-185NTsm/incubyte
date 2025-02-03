import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    const result = addNumbers(inputValue);
    console.log("sum is",result);
  };

  function addNumbers(value) {
    const list = value.split(",");
    const totalNumbers = list.length;
    let sum = 0;
    for (let i = 0; i < totalNumbers; i++) {
      sum += Number(list[i]);
    }
    return sum;
  }
  return (
    <>
      <div className="card">
        <h2>String Calculator</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            name="string_numbers"
            ref={inputRef}
          />
          <button className="btn"> Calculate </button>
        </form>
      </div>
    </>
  );
}

export default App;
