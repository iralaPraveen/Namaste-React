import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: {
        login: "Dummy",
      },
    };
  }
  async componentDidMount() {
    // debugger;{praveen written to know about these }
    const data = await fetch("https://api.github.com/users/Naresh-Khatri");
    const json = await data.json();
    this.setState({ data: json });
    this.timer = setInterval(() => {
      console.log("These is the disadvantage of the SPA(single page application in the react and that need to be unmounted using [componentWillUnmount]");
    },1000)
  }

  componentWillUnmount() {
    // console.log("The component will unmount");
    clearInterval(this.timer);
  }
  render() {
    const { name } = this.props;
    const { count, data } = this.state;
    // debugger;
    return (
      <div className="user-card">
        <h1>{`Count : ${this.state.count}`}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Press to Increment
        </button>

        <h1>Name:{data.login}</h1>
        <h1>Location: CHITTOOR</h1>
        <h1>Conact : +43 2342 4313 45</h1>
      </div>
    );
  }
}

export default UserClass;




//These is the CHAT-GPT Code
// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       data: {
//         login: "Dummy",
//       },
//     };
//   }

//   async componentDidMount() {
//     const data = await fetch("https://api.github.com/users/Naresh-Khatri");
//     const json = await data.json();
//     this.setState({ data: json });

//     this.timer = setInterval(() => {
//       console.log(
//         "This is a side effect in a SPA. It should be cleaned up in componentWillUnmount to avoid memory leaks."
//       );
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     const { count, data } = this.state;
//     return (
//       <div className="user-card">
//         <h1>{`Count: ${count}`}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: count + 1 });
//           }}
//         >
//           Press to Increment
//         </button>
//         <h1>Name: {data.login}</h1>
//         <h1>Location: CHITTOOR</h1>
//         <h1>Contact: +43 2342 4313 45</h1>
//       </div>
//     );
//   }
// }

// export default UserClass;
