import { Link, NavLink } from "react-router-dom"
import freshCardLogo from "../../assets/imgs/freshcart-logo.svg"
import { useContext, useEffect } from "react"
import { UserContext } from "../../Context/User.context"
import { CartContext } from "../../Context/Cart.context";

export default function Navbar() {

const {token, logOut} = useContext(UserContext);
const {cartInfo, getCartProducts} = useContext(CartContext);

useEffect(()=> {
  getCartProducts()
}, [])

  return (
  <>
  <nav className="bg-gray-50 py-4 shadow fixed top-0 left-0 right-0 z-50">
    <div className="container flex items-center gap-12">
      <Link to="">
        <img src={freshCardLogo} alt="freshCardLogo" />
      </Link>
      
      {token && (<>
      
        <ul className="flex gap-5 items-center">
        <li>
          <NavLink className={({isActive})=>{
            return `relative before:absolute before:w-0 before:h-0.5 before:bg-gray-300 hover:before:w-full before:transition-[width] before:duration-300  before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold": ""}`
          }} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>{
            return `relative before:absolute before:w-0 before:h-0.5 before:bg-gray-300 hover:before:w-full before:transition-[width] before:duration-300  before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold": ""}`
          }} to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>{
            return `relative before:absolute before:w-0 before:h-0.5 before:bg-gray-300 hover:before:w-full before:transition-[width] before:duration-300  before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold": ""}`
          }} to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>{
            return `relative before:absolute before:w-0 before:h-0.5 before:bg-gray-300 hover:before:w-full before:transition-[width] before:duration-300  before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold": ""}`
          }} to="/allorders">Orders</NavLink>
        </li>
      </ul>
      <Link to="/cart"  className="cart cursor-pointer ml-auto relative">
      <i className="fa-solid fa-cart-shopping text-lg"></i>
      <div className="counter absolute flex justify-center items-center right-0 top-0 h-5 translate-x-1/2 -translate-y-1/2 w-5 rounded-full bg-gray-300 text-black">
      {cartInfo == null ? (<i className="fa-solid fa-spinner fa-spin"></i> ):(<span className="text-sm font-semibold">{cartInfo.numOfCartItems}</span>)}
      </div>
      </Link>
      </>)}
      <ul className={`flex items-center gap-5 ${!token && "ms-auto"}`}>
        <li>
          <a href="https://istagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://youtube.com">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>

      </ul>

      <ul className="flex gap-5 items-center ">
      {!token && (<>
        <li>
          <NavLink className={({isActive})=>{
            return `relative before:absolute before:w-0 before:h-0.5 before:bg-gray-300 hover:before:w-full before:transition-[width] before:duration-300  before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold": ""}`
          }} to="signup">Sign up</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>{
            return `relative before:absolute before:w-0 before:h-0.5 before:bg-gray-300 hover:before:w-full before:transition-[width] before:duration-300  before:left-0 before:-bottom-1 ${isActive ? "before:!w-full font-semibold": ""}`
          }} to="login">Login</NavLink>
        </li>
      </>)}

       {token && (
         <li onClick={logOut}>
         <NavLink to="logout" className="text-lg">Log out</NavLink>
       </li>
       )}
      </ul>
    </div>
  </nav>
  
  </>
  )
}
