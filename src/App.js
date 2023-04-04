import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.scss";
// import Product from "./pages/Product/Product";

const LazyProduct = React.lazy(() => import("./pages/Product/Product.jsx"));

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/task-nasnav",
    element: <Layout />,
    children: [
      {
        path: "/task-nasnav",
        element: (
          <React.Suspense fallback="Loading ....">
            <LazyProduct />
          </React.Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
