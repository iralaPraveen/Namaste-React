import UserClass from "./UserClass";
// import User from "./User";
import React from "react";

//You can also destructure
//import { Component } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("These is Parent Component");
  }

  render() {
    // console.log("These is Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>Learning namaste react Course from akshay saini</h2>
        {/* <User /> */}
        <UserClass name={"ramesh froM  props"} />
        {/* <UserClass name={"Dinesh from props"} /> */}
      </div>
    );
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
}

//The below code is Functional componnent

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>Learning namaste react Course from akshay saini</h2>
//             <User />
//             <UserClass name={"ramesh froM  props"} />

//         </div>
//     )
// }

export default About;
