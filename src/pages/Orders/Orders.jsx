import { useContext, useEffect, useState } from "react";
import { UserContext } from "./../../Context/User.context";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

export default function Orders() {
    const [orders, setOrders] = useState(null)
    const{token} =useContext(UserContext)

 let {id} = jwtDecode(token)
 
 

async function getUserOrder() {

    const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method: "GET",
}
let {data} = await axios.request(options)
setOrders(data)
}


useEffect(()=>{
    getUserOrder()
}, [])


  return <>
  
 {orders ? (
     <section className="space-y-4">
    {orders.map((order)=> <div key={order.id} className="Order p-4 border-2 border-gray-400 border-opacity-25 rounded-lg">
        <header className="flex justify-between items-center">
            <div>
                <h2 className="text-gray-500 ">Order ID</h2>
                <span className="text-lg ">{order.id}</span>
            </div>
            <div>
                {order.isPaid ? <span className=" font-cairo inline-block px-3 py-1 bg-lime-400 mx-2  text-white  font-semibold rounded-full" >تم الدفع</span>:
                <span className=" font-cairo inline-block px-3 py-1 bg-red-400 mx-2  text-white  font-semibold rounded-full" >غير مدفوع</span>}


                {order.isDelivered ? <span className=" font-cairo inline-block px-3 py-1 bg-lime-400 text-white  font-semibold rounded-full" >تم الاستلام</span>:
                                <span className=" font-cairo inline-block px-3 py-1 bg-blue-400 text-white  font-semibold rounded-full" >قيد التوصيل</span>}

            </div>
        </header>

        <div className="grid md:gap-4 grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-4">
            {order.cartItems.map((product)=> <div key={product._id} className="product-item overflow-hidden border-2 border-gray-400 border-opacity-30 rounded-lg">
                <img className="w-full"
                 src={product.product.imageCover} alt="" />
                <div className="p-4">
                <h3 className="text-lg font-bold line-clamp-3 "><Link to={`/product/${product.product.id}`} >{product.product.title}</Link></h3>
                <div className="flex justify-between items-center mt-2">
                    <p><span className="font-bold underline">count:</span>{product.count}</p>
                    <span>{product.price} L.E</span>
                </div>
                </div>
            </div>)}
        </div>
        <p className="text-lg mt-4"> Your Total Order Price Is <span className="mx-1 font-bold text-gray-800 ">{order.totalOrderPrice}</span> L.E </p>
    </div>
         )}
  </section>
  ) : (
    <Loading/>
    )}
  </>
}
