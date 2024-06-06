import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function OtherServiceSlide(props) {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 24,
      // centeredSlides: true,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".next-btn-1",
        prevEl: ".prev-btn-1",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="pt-120 mb-120">
      <div className="container" >
        <div className="row">
          <div className="col-lg-12 d-flex flex-wrap align-items-center justify-content-sm-between justify-content-start gap-4 mb-60">
            <div className="inner-section-title">
              <h2>Other Services</h2>
            </div>
            {console.log(props)}
            <div className="swiper-btn-wrap d-flex align-items-center">
              <div className="slider-btn prev-btn-1">
                <i style={{ cursor: "pointer" }} className="bi bi-arrow-left" />
              </div>
              <div className="slider-btn next-btn-1">
                <i style={{ cursor: "pointer" }} className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...slider} className="swiper home1-services-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="services-card1">
                  <div className="icon">
                    <img src="assets/images/icon/daycare-center2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/services/collision-repair">
                        <a>Collision Repair</a>
                      </Link>
                    </h3>
                    <p>
                      Restoring vehicles to pre-accident condition with precision care.
                    </p>
                  </div>
                  <Link legacyBehavior href="/services/collision-repair">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 two">
                  <img
                    className="services-card-vec"
                    src="assets/images/bg/services-card-vec.png"
                    alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/grooming2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/services/dent-repair-and-removal">
                        <a>Dent Repair</a>
                      </Link>
                    </h3>
                    <p>
                      Expertly removing your vehicles dents for a high-quality seamless exterior finish.
                    </p>
                  </div>
                  <Link legacyBehavior href="/services/dent-repair-and-removal">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 three">
                  <img
                    className="services-card-vec"
                    src="assets/images/bg/services-card-vec.png"
                    alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/boarding2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/services/bumper-repair">
                        <a>Bumper Repair</a>
                      </Link>
                    </h3>
                    <p>
                      Renewing bumpers with seamless fixes for a flawless look.
                    </p>
                  </div>
                  <Link legacyBehavior href="/services/bumper-repair">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 four">
                  <img
                    className="services-card-vec"
                    src="assets/images/bg/services-card-vec.png"
                    alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/veterinary2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                    <Link legacyBehavior href="/services/auto-glass-repair">
                        <a>Auto Glass Repair</a>
                      </Link>
                    </h3>
                    <p>
                      Swift, Safe, and reliable repairs for cracked or damaged vehicle glass.
                    </p>
                  </div>
                  <Link legacyBehavior href="/services/auto-glass-repair">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 four">
                  <img
                    className="services-card-vec"
                    src="assets/images/bg/services-card-vec.png"
                    alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/veterinary2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/services/auto-care">
                        <a>Auto Care</a>
                      </Link>
                    </h3>
                    <p>
                    Comprehensive maintenance to keep vehicles running smoothly.
                    </p>
                  </div>
                  <Link legacyBehavior href="/services/auto-care">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 four">
                  <img
                    className="services-card-vec"
                    src="assets/images/bg/services-card-vec.png"
                    alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/veterinary2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/services/frame-repairs-alignments">
                        <a>Frame Repair</a>
                      </Link>
                    </h3>
                    <p>
                    Precision adjustments to ensure vehicle safety and performance.
                    </p>
                  </div>
                  <Link legacyBehavior href="/services/frame-repairs-alignments">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-card1 four">
                  <img
                    className="services-card-vec"
                    src="assets/images/bg/services-card-vec.png"
                    alt=""
                  />
                  <div className="icon">
                    <img src="assets/images/icon/veterinary2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/services/paint-repair">
                        <a>Paint Repair</a>
                      </Link>
                    </h3>
                    <p>
                    Precision adjustments to ensure vehicle safety and performance.
                    </p>
                  </div>
                  <Link legacyBehavior href="/services/paint-repair">
                    <a className="more-btn">
                      More Details
                      <img src="assets/images/icon/btn-arrow1.svg" alt="" />
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        </div>
    </div>
  );
}

export default OtherServiceSlide;
