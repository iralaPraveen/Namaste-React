

// const heading = React.createElement("h1",{
//     id: "head"
// },"Using React JS");

// console.log("we are showing the  heading content",heading); /these is an object/

// const root =   ReactDOM.createRoot(document.getElementById("root"));

// console.log("we are showing the root contnt",root);
// root.render(heading)  

//--------------------------------------------------------------------------


{/* <div id = "parent">
    <div id = "child1">
        <h1>i'am the H1</h1>
    </div>
    <div id = "child2">
        <h2>i'am the H2</h2>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm the h1 tag"),
    React.createElement("h1", {}, "I'm the h1 tag")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "I'm the h2 tag"),
    React.createElement("h2", {}, "I'm the h2 tag")
  ])
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//The above code is to stimulate the dom manipulation using the only react 
// later on these confusion task can be done using the [JSX]
// we will study about JSX on later on chapters

