import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import Restuarant from "./components/Restuarant";
// import Grocery from "./components/Grocery";
import UserClass from "./components/UserClass";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />

      {/*Footer*/}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contacts /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading from the Grocery</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restuarant/:resId", element: <Restuarant /> },
    ],
    element: <App />,
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
