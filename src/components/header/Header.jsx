import { isEmpty } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  mobileMenuState: false,
  navState: false,
  scrollY: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "home":
      return { ...state, activeMenu: "home" };
    case "blog":
      return { ...state, activeMenu: "blog" };
    case "shop":
      return { ...state, activeMenu: "shop" };
    case "services":
      return { ...state, activeMenu: "services" };
    case "pages":
      return { ...state, activeMenu: "pages" };
    case "mobileMenu":
      return { ...state, mobileMenuState: action.isMobileMenu };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      throw new Error();
  }
}

function Header(props) {
  const { title, navId, items, _id } = props.mainNav
  const currentRoute = useRouter().asPath;
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className={
        state.scrollY > 150
          ? "header-area style-2 sticky"
          : "header-area style-2"
      }
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="img-fluid"
          
                src="/assets/images/header2-logo.png"
              />
            </a>
          </Link>
        </div>
        <div
          className={
            state.mobileMenuState === true ? "main-menu show-menu" : "main-menu"
          }
        >
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <Link legacyBehavior href="/">
                <a>
                  <img alt="image" src="/assets/images/header2-logo.png" />
                </a>
              </Link>
            </div>
            <div className="menu-close-btn">
              <i
                className="bi bi-x-lg"
                onClick={() =>
                  dispatch({ type: "mobileMenu", isMobileMenu: false })
                }
              />
            </div>
          </div>
          <ul className="menu-list">
                
            {
              items && Array.isArray(items) && items.length > 0 && items.map(x => 
                 !x.items ? (
                    <li className={currentRoute === "/"+x.slug.current.replace('home', '') ? 'active' : ''}>
                    <Link legacyBehavior href={'/'+x.slug.current.replace('home', '')}>
                      <a>{x.title}</a>
                    </Link>
                  </li>
                ) : (
                  <li className={currentRoute.includes("/services") ? 'active menu-item-has-children' : 'menu-item-has-children'}>
              <Link legacyBehavior href={`/${x.slug.current.replace('home', '')}`}>
                <a>{x.title}</a>
              </Link>
              <i
                className="bi bi-plus dropdown-icon"
                onClick={() => dispatch({ type: "services" })}
              />
              <ul
                className={
                  state.activeMenu === "services"
                    ? "sub-menu  d-block"
                    : "sub-menu d-xl-block d-none"
                }
              >
                {
                  x.items.map(y => <li className={currentRoute === `/${x.slug.current}/${y.slug.current}` ? 'active' : ''}>
                  <Link legacyBehavior passHref href={`/${x.slug.current}/${y.slug.current}`}>
                    <a>{y.short_title}</a>
                  </Link>
                </li>)
                }
              </ul>
            </li>
              )
                
              )
            }
            {/* <li className={currentRoute === "/" ? 'active' : ''}>
              <Link legacyBehavior href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={currentRoute === "/about" ? 'active' : ''}>
              <Link legacyBehavior href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={currentRoute.includes("/services") ? 'active menu-item-has-children' : 'menu-item-has-children'}>
              <Link legacyBehavior href="#">
                <a>Services</a>
              </Link>
              <i
                className="bi bi-plus dropdown-icon"
                onClick={() => dispatch({ type: "services" })}
              />
              <ul
                className={
                  state.activeMenu === "services"
                    ? "sub-menu  d-block"
                    : "sub-menu d-xl-block d-none"
                }
              >
                <li className={currentRoute === "/services/collision-repair" ? 'active' : ''}>
                  <Link legacyBehavior href="/services/collision-repair">
                    <a>Collision Repair</a>
                  </Link>
                </li>
                <li className={currentRoute === "/services/dent-repair-and-removal" ? 'active' : ''}>
                  <Link legacyBehavior href="/services/dent-repair-and-removal">
                    <a>Dent Repair</a>
                  </Link>
                </li>
                <li className={currentRoute === "/services/bumper-repair" ? 'active' : ''}>
                  <Link legacyBehavior href="/services/bumper-repair">
                    <a>Bumper Repair</a>
                  </Link>
                </li>
                <li className={currentRoute === "/services/auto-glass-repair" ? 'active' : ''}>
                  <Link legacyBehavior href="/services/auto-glass-repair">
                    <a>Auto Glass Repair</a>
                  </Link>
                </li>
                <li className={currentRoute === "/services/paint-repair" ? 'active' : ''}>
                  <Link legacyBehavior href="/services/paint-repair">
                    <a>Paint Repair</a>
                  </Link>
                </li>
                <li className={currentRoute === "/services/auto-care" ? 'active' : ''}>
                  <Link legacyBehavior href="/services/auto-care">
                    <a>Auto Care</a>
                  </Link>
                </li>
                <li className={currentRoute === "/services/frame-repairs-alignments" ? 'active' : ''}>
                  <Link legacyBehavior href="/services/frame-repairs-alignments">
                    <a>Frame Repair</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={currentRoute === "/faq" ? 'active' : ''}>
              <Link legacyBehavior href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li className={currentRoute === "/contact" ? 'active' : ''}>
              <Link legacyBehavior href="/contact">
                <a>Contact</a>
              </Link>
            </li> */}
          </ul>
          <div className="for-mobile-menu d-lg-none d-block">
            <div className="hotline mb-5">
              <div className="hotline-info">
                <span>Click To Call</span>
                <h6>
                  
                  <a href={`tel:${props.phone}`}>{props.phone}{" "}</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="hotline-info">
            <span>Call Us Now</span>
            <h6>
             
            <a href={`tel:${props.phone}`}>
                {props.phone}{" "}</a>
            </h6>
          </div>
          <div className="sidebar-button mobile-menu-btn">
            <i
              className="bi bi-list"
              onClick={() =>
                dispatch({ type: "mobileMenu", isMobileMenu: true })
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
