import {useState} from "react";

const AddTodo = ( props ) => { 
    const [data, setData] = useState("");
    return (
        <div>
            <input type="text" value={data} onChange={ e=> setData(e.target.value)}/>
            <button onClick={() => {
                props.data(data)
                setData("");
            }}> Click bUtton From Parent to Child</button>
        </div>
    )
}
export default AddTodo;