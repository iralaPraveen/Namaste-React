import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log("These is the error",err.data);
    return (
        <div>
            <h1>Opps some thing went wrong</h1>
            <h2>{`Description of the error: ${err.data}`}</h2>
        </div>
    )
}
export default Error;