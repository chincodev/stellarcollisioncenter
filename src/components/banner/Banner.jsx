import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import getImageUrl from '../../components/GetImageUrl'
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function Banner2(props) {

  function lastWord(words) {
    var n = words.split(" ");
    return n[n.length - 1];

}
  const bannerSlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 12,
      effect: "fade",
      loop: false,
      speed: 1500,
      autoplay: {
        delay: 1200000,
      },
      pagination: {
        el: ".swiper-pagination121",
        clickable: true,
      },
    };
  }, []);
  return (
    <div className="hero2">
      <div className="left-sidebar">
        <div className="swiper-pagination121" />
      </div>
      <Swiper {...bannerSlider} className="swiper hero2-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="hero-wrapper">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h6>{props.subtitle}</h6>
                      <h1>
                        {props.title.replace(lastWord(props.title), '')} <span>{lastWord(props.title)}</span>
                      </h1>
                      <div className="btn-group">
                        <Link legacyBehavior href="/">
                          <a className="primary-btn2">{props.buttonText}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <div className="hero-img">
                      <img src={getImageUrl(props.picture)} alt={props.picture.alt} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="right-sidebar" />
    </div>
  );
}

export default Banner2;
