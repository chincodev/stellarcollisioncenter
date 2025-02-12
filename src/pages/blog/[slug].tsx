import Link from "next/link";
import React from "react";
import BlogCategoryWidget from "../../components/blog/BlogCategoryWidget";
import BlogRecentPostWidget from "../../components/blog/BlogRecentPostWidget";
import BlogTagWidget from "../../components/blog/BlogTagWidget";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Layout from "../../components/Layout";

function BlogDetailsPage() {
  return (
    <></>
    // <Layout>
    //   <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
    //   <div className="blog-details-pages pt-120 mb-120">
    //     <div className="container">
    //       <div className="row g-lg-4 gy-5 justify-content-center mb-70">
    //         <div className="col-lg-8">
    //           <div className="blog-details-wrap mb-120">
    //             <div className="post-thum">
    //               <img
    //                 className="img-fluid"
    //                 src="assets/images/blog/blog-dt-img.png"
    //                 alt="blog-dt-img"
    //               />
    //               <div className="category">
    //                 <Link legacyBehavior href="/blog-grid">
    //                   <a>Medical Care</a>
    //                 </Link>
    //               </div>
    //             </div>
    //             <div className="blog-meta">
    //               <ul>
    //                 <li>
    //                   <Link legacyBehavior href="/blog-grid">
    //                     <a>August 12, 2022</a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href="/blog-grid">
    //                     <a>By, Nikon Brook</a>
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </div>
    //             <h2 className="post-title">
    //               Luctus justo quis feugiat lacus orcha ornare auguelon Integer
    //               gon form together nicelon.
    //             </h2>
    //             <div className="post-content">
    //               <p>
    //                 Pellentesque maximus augue orci, quis congue purus iaculison
    //                 id. Maecenas eu lorem quisesdoi massal molestie vulputate in
    //                 sitagi amet diam. Cras eu odio sit amet ipsum cursus for
    //                 that gone pellentesquea. thisaton Vestibulum ut aliquet
    //                 risus. In hac habitasse plateajoa dictumst. Nuncet posuere
    //                 scelerisque justo in accumsan.Pellentesque maximus augue
    //                 orci, quis congue purus iaculison id. Maecenas eu lorem
    //                 quisesdoi massal molestie vulputate in sitagi amet diam.
    //                 Cras eu odio sit amet ipsum cursus for that gone
    //                 pellentesquea. thisaton Vestibulum ut aliquet risus. In hac
    //                 habitasse plateajoa dictumst. Nuncet posuere scelerisque
    //                 justo in accumsan.
    //               </p>
    //               <blockquote>
    //                 <p>
    //                   <sup>
    //                     <img
    //                       src="assets/images/icon/quage-icon-top.svg"
    //                       alt="image"
    //                     />
    //                   </sup>{" "}
    //                   Integer quis libero semper, interdum odio non, consequat
    //                   sem. Qui woner pretium, quamtenti utendi lacinianti
    //                   ultricies, est urna cursus purus, ut tristique purusenali
    //                   pretium, quam ut laciniaun est urna{" "}
    //                   <sub>
    //                     <img
    //                       src="assets/images/icon/quage-icon-btm.svg"
    //                       alt="image"
    //                     />
    //                   </sub>
    //                 </p>
    //                 <cite>Ezekiel Miles</cite>
    //               </blockquote>
    //               <p>
    //                 Pellentesque maximus augue orci, quis congue purus iaculison
    //                 id. Maecenas eu lorem quisesdoi massal molestie vulputate in
    //                 sitagi amet diam. Cras eu odio sit amet ipsum cursus for
    //                 that gone pellentesquea. thisaton Vestibulum ut aliquet
    //                 risus. In hac habitasse plateajoa dictumst. Nuncet posuere
    //                 scelerisque justo in accumsan.Pellentesque maximus augue
    //                 orci, quis congue purus iaculison id. Maecenas eu lorem
    //                 quisesdoi massal molestie vulputate in sitagi amet diam.
    //                 Cras eu odio sit amet ipsum
    //               </p>
    //               <div className="row g-4 align-items-center mb-10 pt-10">
    //                 <div className="col-lg-6">
    //                   <h2>Luctus justo quis feugiat</h2>
    //                   <p>
    //                     Pellentesque maximus augue orci, quis congue purus
    //                     iaculison id. Maecenas eu lorem quisesdoi massal
    //                     molestie vulputate in sitagi amet diam. Cras eu odio sit
    //                     amet ipsum cursus for thata gone pellentesquea. thisaton
    //                     Vestibulum ut aliquet risus. Inagi hac habitasse
    //                     plateajoa dictumst. Nuncet posuere scelerisque justo in
    //                     accumsan.Pellentesque maximus augue orci, quisento
    //                     congue purus iaculison id. Maecenas eu lorem quisesdoi
    //                     ameti
    //                   </p>
    //                 </div>
    //                 <div className="col-lg-6">
    //                   <img
    //                     className="img-fluid"
    //                     src="assets/images/blog/blog-dt-img2.png"
    //                     alt=""
    //                   />
    //                 </div>
    //               </div>
    //               <h2>
    //                 Luctus justo quis feugiat lacus orcha ornare auguelon
    //                 Integer gon form together nicelon.
    //               </h2>
    //               <p>
    //                 Pellentesque maximus augue orci, quis congue purus iaculison
    //                 id. Maecenas eu lorem quisesdoi massal molestie vulputate in
    //                 sitagi amet diam. Cras eu odio sit amet ipsum cursus for
    //                 that gone pellentesquea. thisaton Vestibulum ut aliquet
    //                 risus. In hac habitasse plateajoa dictumst. Nuncet posuere
    //                 scelerisque justo in accumsan.Pellentesque maximus augue
    //                 orci, quis congue purus iaculison id. Maecenas eu lorem
    //                 quisesdoi massal molestie vulputate in sitagi amet diam.
    //                 Cras eu odio sit amet ipsum cursus for that gone
    //                 pellentesquea. thisaton Vestibulum ut aliquet risus. In hac
    //                 habitasse plateajoa dictumst. Nuncet posuere scelerisque
    //                 justo in accumsan.
    //               </p>
    //             </div>
    //             <div className="blog-tag-social-area">
    //               <div className="bolg-tag">
    //                 <ul>
    //                   <li>
    //                     <Link legacyBehavior href="/blog-grid">
    //                       <a>#Pet Care</a>
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link legacyBehavior href="/blog-grid">
    //                       <a>#Dog Walking</a>
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link legacyBehavior href="/blog-grid">
    //                       <a>#Medical Care</a>
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link legacyBehavior href="/blog-grid">
    //                       <a>#Pet Bording</a>
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="social-area">
    //                 <span>Share:</span>
    //                 <ul className="social-link d-flex align-items-center">
    //                   <li>
    //                     <a href="https://www.facebook.com/">
    //                       <i className="bx bxl-facebook" />
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="https://twitter.com/">
    //                       <i className="bx bxl-twitter" />
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="https://www.pinterest.com/">
    //                       <i className="bx bxl-pinterest-alt" />
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="https://www.instagram.com/">
    //                       <i className="bx bxl-instagram" />
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-4">
    //           <div className="widget-area">
    //             <BlogCategoryWidget />
    //             <BlogRecentPostWidget />
    //             <BlogTagWidget />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
  );
}

export default BlogDetailsPage;
