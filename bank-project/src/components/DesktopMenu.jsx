import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const DesktopMenu = ({ children }) => {
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
    <div className="desktop-menu d-none d-lg-block d-xl-block anim-header-home">
      <div className="nav-container">
        <div className="top-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {/* top part starting */}
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
                    {/* CHild component should go here */}
                  </div>
                </div>
                {/* Top part ending */}
              </div>
            </div>
          </div>
        </div>
        {/* bottom part starting  */}
        <div className="navigation">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
              <div className="collapse navbar-collapse " id="main_nav">
                <div
                  className="logo"
                  style={{
                    visibility: "visible",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <a className="navbar-brand main" href="#"></a>
                  <a href="/">
                    <img
                      src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
                      //sf-size={2255}
                      data-sf-ec-immutable=""
                      alt=""
                      width={40}
                      className="sf-immutable-selected"
                    />
                  </a>
                </div>
                {children}
                {/* Side Button */}
                <ul
                  className="navbar-nav button"
                  style={{
                    visibility: "visible",
                  }}
                >
                  {/* Internet Banking */}
                  <li className="nav-item ib">
                    <div className="btn-group">
                      <a
                        className="nav-link px-3"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="icon-ib" style={{ fontSize: 20 }} />
                        <small
                          style={{ lineHeight: "10px", fontSize: "80%" }}
                          className=""
                        >
                          Internet Banking
                        </small>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div className="title">
                          <h4>Internet Banking</h4>
                        </div>
                        <ul className="buttons">
                          <li className="btn-primary">
                            <a
                              href="/T001/banking.html"
                              className="dropdown-item"
                              target="_blank"
                            >
                              Login
                            </a>
                          </li>
                        </ul>
                        <ul className="more-links mt-4">
                          <li>
                            <a href="../../security-centre.html">
                              <i className="icon-chevron-right" /> Protect
                              yourself online
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* bottom part ending*/}
      </div>
    </div>
  );
};

DesktopMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesktopMenu;
