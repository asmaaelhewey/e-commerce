import axios from "axios";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import { useState } from "react";
import Slide from "../../components/slide/Slide";
import CateSlide from "../../components/cateSlide/cateSlide";

export default function Home() {

const [products, setProducts] = useState();
async function getProducts () {
  const options = {
    url: "https://ecommerce.routemisr.com/api/v1/products",
    method:"GET"
  }

  let{data} = await axios.request(options);
  setProducts(data.data)
}
useEffect(()=>{getProducts()}, []);

  return (
  <>
  <Slide/>
<CateSlide/>
  
 {!products ? <Loading/> :  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-4">
    {products.map((product)=> <Card productInfo={product} key={product.id}/>)}
  </div>}

  </>
  
);
}
