import { useContext, useEffect } from "react"
import { CartContext } from "../../Context/Cart.context"
import Loading from "../../components/Loading/Loading"
import CartItem from "../../components/CartItem/CartItem"
import { Link } from "react-router-dom"



export default function Cart() {

let {getCartProducts, cartInfo, clearCart} = useContext(CartContext)

  useEffect(()=>{
    getCartProducts()}, [])

  return  <>
  {cartInfo == null ?(<Loading/>):(
  
  <section>

<div className="flex gap-8 items-center">
  <i className="fa-brands fa-opencart text-3xl"></i>
  <h2 className="text-xl text-slate-600 font-semibold relative before:absolute before:w-0.5 before:h-3/4 before:bg-slate-600 before:-left-1 before:top-1/2 before:-translate-y-1/2 pl-4 ">Your shopping cart</h2>
</div>

    {cartInfo.numOfCartItems == 0 ? (
      <div className="mt-6 bg-gray-100 p-5 rounded-md shadow flex justify-center items-center flex-col gap-3">
      <h2>Oops! Your cart is empty. Start shopping now by clicking the button below and find somthing you love .</h2>
      <Link to="/" className="btn btn-blue-500 hover:bg-blue-400" >Back To Home</Link>
    </div>) : ( 
      <>
      
       <div className="space-y-4 mt-6 ">
    {cartInfo .data.products.map((product)=> <CartItem key={product._id} productInfo={product}   />)}
    </div>

    <div className="mt-5 flex justify-between items-center">
    <p>
      <i className="fa-solid fa-dollar-sign text-xl mr-2 text-blue-500 "></i>
       Your total cart price <span className="text-blue-500 font-semibold">{cartInfo.data.totalCartPrice}</span> </p>
      <button 
      onClick={clearCart}
      className="btn bg-red-500 hover:bg-red-600 text-white">
        <i className="fa-solid fa-trash mr-2"></i>
        Clear cart</button>
    </div>

    <Link to="/checkout" className=" inline-block w-full text-center mt-8 btn bg-blue-400 hover:bg-blue-500" >Payment</Link>
   
      </>
  )}
    </section>)}
  </>
}
