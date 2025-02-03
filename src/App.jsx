import { useRef, useState } from "react";
import "./App.css";
export function extractDelimiter(input) {
  const regex = /^\/\/(.+)\n/;
  const match = input.match(regex);
  if (match) {
    return { pattern: match[0], delimiter: match[1] };
  }
  return null;
}

export function splitNumbers(numbers, delimiters) {
  const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
  return numbers.split(delimiterRegex).map((str) => parseInt(str));
}

export function removeCustomDelimiter(pattern, stringValue) {
  const temp = stringValue.replace(pattern, "");
  return temp;
}

export function cleanInput(input) {
  // Replace escaped newline characters with actual newline characters
  return input.replace(/\\n/g, "\n");
}

export function addNumbers(numbers) {
  //empty string
  if (numbers.length === 0 || numbers.trim() === "") {
    return 0;
  }

  //list of delimeters
  const supportedDelimiters = [",", "\n"];
  // debugger;

  numbers = cleanInput(numbers);
  // debugger;
  //check if there is custorm delimeter
  const customDelimiter = extractDelimiter(numbers);

  let stringValue = numbers;
  if (customDelimiter !== null) {
    supportedDelimiters.push(customDelimiter["delimiter"]);
    stringValue = removeCustomDelimiter(
      customDelimiter["pattern"],
      stringValue
    );
  }
  // debugger;
  const list = splitNumbers(stringValue, supportedDelimiters);
  const totalNumbers = list.length;
  let sum = 0;
  for (let i = 0; i < totalNumbers; i++) {
    sum += Number(list[i]);
  }
  console.log(sum);
  return sum;
}

function App() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    const result = addNumbers(inputValue);
    console.log("sum is", result);
    alert(result);
  };

  //tests
  // addNumbers("1\n2,3,4,5,6\n5");
  // addNumbers("//;\n1\n2;3;4;5;6\n5");
  // addNumbers("//;\n1;2;3");

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
