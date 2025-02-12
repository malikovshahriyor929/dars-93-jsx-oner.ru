import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/mainLayout";
import Home from "../pages/Home";
import About from "../pages/delevery";
import Contact from "../pages/contact";
import Faq from "../pages/payment";

 export let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/delevery",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/payment",
        element: <Faq />,
      },
    ],
  },
]);
