import axios from "axios"
import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/Cart.context";
import ReactImageGallery from "react-image-gallery";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../../components/Card/Card";


export default function ProductDetails() {
    const [ProductDetails, setProductDetails] = useState(null);

    const [relatedProducts, setRelatedProducts] = useState(null)

    let {id}= useParams();
    
    const {addProductToCart} = useContext(CartContext)
 async function getProductDetails() {
   try {
    const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method: "GET"
    }

  let{data} = await axios.request(options);
  console.log(data);
  setProductDetails(data.data);
   } catch (error) {
    console.log(error);
   }
}

 async function getRelatedProducts() {
   try {
    const options = {

        url:`https://ecommerce.routemisr.com/api/v1/products?category[in]=${ProductDetails.category._id}`,
        method:"GET",
    };

    let {data} = await axios.request(options);
    setRelatedProducts(data.data)
    
   } catch (error) {
    console.log(error);
    
   }
 }

useEffect(()=> {
    getProductDetails();
}, []);

useEffect(()=> {
    if(ProductDetails == null) return;
    getRelatedProducts();
}, [ProductDetails])

  return <>
  
  {ProductDetails ? ( 
    <>
    <section className="grid grid-cols-12 gap-12">

<div className="col-span-3">
    <ReactImageGallery
    showFullscreenButton={false}
    showPlayButton={false}
    showNav={false}
    items={ProductDetails.images.map((image)=> {
        return {original: image,
            thumbnail: image
        } })} />
</div>

<div className="col-span-9 space-y-4">
    <div>
    <h2 className="text-2xl font-semibold text-gray-500">{ProductDetails.title}</h2>
    <h3 className="text-blue-400 ">{ProductDetails.category.name}</h3>
    </div>
    <p className="text-gray-500">{ProductDetails.description}</p>

    <div className="flex justify-between items-center">
        <span>{ProductDetails.price} L.E</span>
        <div>
            <i className="fa-solid fa-star mr-2 text-yellow-400"></i>
            <span>{ProductDetails.ratingsAverage}</span>
        </div>
    </div>

    <button
    onClick={()=>{
        addProductToCart({productId: id})
    }}
    className="btn bg-blue-200 hover:bg-blue-300 w-full font-semibold text-gray-600">Add To Cart</button>
</div>
</section>

<section>
    <h2 className="text-2xl text-gray-500 my-8">Related Products</h2>
    {relatedProducts ? <Swiper slidesPerView={6} spaceBetween={15}>
        {relatedProducts.map((product)=> <SwiperSlide key={product.id}>
            <Card productInfo={product} />
        </SwiperSlide>)}
    </Swiper> : <Loading/> }
</section>
</>
):(<Loading/>)}

  </>
}
