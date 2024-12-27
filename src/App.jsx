import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./components/protectRoute/ProtectRoute";
import GuessRoute from "./components/GuessRout/GuessRoute";
import UserProvider from "./Context/User.context";
import CartProvider from "./Context/Cart.context";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CheckOut from "./pages/CheckOut/CheckOut";
import Orders from "./pages/Orders/Orders";
import Category from "./pages/Category/Category";
export default function App() {

const router = createBrowserRouter([
 {path:"/", 
     element: (
     <ProtectRoute>
      <Layout/>
     </ProtectRoute>),
     children: [
        {index: true, element: <Home/>}, {path: "cart", element: <Cart/>},
        {path: "product/:id" , element: <ProductDetails/>},
      {path:"checkout", element: <CheckOut/>},
      {path:"allorders", element: <Orders/>},
      {path:"categories", element: <Category/>}
    ]
 },

{
  path: "/",
  element: (<GuessRoute>
    <Layout/>
  </GuessRoute>),
  children: [
    {path: "signup", element: <Signup />},
    {path: "login", element: <Login />},
  ],
},

]);
  return ( 
  <>
  <UserProvider>
   <CartProvider>
   <RouterProvider router={router} />
   </CartProvider>
  </UserProvider>
  <Toaster position="bottom-right" />

  </>
  );
}
