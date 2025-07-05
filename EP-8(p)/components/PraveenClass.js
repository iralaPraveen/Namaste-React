import React from "react";

class PraveenClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        login: "Dummy",
      },
    };

    console.log("These is the constructor", this.state.data.login);
  }

  async componentDidMount() {
    console.log("These is componentDidMount");
    const data = await fetch("https://api.github.com/users/Naresh-Khatri");
    const json = await data.json();
    console.log("These is the Json Data", json);
    this.setState({ data: json });
  }

  componentWillUnmount() {
    console.log("These is componentWillUnmount");
  }

  render() {
    const { login } = this.state.data;
    console.log("These is the render", login);
    // debugger;
    return (
      <div>
        <h1>These is the class based component</h1>
        <h2> Name:-{login}</h2>
      </div>
    );
  }
}

export default PraveenClass;
