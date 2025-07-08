

import { useContext } from "react";
import { store } from "../App";
const Count = () => {
    const [count, setCount] = useContext(store);
    return (
        <div className="flex justify-center-safe align-middle w-10/12 bg-amber-100 mt-5 mx-10 my-5 py-20 font-extrabold">
            <h2>The Total Items:-</h2>
            <h2>{count.length}</h2>
        </div>
    )
}
export default Count;