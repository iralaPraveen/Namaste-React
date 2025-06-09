import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import { praveen } from "../components/Header";
import Body from "../components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const styleCard = {backgroundColor: "red"};

// you can also write as const RestuarantCard = ({resturantList} )

const app = () => {
//           console.log(
//       <Body />
// ); These is the seeing of the virtual dom how does it beign happening[ everything is an object]
  return (
    <div className="app">

      <Header />
      <Body />
      {praveen}
      {/*Footer*/}
    </div>
  );
};
root.render(app());
