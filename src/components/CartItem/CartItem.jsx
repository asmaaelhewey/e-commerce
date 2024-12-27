import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import { Link } from "react-router-dom";


export default function CartItem({productInfo}) {

const {count, price, product, } = productInfo;
const {title, imageCover, category, id}= product

let {removeProduct, updateProduct} = useContext(CartContext);

  return <>
  
  <div className="flex gap-2">

  <div className=" grow cart-item bg-gray-100 py-4 px-6 rounded-lg flex justify-between items-center">
    <img className="w-24 h-24 rounded-full border-4 border-white object-cover"
    src={imageCover} alt={title} />

    <h3 className="text-lg text-gray-700 font-semibold" ><Link  to={`/product/${id}`} >{title}</Link></h3>
    <h4   className=" text-gray-600 font-semibold" >{category.name}</h4>


    <div className="count flex gap-5 items-center">
        <span className="text-lg font-bold text-gray-600" >{count}</span>
        <div className="icon space-y-2">
            <div 
            onClick={()=> {updateProduct({productId: id, count: count + 1})
          }}
            className="plus w-6 h-6 rounded-full bg-gray-700 text-white flex justify-center items-center cursor-pointer">
                <i className="fa-solid fa-plus"></i>
            </div>
            <div 
            onClick={()=>{
              updateProduct({productId: id, count: count - 1});
            }}
            className="minus w-6 h-6 rounded-full bg-gray-700 text-white flex justify-center items-center cursor-pointer">
                <i className="fa-solid fa-minus"></i>
            </div>
        </div>
    </div>
    <span>{price} L.E</span>
  </div>

<button
onClick={()=>{
    removeProduct({productId: id});
}}
className="rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-300 p-3">
    <i className="fa-solid fa-xmark"></i>
</button>
  </div>

  </>
}
