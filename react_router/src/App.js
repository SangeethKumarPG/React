import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  //createRoutesFromElements,
} from "react-router-dom";
import ProductsPage from "./pages/Products.js";
import HomePage from "./pages/Home.js";
import RootLayout from "./pages/Root.js";
import ErrorPage from "./pages/Error.js";
import ProductDetails from "./pages/ProductDetails.js";
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>,
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);
// const router = createBrowserRouter(routeDefinitions);
//const routes = createBrowserRouter(router);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
