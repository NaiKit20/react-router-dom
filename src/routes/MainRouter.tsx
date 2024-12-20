import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MainLayout from "../layouts/MainLayout";
import TestNevigate from "../pages/TestNevigate";
import SearchParamPage from "../pages/SearchParamPage";

const mainRouter = createBrowserRouter([
  {
    index: true,
    element: <>Index Page</>,
  },
  {
    path: "*",
    element: <>404 not fond</>, 
  },
  {
    path: "/layout",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <>|Index Layout</>,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "test/:id_data",
        element: <TestNevigate />,
      },
      {
        path: "search-param",
        element: <SearchParamPage />,
      },
    ],
  },
]);

export default mainRouter;
