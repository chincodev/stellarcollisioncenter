import Link from "next/link";
import React from "react";
import getImageUrl from "../GetImageUrl";

function Breadcrumb({ pageName = "Page Name", pageTitle = "Page Title", img }) {

  return (
    <div className="inner-page-banner">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-lg-6 align-items-center">
            <div className="banner-content">
              <h1>{pageTitle}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link legacyBehavior href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="banner-img d-lg-none d-block">
              {
                img && <img
                  className="img-fluid"
                  src={getImageUrl(img)}
                  alt={img.alt}
                />
              }
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img d-lg-block d-none">
              <div className="banner-img-bg">
                <img
                  className="img-fluid"
                  src="/assets/images/bg/inner-banner-vec.png"
                  alt=""
                />
              </div>
              {
                img && <img
                  className="img-fluid"
                  src={getImageUrl(img)}
                  alt={img.alt}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
