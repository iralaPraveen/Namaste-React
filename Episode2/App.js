
import React from "react";
import ReactDOM from "react-dom/client";



// import React from "react";
// import ReactDOM from "react-dom"; // ⛔
// ...
// const root = ReactDOM.createRoot(document.getElementById("root")); // ❌

// #react-dom:
// Meant for older APIs like ReactDOM.render() (used in React 17 and below).

// react-dom/client:
// Introduced in React 18 to support concurrent features and the new createRoot() method.
// s because in React 18 and above, createRoot() was moved to a separate sub-package:




const heading = React.createElement("h1",{id:"head"},"i'am h1");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);