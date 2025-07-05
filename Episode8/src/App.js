import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import { praveen } from "../components/Header";
import Body from "../components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Error from "../components/Error";
import Restuarant from "../components/Restuarant";
import UserClass from "../components/UserClass";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {praveen}
      {/*Footer*/}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Body/> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contacts /> },
      {path:"/restuarant/:resId",element:<Restuarant/>}
    ],
    element: <App />,
    errorElement: <Error />
  },
]);
root.render(<RouterProvider router={appRouter} />);
