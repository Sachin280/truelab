import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BookTest from "./pages/BookTest";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "book-test", Component: BookTest },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
    ],
  },
]);
