
import Parent1 from "./components/Parent1";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Accordion from "./components/Accordion";

function App() {

  const [todos, setTodos] = useState(["Reading", "writing", "Speaking"]);


  const addTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }
  
  return (
    <center>
    <ul>
      {
        todos.map((todos,index) => (
          <li  key={index}>{todos}</li>
        ))
      }
      </ul>
      <AddTodo data={addTodo} />
      <Accordion/>
      </center>
   )
  
}

export default App;
