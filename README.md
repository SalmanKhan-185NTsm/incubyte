# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Dev Requirements

node js v18.18.0
npm v9.8.1

## Steps to Run

### Step 1 : Install the dependencies

`npm i`

### Step 2 : Start the local dev server

`npm run dev`

### tests covered

- Allow the add method to handle any amount of numbers.
- Allow the add method to handle new lines between numbers (instead of commas).
  ("1\n2,3" should return 6)
- Support different delimiters:
- Calling add with a negative number will throw an exception: "negative numbers not
  allowed <negative_number>"
- input having more than 1000
