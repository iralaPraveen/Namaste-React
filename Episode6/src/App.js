import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import { praveen } from "../components/Header";
import Body from "../components/Body";


const root = ReactDOM.createRoot(document.getElementById("root"));


const App = () => {

  return (
    <div className="app">
     
      <Header />
      <Body />
      {praveen}
        {/*Footer*/}
   
    </div>
  );
};
root.render(<App/>);
