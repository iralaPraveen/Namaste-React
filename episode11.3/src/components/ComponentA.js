import { useContext ,useState} from "react";
import { store } from "../App";

const ComponentA = () => {
    const [state, setState] = useContext(store);
    return (
        <div>
            <h2>ComponentA{state}</h2>
        </div>
    )
}

export default ComponentA;