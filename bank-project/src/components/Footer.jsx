// image at footer not rendering and icon a little bit to the left
import { useEffect } from "react";
import PropTypes from "prop-types";

const Footer = () => {
  useEffect(() => {
    // This script dynamically sets the copyright year
    const date = new Date();
    const year = date.getFullYear();
    const copyrightText = `© ${year} MCB, part of <a href="https://mcbgroup.com" target="_blank"><strong>MCB Group Ltd</strong></a>`;
    document.getElementById("copyright").innerHTML = copyrightText;
  }, []);

  return (
    <footer
      id="footer"
      className="footer-top-border without-border bg-color-light-scale-1 pt-0 mt-0"
    >
      {/* Contact Section */}
      <div className="check-ul-styling">
        <div>
          <section
            className="call-to-action call-to-action-default contact"
            style={{ background: "rgba(239, 239, 239, 1)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-9 col-lg-9">
                  <div className="call-to-action-content-left">
                    <h2 className="text-7 font-weight-normal mb-2">
                      <a href="tel:2026060" data-sf-ec-immutable="">
                        202 60 60
                      </a>
                    </h2>
                    <p className="mb-0">
                      We&#39;re available 24/7 to assist with any queries.
                    </p>
                  </div>
                </div>

                <div className="col-sm-3 col-lg-3">
                  <div
                    className="d-flex justify-content-center"
                    style={{ textAlign: "left" }}
                  >
                    <a
                      href="https://wa.me/2302026060"
                      target="_blank"
                      id="whatsapp-btn"
                      data-sf-ec-immutable=""
                    >
                      <img
                        src="/images/mcb/personal/assets/whatsappc2c5.png?sfvrsn=44901c69_2"
                        height={60}
                        style={{ marginLeft: 10, marginRight: 10 }}
                        width={60}
                        alt=""
                      />
                    </a>
                    <a
                      href="https://m.me/mcb.mauritius"
                      target="_blank"
                      id="messenger-btn"
                      data-sf-ec-immutable=""
                    >
                      <img
                        src="/images/mcb/personal/assets/messengerc5cd.png?sfvrsn=db6d2cf3_1"
                        height={60}
                        style={{ marginLeft: 10, marginRight: 10 }}
                        width={60}
                        alt=""
                      />
                    </a>
                    <a
                      id="contact-btn"
                      href="../cdn-cgi/l/email-protection.html#c6a5a9a8b2a7a5b286aba5a4e8abb3"
                      target="_blank"
                    >
                      <img
                        src="/images/mcb/personal/assets/email346f.png?sfvrsn=e06ce0dc_1"
                        height={60}
                        style={{ marginLeft: 10, marginRight: 10 }}
                        width={60}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="row" data-sf-element="Row">
        <div
          id="Footer_T0975117C022_Col00"
          className="sf_colsIn col-lg-12"
          data-sf-element="Column 1"
          data-placeholder-label="Column 1"
        >
          <div
            id="Footer_T0975117C022_Col00"
            className="sf_colsIn container"
            data-sf-element="Container"
            data-placeholder-label="Container"
          ></div>
        </div>
      </div>

      <div
        id="Footer_T0975117C022_Col00"
        className="sf_colsIn container"
        data-sf-element="Container"
        data-placeholder-label="Container"
      >
        <div className="row footer-desktop" data-sf-element="Row">
          <FooterSection
            title="Explore MCB"
            links={[
              { href: "../../about-us.html", text: "About us" },
              {
                href: "https://mcbgroup.com/talent",
                text: "Careers",
                target: "_blank",
              },
              {
                href: "../../about-us/financials-annual-reports.html",
                text: "Financial & Reports",
              },
              { href: "../../../rates-fees.html", text: "Rates & Fees" },
            ]}
          />

          <FooterSection
            title="Tools & Calculators"
            links={[
              {
                href: "../../../tools-calculators/bank-guarantee-authentication.html",
                text: "Bank Guarantee authentication",
              },
              {
                href: "../../../tools-calculators/foreign-exchange-convertor.html",
                text: "Foreign exchange calculator",
              },
              {
                href: "../../../tools-calculators/how-much-can-i-borrow.html",
                text: "How much can I borrow?",
              },
              {
                href: "../../../tools-calculators/monthly-repayment.html",
                text: "Monthly repayment",
              },
              {
                href: "https://app.mcb.mu/app/banking/ways-to-bank/update-your-profile",
                text: "Update your Personal Profile",
                target: "_blank",
              },
            ]}
          />

          <FooterSection
            title="Resources"
            links={[
              {
                href: "../../../resources/adherence-to-fx-global-code.html",
                text: "Adherence to FX Global Code",
              },
              {
                href: "../../../rates-fees/rates-in-html-version.html",
                text: "Bank of Mauritius Template on Fees, Charges & Commissions",
              },
              {
                href: "../../../docs/mcb/default-document-library/MBA-Code-of-Banking-Practice-2016.pdf",
                text: "Code of Ethics & Banking Practice",
              },
              {
                href: "../../../docs/mcb/personal/mcb-complaints-escalation.pdf",
                text: "Complaints Escalation",
              },
              {
                href: "../../../resources/environmental-and-social-risk-management.html",
                text: "Environmental & Social Risk Management",
              },
              {
                href: "../../../resources/libor-transition.html",
                text: "LIBOR Transition",
              },
            ]}
          />

          <FooterSection
            title="Legal & Security"
            links={[
              {
                href: "../../../legal/cookie-policy.html",
                text: "Cookie Policy",
              },
              {
                href: "../../../legal/legal-notice.html",
                text: "Legal Notice",
              },
              {
                href: "../../../security-centre.html",
                text: "Security Centre",
              },
              {
                href: "https://on.mcb.mu/f2388",
                text: "T&C Governing Data Protection and Processing",
                target: "_blank",
              },
            ]}
          />
        </div>
      </div>

      {/* Additional Links */}
      <div className="row mt-50" data-sf-element="Row">
        <FooterAdditionalLink
          href="../../contact-us.html"
          iconClass="fa-file-lines"
          text="Contact Us"
          id="Footer_T0975117C010_Col00"
          className="sf_colsIn col-md-6 col-lg-3 mb-4 mb-lg-0 pb-20"
        />
        <FooterAdditionalLink
          href="../../../locate-us.html"
          iconClass="fa-location-dot"
          text="Find a branch"
          id="Footer_T0975117C010_Col01"
          className="sf_colsIn col-md-6 col-lg-3 mb-4 mb-md-0 pb-20"
        />
        <FooterAdditionalLink
          href="../../help-centre.html"
          iconClass="fa-circle-question"
          text="Need Help?"
          id="Footer_T0975117C010_Col02"
          className="sf_colsIn col-md-6 col-lg-3 mb-4 mb-md-0 pb-20"
        />
        <FooterAdditionalLink
          href="../../../offers/index.html"
          iconClass="fa-star"
          text="Offers & promotions"
          id="Footer_T0975117C010_Col03"
          className="sf_colsIn col-md-6 col-lg-3 pb-20"
        />
      </div>

      {/* Copyright Section */}
      <div className="row mt-50" data-sf-element="Row">
        <div
          className="sf_colsIn col-lg-12"
          data-sf-element="Column 1"
          data-placeholder-label="Column 1"
        >
          <div className="footer-copyright footer-top-border bg-color-light-scale-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
                  <a href="/" className="logo pe-0 pe-lg-1">
                    <img
                      src="/images/mcb/default-album/logo-mcb-color.svg"
                      height="32"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                  <p id="copyright" style={{ textAlign: "right" }}></p>
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
                  <ul className="header-social-icons social-icons">
                    <li className="social-icons-facebook">
                      <a
                        href="https://www.facebook.com/mcb.mauritius/"
                        target="_blank"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f text-2"></i>
                      </a>
                    </li>
                    <li className="social-icons-instagram">
                      <a
                        href="https://www.instagram.com/mcb.mauritius/"
                        target="_blank"
                        title="Instagram"
                      >
                        <i className="icon-instagram text-4"></i>
                      </a>
                    </li>
                    <li className="social-icons-youtube">
                      <a
                        href="https://www.youtube.com/@MCBLtd"
                        target="_blank"
                        title="YouTube"
                      >
                        <i className="icon-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable components with PropTypes validation
const FooterSection = ({ title, links }) => (
  <div className="sf_colsIn col-md-6 col-lg-3 mb-4 mb-lg-0 pb-20">
    <h5 className="text-3 text-color-dark mb-3">{title}</h5>
    <ul className="list list-icons list-icons-sm">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target={link.target || "_self"}
            data-sf-ec-immutable=""
          >
            <em className="fas fa-caret-right" /> {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      target: PropTypes.string,
    })
  ).isRequired,
};

const FooterAdditionalLink = ({ href, iconClass, text, id, className }) => (
  <div
    id={id}
    className={className}
    data-sf-element="Column"
    data-placeholder-label="Column"
  >
    <a href={href} className="d-flex align-items-center">
      <i className={`fas fa-light ${iconClass} fa-xl me-2`} />
      <h5 className="text-3 text-color-dark mb-0">{text}</h5>
    </a>
  </div>
);

FooterAdditionalLink.propTypes = {
  href: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Footer;
