
import { useState, useContext } from "react";
import { store } from "../App";
const ComponentB = () => {
    const [state, setState] = useContext(store)
    return (
        <div>
            <h2>ComponentB {state}</h2>
        </div>
    )
}

export default ComponentB;