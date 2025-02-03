import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
  };
  return (
    <>
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
    </>
  );
}

export default App;
