import imageSlide1 from "../../assets/imgs/slider-image-1.jpeg";
import imageSlide2 from "../../assets/imgs/slider-image-2.jpeg";
import imageSlide3 from "../../assets/imgs/slider-image-3.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Slide() {
  return <>
  
  <section className="grid grid-cols-12 mb-8">

    <div className="col-span-8">
        <Swiper slidesPerView={1} loop={true}>
            <SwiperSlide>
            <img className="w-full h-full object-cover" src={imageSlide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className="w-full h-full object-cover" src={imageSlide2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className="w-full h-full object-cover" src={imageSlide1} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>

    <div className="col-span-4">
        <img className="w-full" src={imageSlide1} alt="" />
        <img className="w-full" src={imageSlide2} alt="" />
    </div>
  </section>
  </>
}
