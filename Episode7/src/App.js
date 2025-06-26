import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import { praveen } from "../components/Header";
import Body from "../components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About"; // 👈 make sure you import About if using it
import Error from "../components/Error";
import Contacts from "../components/Contacts";

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
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contacts /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
