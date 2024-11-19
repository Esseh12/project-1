import { Link } from "react-router-dom";

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
                      src="/images/mcb/default-album/logo-mcb-caravelle-red.svg"
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

export default MobileMenu;
