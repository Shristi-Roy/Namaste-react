
import React from 'react'; // For importing React itself
import ReactDOM from 'react-dom/client'; // For importing ReactDOM for rendering in a web browser


const heading = React.createElement(
    "h1",
     {id:"heading"},
     "Namaste React 🚀",
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);