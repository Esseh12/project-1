import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const MobileMenu = () => (
  <div className="mobile-menu d-block d-lg-none d-xl-none">
    <div className="main-navigation">
      <div className="navbar-level">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="univers">
                <div className="logo logo-mobile">
                  <Link to="/">
                    <img
                      src="images/mcb/default-album/logo-mcb-caravelle-red.svg"
                      alt="MCB Logo"
                      width={40}
                      className="sf-immutable-selected"
                    />
                  </Link>
                </div>
                <div className="univers-option">
                  <div className="btn-group">
                    <a className="nav-link px-3" data-bs-toggle="dropdown">
                      <i className="icon-ib" style={{ fontSize: 20 }} />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <h4>Internet Banking</h4>
                      <ul className="buttons">
                        <li className="btn-primary">
                          <a
                            href="/T001/banking.html"
                            className="dropdown-item"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                      <ul className="more-links mt-4">
                        <li>
                          <Link to="/security-centre">
                            <i className="icon-chevron-right" /> Protect
                            yourself online
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="ma5menu__toggle" type="button">
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 100 100"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="burger-wrapper"
                    >
                      <g
                        id="Artboard-Copy-2"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                      >
                        <g
                          id="Group"
                          transform="translate(12.000000, 29.000000)"
                          fillRule="nonzero"
                          strokeWidth="4"
                        >
                          <path
                            className="line"
                            id="line-middle"
                            d="M13,20 L63,20"
                            stroke="#ffffff"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            className="line"
                            id="line-top"
                            d="M63,1 L13.347708,1 C4.449236,1 0,4.16666667 0,10.5 C0,16.8333333 4.449236,20 13.347708,20 L59,20"
                            stroke="#ffffff"
                          ></path>
                          <path
                            className="line"
                            id="line-bottom"
                            d="M42,68 L75,68 C81.6666667,67 85,63.8333333 85,58.5 C85,53.1666667 81.6666667,50 75,49 L30,49"
                            transform="translate(-13.000000, -29.000000)"
                            stroke="#ffffff"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DesktopMenu = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="desktop-menu d-none d-lg-block d-xl-block header-home">
      <div className="nav-container">
        <div className="top-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between">
                  <ul id="nav" className="nav-content ">
                    <li className={activeLink === "/" ? "active" : ""}>
                      <Link
                        to="/"
                        onClick={() => {
                          setActiveLink("/");
                          scrollToTop();
                        }}
                      >
                        Personal
                      </Link>
                    </li>
                    <li className={activeLink === "/private" ? "active" : ""}>
                      <Link
                        to="https://private.mcb.mu/"
                        target="_blank"
                        onClick={() => {
                          setActiveLink("/private");
                          scrollToTop();
                        }}
                      >
                        Private
                      </Link>
                    </li>
                    <li className={activeLink === "/sme" ? "active" : ""}>
                      <Link
                        to="/sme"
                        onClick={() => {
                          setActiveLink("/sme");
                          scrollToTop();
                        }}
                      >
                        SME
                      </Link>
                    </li>
                    <li className={activeLink === "/corporate" ? "active" : ""}>
                      <Link
                        to="/corporate"
                        onClick={() => {
                          setActiveLink("/corporate");
                          scrollToTop();
                        }}
                      >
                        Corporate
                      </Link>
                    </li>
                    <li
                      className={
                        activeLink === "/institutional" ? "active" : ""
                      }
                    >
                      <Link
                        to="/institutional"
                        onClick={() => {
                          setActiveLink("/institutional");
                          scrollToTop();
                        }}
                      >
                        Institutional
                      </Link>
                    </li>
                    <li className={activeLink === "/mcb-group" ? "active" : ""}>
                      <Link
                        to="https://mcbgroup.com/"
                        target="_blank"
                        onClick={() => {
                          setActiveLink("/mcb-group");
                          scrollToTop();
                        }}
                      >
                        MCB Group
                      </Link>
                    </li>
                  </ul>
                  <div className="link-icon d-flex flex-row">
                    <ul className="mx-2">
                      <li>
                        <Link to="/contact-us">
                          <i className="fas fa-thin fa-file-lines text-light" />
                          <span>Contact us</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="main_nav">
              <div className="logo">
                <Link to="/">
                  <img
                    src="images/mcb/default-album/logo-mcb-caravelle-red.svg"
                    alt="MCB Logo"
                    width={40}
                    className="sf-immutable-selected"
                  />
                </Link>
              </div>
              <ul className="navbar-nav button">
                <li className="nav-item ib">
                  <div className="btn-group">
                    <a className="nav-link px-3" data-bs-toggle="dropdown">
                      <i className="icon-ib" style={{ fontSize: 20 }} />
                      <small style={{ lineHeight: 10, fontSize: "80%" }}>
                        Internet Banking
                      </small>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <h4>Internet Banking</h4>
                      <ul className="buttons">
                        <li className="btn-primary">
                          <a
                            href="/T001/banking.html"
                            className="dropdown-item"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                      <ul className="more-links mt-4">
                        <li>
                          <Link to="/security-centre">
                            <i className="icon-chevron-right" /> Protect
                            yourself online
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header id="header">
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Header;
