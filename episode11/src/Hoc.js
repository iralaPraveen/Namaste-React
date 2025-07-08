import React from "react";

const Hoc = (Component) => {
  return class extends React.Component {
    state = {
      auth: false,
    };
    render() {
      return (
        <div>{this.state.auth ? <Component /> : <h1>Please Login</h1>}</div>
      );
    }
  };
};

export default Hoc;
