import { useState } from "react";
import Test from "./Test";

const ControlledComponent = () => {
    const [name, setName] = useState("");
    const changeHandler = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <center>
                <h1>Name:{name}</h1>
                <input type="text" value={name} onChange={changeHandler} />
                <Test changeHandler={ changeHandler} />
            </center>
        </div>
    )
}
export default ControlledComponent;