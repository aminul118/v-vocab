import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages.jsx/ErrorPaage";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages.jsx/Login";
import Register from "../pages.jsx/Register";
import ContactUs from "../pages.jsx/ContactUs";
import Vocabularies from "../pages.jsx/Vocabularies";
import UserProfile from "../pages.jsx/UserProfile";
import PrivateRoute from "./PrivateRoute";
import VocabularyDetails from "../pages.jsx/VocabularyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/vocabulary",
        element: <Vocabularies />,
        loader: () => fetch("/vocabularies.json"),
      },
      {
        path: "/vocab-details/:vocabId",
        element: (
          <PrivateRoute>
            <VocabularyDetails />,
          </PrivateRoute>
        ),
        loader: () => fetch(`/vocabularies.json`),
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
