import Link from "next/link";
import React from "react";
import imageUrlBuilder from '@sanity/image-url';
import { getClient } from '~/lib/sanity.client'

function Breadcrumb({ pageName = "Page Name", pageTitle = "Page Title", img }) {

  const client = getClient(undefined)
  const builder = imageUrlBuilder(client);
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
              <img
                className="img-fluid"
                src={img ? builder.image(img).url() : ""}
                alt=""
              />
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
              <img
                className="img-fluid"
                src={img ? builder.image(img).url() : ""}
                alt={img ? img.alt : ''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
