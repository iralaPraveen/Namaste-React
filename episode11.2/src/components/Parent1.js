import { useState } from "react";
import Child from "./Child1";

const Parent1 = () => {
    const[Name, setName] = useState("");
    
    const liftup = (data) => {
       setName(data);
    }
    return (
        <div>
            <h1>Name from the child:{Name}</h1>
            <Child lift={liftup}/>
        </div>
    )

}
export default Parent1;