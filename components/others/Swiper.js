// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          960: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          2560: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <img src="swiper/h1.jpg" />
          </div>
          <a className="overlay">
            <h2 className="title">Green Housing</h2>
            <span className="categories">
              <span>Outdoors</span>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="swiper/h2.jpg" />
          </div>
          <a className="overlay">
            <h2 className="title">Green Housing</h2>
            <span className="categories">
              <span>Outdoors</span>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="swiper/h3.jpg" />
          </div>
          <a className="overlay">
            <h2 className="title">Green Housing</h2>
            <span className="categories">
              <span>Outdoors</span>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="swiper/h4.jpg" />
          </div>
          <a className="overlay">
            <h2 className="title">Green Housing</h2>
            <span className="categories">
              <span>Outdoors</span>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="swiper/h6.jpg" />
          </div>
          <a className="overlay">
            <h2 className="title">Green Housing</h2>
            <span className="categories">
              <span>Outdoors</span>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="swiper/h8.jpg" />
          </div>
          <a className="overlay">
            <h2 className="title">Green Housing</h2>
            <span className="categories">
              <span>Outdoors</span>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="swiper/h9.jpg" />
          </div>
          <a className="overlay">
            <h2 className="title">Green Housing</h2>
            <span className="categories">
              <span>Outdoors</span>
            </span>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
