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
    <div className="desktop-menu d-none d-lg-block d-xl-block header-home">
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
                  </div>
                </div>
                {/* Top part ending */}
              </div>
            </div>
          </div>
        </div>
        {/* bottom part starting  */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          {children}
        </nav>
        {/* bottom part ending*/}
      </div>
    </div>
  );
};

DesktopMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesktopMenu;
