// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./Sliders/slider-image1.jpg";
import image2 from "./Sliders/slider-image2.jpg";
import image3 from "./Sliders/slider-image3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./style.scss";

// import required modules
import { EffectCreative, Autoplay } from "swiper";

export default function Sliders() {
  return (
    <div className="sliders">
      {" "}
      <Swiper
        modules={[EffectCreative, Autoplay]}
        virtual={false}
        speed={700}
        grabCursor={true}
        effect={"creative"}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
        loop={true}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={image1} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slider" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
