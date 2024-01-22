import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import Restramenu from "./components/Restramenu";

const AppLayout = () => {
  return (
      <div className="app">
          <Header />
          <Outlet />
          <Footer />
      </div>
  )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/restra/:resId",
                element: <Restramenu />
            }
        ],
        errorElement: <Error />

    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={appRouter} />
);

