import Home from "./pages/home";
import Intro from "./components/home/intro";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import FeaturedPosts from "./components/home/FeaturedPosts";
import Blog from "./pages/blog";
import SingleProject from "./pages/singleproject";
import SingleArticle from "./pages/singlearticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: [<Intro />, <FeaturedPosts />],
      },
      {
        path: "/404",
        element: <ErrorPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:articleId",
        element: <SingleArticle />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId",
        element: <SingleProject />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
