// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./style.scss";

// import required modules
import { EffectCreative } from "swiper";

export default function Sliders() {
  return (
    <div className="sliders"> <Swiper
    grabCursor={true}
    effect={"creative"}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    }}
    modules={[EffectCreative]}
    className="mySwiper2"
  >
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
  </Swiper></div>
  )
}
