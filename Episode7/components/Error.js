import { use } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err);
  return (
    <div>
      <h1>!oops Somethin went wrong</h1>
      <h1>{err.data}</h1>
    </div>
  );
};
export default Error;
