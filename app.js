
import React from 'react'; // For importing React itself
import ReactDOM from 'react-dom/client'; // For importing ReactDOM for rendering in a web browser

//JSX (transpiled before it reaches the JS) - PARCEL - BABLE

// JSX => bable transpiles it to React.createElement => (is executed) ReactElement-JS object => HTML Element(rendered)

const jsxheading = <h1 id="head" className="heading" tabIndex="5">Namaste React using JSX 🚀 </h1>

console.log(jsxheading);

//This is one line code if we want to write JSX is in multiple lines then we wrap the code it inside () this paranthesis. Like:

const jsxheadings = ( <h1 className="heading">
    Namaste React using JSX 🚀 
    </h1>);

console.log(jsxheadings);

// Why we use () round brackets?
//becoz bable needs to understand where is JSX starting & where is ending.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheadings);