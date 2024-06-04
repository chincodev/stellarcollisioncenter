import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PostBody from '../PostBody'
import { getClient } from '~/lib/sanity.client'
import imageUrlBuilder from '@sanity/image-url';
import { isEmpty } from "lodash";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Service(props) {
  const client = getClient(undefined)
  const builder = imageUrlBuilder(client);

  const imageProps = builder.image(props.image);
  const iconProps = builder.image(props.icon);

  const serviceSlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2200,
      },
      navigation: {
        nextEl: ".next-btn-2",
        prevEl: ".prev-btn-3",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        480: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 5,
        },
      },
    };
  }, []);
  return (
    <div className="h2-services-area">
     
      {/* <div className="services-top">
        <Swiper {...serviceSlider} className="swiper h2-services-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="services-card daycare-card">
                <div className="card-vector">
                </div>
                <div className="services-icon">
                  <img src="assets/images/icon/mechanics-wrench-svgrepo-com.svg" width={100} alt="" />
                </div>
                <div className="services-content">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Collision Repair</a>
                    </Link>
                  </h3>
                  <p>
                    Restoring vehicles to pre-accident condition with precision care.
                  </p>
                  <div className="more-btn">
                    <Link legacyBehavior href="/shop-details">
                      <a>
                        More Details
                        <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="services-card grooming-card">
                <div className="card-vector">
                </div>
                <div className="services-icon">
                <img src="assets/images/icon/vetenary3.svg" width={100} alt="" />
                </div>
                <div className="services-content">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Dent Repair</a>
                    </Link>
                  </h3>
                  <p>
                    Expertly removing your vehicles dents for a quality seamless exterior finish.
                  </p>
                  <div className="more-btn">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        More Details
                        <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="services-card boarding-card">
                <div className="card-vector">
                </div>
                <div className="services-icon">
                  <img src="assets/images/icon/repair-shop-svgrepo-com.svg" width={100} alt="" />
                </div>
                <div className="services-content">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Bumper Repair</a>
                    </Link>
                  </h3>
                  <p>
                    Renewing bumpers with seamless fixes for a flawless look.
                  </p>
                  <div className="more-btn">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        More Details
                        <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="services-card vaterinary-card">
                <div className="card-vector">
                </div>
                <div className="services-icon">
                <img src="assets/images/icon/window-svgrepo-com.svg" width={100} alt="" />
                </div>
                <div className="services-content">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Glass Repair</a>
                    </Link>
                  </h3>
                  <p>
                    Swift, Safe, and reliable repairs for cracked or damaged vehicle glass.
                  </p>
                  <div className="more-btn">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        More Details
                        <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="services-card vaterinary-card">
                <div className="card-vector">
                </div>
                <div className="services-icon">
                <img src="assets/images/icon/paint-bucket-svgrepo-com.svg" width={100} alt="" />
                </div>
                <div className="services-content">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Paint Repair</a>
                    </Link>
                  </h3>
                  <p>
                    Professional touch-ups to restore paintwork to perfection.
                  </p>
                  <div className="more-btn">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        More Details
                        <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="services-card vaterinary-card">
                <div className="card-vector">
                </div>
                <div className="services-icon">
                <img src="assets/images/icon/car-breakdown-svgrepo-com.svg" width={100} alt="" />
                </div>
                <div className="services-content">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Auto Care</a>
                    </Link>
                  </h3>
                  <p>
                    Comprehensive maintenance to keep vehicles running smoothly.
                  </p>
                  <div className="more-btn">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        More Details
                        <img src="assets/images/icon/h2-btn-arrow.svg" alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="services-card vaterinary-card">
                <div className="card-vector">
                </div>
                <div className="services-icon">
                  <img src="assets/images/icon/mechanic-svgrepo-com.svg" width={100} alt="" />
                </div>
                <div className="services-content">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Frame Repair</a>
                    </Link>
                  </h3>
                  <p>
                    Precision adjustments to ensure vehicle safety and performance.
                  </p>
                  <div className="more-btn">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        {" "}
                        More Details
                        <img src="assets/images/icon/h2-btn-arrow.svg"  alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div> */}
      <div className="services-btm pt-120 mb-120">
        <div className="container">
          <div className="row">
           
            {
              !isEmpty(props.image) ? (
                <>
                  {
                    props.imagePosition === 'left' && (
                      <>
                        <div className="col-lg-5">
                          <div className="services-img">
                            {/* <div className="services-img-bg">
      
                              <img src="assets/images/icon/h2-services-img-bg.svg" alt="" />
                            </div> */}
      
                            <img className="img-fluid" src={imageProps.url()} alt={props.image.alt} />
                          
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div>
                            {!isEmpty(props.icon) && <img src={builder.image(props.icon)} alt={props.icon.alt} />}
                            <PostBody content={props.contentBlock} />
                          </div>
                        </div>
                      </>
                    )
                  }
                  {
                    props.imagePosition === 'right' && (
                      <>
                        <div className="col-lg-7">
                          <div>
                            {!isEmpty(props.icon) && <img src={builder.image(props.icon)} alt={props.icon.alt} />}
                            <PostBody content={props.contentBlock} />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="services-img">
                            {/* <div className="services-img-bg">
      
                              <img src="assets/images/icon/h2-services-img-bg.svg" alt="" />
                            </div> */}
      
                            <img className="img-fluid" src={imageProps.url()} alt={props.image.alt} />
                          
                          </div>
                        </div>
                      </>
                    )
                  }
                  {
                    props.imagePosition === 'top' && (
                      <>
                        <div className="col-lg-12">
                          <div className="services-img">
                            {/* <div className="services-img-bg">
      
                              <img src="assets/images/icon/h2-services-img-bg.svg" alt="" />
                            </div> */}
      
                            <img className="img-fluid" src={imageProps.url()} alt={props.image.alt} />
                          
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div>
                            {!isEmpty(props.icon) && <img src={builder.image(props.icon)} alt={props.icon.alt} />}
                            <PostBody content={props.contentBlock} />
                          </div>
                        </div>
                      </>
                    )
                  }
                 
                  {
                    props.imagePosition === 'bottom' && (
                      <>
                        <div className="col-lg-12">
                          <div>
                            {!isEmpty(props.icon) && <img src={builder.image(props.icon)} alt={props.icon.alt} />}
                            <PostBody content={props.contentBlock} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="services-img">
                            {/* <div className="services-img-bg">
      
                              <img src="assets/images/icon/h2-services-img-bg.svg" alt="" />
                            </div> */}
      
                            <img className="img-fluid" src={imageProps.url()} alt={props.image.alt} />
                          
                          </div>
                        </div>
                      </>
                    )
                  }
                </>
              ) : (
                <>
                  <div className="col-lg-12">
                    <div>
                      {!isEmpty(props.icon) && <img src={builder.image(props.icon)} alt={props.icon.alt} />}
                      <PostBody content={props.contentBlock} />
                    </div>
                  </div>
                </>
              )
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
