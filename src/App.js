import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "../src/components/header/Header";
import Home from "../src/components/home/Home";
import Footer from "../src/components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/about_us/AboutUs";
import ContactUs from "./components/contact_us/ContactUs";
import Error from "./components/error_page/Error";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
