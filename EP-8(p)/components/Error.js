
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error  = useRouteError();
    console.log("these is the matter",error);
    return (
        <div>
            <h3>{error.message}</h3>
            <h3>{error.status }</h3>
            <h3>{error.statusText }</h3>
        </div>
    )
}
export default Error;