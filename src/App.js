import Category from "./pages/Category";
import Gifs from "./pages/Gifs";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import Favriotes from "./pages/Favriotes";
import { GifProvider } from "./Context/Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <Gifs />,
      },
      {
        path: "/favorite",
        element: <Favriotes />,
      },
    ],
  },
]);
function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
