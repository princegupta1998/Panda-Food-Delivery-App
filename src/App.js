import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "../src/components/header/Header";
import Home from "../src/components/home/Home";
import Footer from "../src/components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/contact_us/ContactUs";
import Error from "./components/error_page/Error";
import RestaurantDetails from "./components/restaurant/RestaurantDetails";
import useCheckInternet from "./utils/useCheckInternet";
import Shimmer from "./components/shimmerUI/Shimmer";
// Lazyloading of our component(code splitting/chunking)
const AboutUs = lazy(() => import("./components/about_us/AboutUs"));

const App = () => {
  const onlineStatus = useCheckInternet();
  if (onlineStatus === false)
    return (
      <h1 className="container">
        Hello your internet connection is not working.Please Try Again Later!
      </h1>
    );

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
        element: (
          <Suspense fallback={<Shimmer />}>
            <AboutUs title={"Craving? We’ve Got You!"} />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
