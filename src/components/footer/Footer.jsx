import Link from "next/link";
import React from "react";

function Footer1(props) {
  return (
    <footer>
      <div className="container">
        <div className="row pt-90 pb-90 justify-content-center">
          <div className="col-lg-3 col-sm-6 order-lg-1 order-2 d-flex justify-content-sm-start justify-content-start">
            <div className="footer-items contact ">
              <h3>{props.contactsTitle}</h3>
              <div className="hotline mb-30">
                <div className="hotline-icon filter-white">
                  <img src="/assets/images/icon/phone-icon.svg" alt="" />
                </div>
                <div className="hotline-info">
                  <h6 className="">
                    <a href={`tel:${props.phone}`}>{props.phone}</a>
                  </h6>
                </div>
              </div>
              <div className="email mb-30">
                <div className="email-icon filter-white">
                  <img src="/assets/images/icon/envelope.svg" alt="" />
                </div>
                <div className="email-info">
                  <h6 className="">
                    <a href={`mailto:${props.email}`}>{props.email}</a>
                  </h6>
                </div>
              </div>
              <div className="email">
                <div className="email-icon filter-white">
                  <img src="/assets/images/icon/location.svg" alt="" />
                </div>
                <div className="email-info">
                  <h6 className="mb-10">
                    <a>{props.address}</a>
                  </h6>
                  <h6>
                    <a>{props.address_line_2}</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 order-lg-1 order-2 d-flex justify-content-lg-start justify-content-sm-end justify-content-start">
          <div className="footer-items contact ">
              <h3>{props.footerLeftNavigationTitle}</h3>
              {
                props.footerLeftNavigation && props.footerLeftNavigation.items && Array.isArray(props.footerLeftNavigation.items) && props.footerLeftNavigation.items.length > 0 && props.footerLeftNavigation.items.map(x => <div className="hotline mb-20">
                  <div className="hotline-info">
                    <h6 className="">
                    <Link legacyBehavior href={"/"+x.slug.current}>
                      <a>{x.title}</a>
                    </Link>
                    </h6>
                  </div>
                </div>)
              }
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 order-lg-1 order-2 d-flex justify-content-sm-start justify-content-start">
          <div className="footer-items contact ">
              <h3>{props.footerRightNavigationTitle}</h3>
              {
                props.footerRightNavigation && props.footerRightNavigation.items && Array.isArray(props.footerRightNavigation.items) && props.footerRightNavigation.items.length > 0 && props.footerRightNavigation.items.map(x => <div className="hotline mb-20">
                  <div className="hotline-info">
                    <h6 className="">
                    <Link legacyBehavior href={"/"+x.slug.current}>
                      <a>{x.title}</a>
                    </Link>
                    </h6>
                  </div>
                </div>)
              }
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-end justify-content-start order-3">
            <div className="footer-items opening-time">
              <h3>{props.openingHoursTitle}</h3>
              <h6 className="mb-25">{props.opening_hours_mondday_friday}</h6>
              <h6 className="mb-25">{props.opening_hours_saturday}</h6>
              <h6>{props.opening_hours_sunday}</h6>
            </div>
          </div>
        </div>
        <div className="row border-top">
          <div className="col-lg-6">
            <div className="copyright-area">
            <p>
                {props.copyright}
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <ul className="footer-btm-menu">
              {
                props.footerBottomNavigation && props.footerBottomNavigation.items && Array.isArray(props.footerBottomNavigation.items) && props.footerBottomNavigation.items.length > 0 && props.footerBottomNavigation.items.map(x => 
                  <li>
                    <Link legacyBehavior href={"/"+x.slug.current}>
                      <a>{x.title}</a>
                    </Link>
                  </li>
               )
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
