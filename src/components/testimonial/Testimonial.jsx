import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import getImageUrl from "../GetImageUrl";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Testimonial(props) {
  const testimonialSlider = useMemo(() => {
    return {
      spaceBetween: 24,
      slidesPerView: "auto",
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".next-btn-5",
        prevEl: ".prev-btn-5",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <div className="h2-testimonial-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12">
            
            <div className="section-title2 text-center">
              <h2>{props.title}</h2>
            </div>
          </div>
        </div>
    
        <div className="row mb-50">
          <Swiper
            {...testimonialSlider}
            className="swiper h2-testimonial-slider"
          >
            <div className="swiper-wrapper">
             {
                props.content.map(x => <SwiperSlide key={x._key} className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-content text-center">
                    <div className="quat-icon">
                      <img
                        className="left-quat"
                        src="assets/images/icon/left-quat.svg"
                        alt=""
                      />
                      <img
                        className="right-quat"
                        src="assets/images/icon/right-quat.svg"
                        alt=""
                      />
                    </div>
                    <div className="foot-vector">
                      <img
                        className="testimonial-vec-left"
                        // src="assets/images/icon/h2-testimonial-vec-left.svg"
                        alt=""
                      />
                      <img
                        className="testimonial-vec-right"
                        // src="assets/images/icon/h2-testimonial-vec-right.svg"
                        alt=""
                      />
                    </div>
                    <div className="author-name-deg">
                      <h3>{x.name}</h3>
                      <span>{x.role}</span>
                    </div>
                    <p>
                    {x.text}
                    </p>
                    <div className="review">
                      <ul>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="testimonial-img">
                    {
                      x.profile_picture && <img src={getImageUrl(x.profile_picture)} alt={x.profile_picture.alt} />
                    }
                  </div>
                </div>
              </SwiperSlide>)
             }
              
            </div>
          </Swiper>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between">
            <div className="slider-btn prev-btn-5">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="swiper-scrollbar" />
            <div className="slider-btn next-btn-5">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
