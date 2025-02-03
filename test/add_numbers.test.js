function extractDelimiter(input) {
  const regex = /^\/\/(.+)\n/;
  const match = input.match(regex);
  if (match) {
    return { pattern: match[0], delimiter: match[1] };
  }
  return null;
}

function splitNumbers(numbers, delimiters) {
  const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
  return numbers.split(delimiterRegex).map((str) => parseInt(str));
}

function removeCustomDelimiter(pattern, stringValue) {
  const temp = stringValue.replace(pattern, "");
  return temp;
}

function cleanInput(input) {
  // Replace escaped newline characters with actual newline characters
  return input.replace(/\\n/g, "\n");
}

function addNumbers(numbers) {
  try {
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
    let negativeNumbersList = [];
    for (let i = 0; i < totalNumbers; i++) {
      let num = Number(list[i]);
      if (num < 0) {
        negativeNumbersList.push(num);
      }
      sum += Number(list[i]);
    }
    console.log(sum);
    if (negativeNumbersList.length > 0) {
      // alert(
      //   "Negative numbers are not allowed," + negativeNumbersList.join(", ")
      // );
      throw new Error(
        `Negative numbers are not allowed: ${negativeNumbersList.join(", ")}`
      );
    }
    return sum;
  } catch (error) {
    console.error("An error occurred", error.message);
    return error.message;
  }
}

test("input //;\n1;2;3 expect 6", () => {
  expect(addNumbers("//;\n1;2;3")).toBe(6);
});

test("input 1,2,3 expect 6", () => {
  expect(addNumbers("1,2,3")).toBe(6);
});

test("input 1,2,3\\n5 expect 11", () => {
  expect(addNumbers("1,2,3\\n5")).toBe(11);
});
test("input 1,2,3\n5 expect 11", () => {
  expect(addNumbers("1,2,3\n5")).toBe(11);
});
test("input //;\n1;2;3 expect 6", () => {
  expect(addNumbers("//;\\n1;2;3")).toBe(6);
});
test("input //;\\n1;2;-13 expect error", () => {
  expect(addNumbers("//;\\n1;2;-13")).toBe(
    "Negative numbers are not allowed: -13"
  );
});
