import PersonalHeader from "../Components/Personal-header";
import Footer from "../Components/Footer";

const Personal = () => {
  return (
    <>
      {/* Mirrored from mcb.mu/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:23:50 GMT */}
      <style type="text/css" media="all">
        {`
        #footer {
            margin-top: 0px !important;
        }

        .owl-carousel-top-banner {
            height: 780px !important;
        }

        .link-slider-hp .custom-cards.custom-cards-slider .cards-container {
            background-color: transparent !important;
        }

        .link-slider-hp .custom-cards.custom-cards-slider .cards-container div:has(h2) {
            background-color: transparent !important;
        }

        .link-slider-hp .custom-cards.custom-cards-slider .cards-container:before {
            box-shadow: none !important;
        }

        .owl-carousel-top-banner .description {
            display: none;
        }

        .owl-carousel-top-banner .owl-item .row .col {
            margin-top: -150px
        }

        .link-slider-hp.bg-color-light {
            margin-top: -340px;
            background-color: transparent !important;
        }

        .link-slider-hp h2 {
            color: #ffffff !important;
            font-size: 20px;
            line-height: 24px;
        }

        .link-slider-hp .card .card-body a:nth-child(3) {
            display: none;
        }

        .link-slider-hp .card a:has(h4):hover {
            text-decoration: none !important;
        }

        .link-slider-hp .owl-stage-outer .owl-item .bg-light.p-0.shadow-none {
            background-color: transparent !important;
        }

        .link-slider-hp .owl-stage-outer .owl-item .card {
            background-color: transparent !important;
            margin-right: 10px;
            margin-left: 10px;
        }

        .link-slider-hp .card .card-body {
            background-color: #ffffff !important;
            border: 2px solid #ffffff !important;
            border-radius: 15px !important;
        }

        .link-slider-hp .card .card-title {
            font-size: 20px !important;
        }

        .link-slider-hp .card .link-button {
            display: none;
        }

        .hp-payment .owl-stage-outer .owl-item .bg-light.p-0.shadow-none {
            background-color: transparent !important;
        }

        .hp-payment .owl-stage-outer .owl-item .card {
            background-color: transparent !important;

        }

        .hp-payment .custom-cards-slider {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }

        .hp-payment .custom-cards-slider .cards-container {
            background-color: transparent !important;
            margin: auto !important;
        }

        .hp-payment .custom-cards-slider .cards-container:before {
            box-shadow: none !important;
        }

        .hp-payment .custom-cards-slider .cards-container .owl-carousel {
            margin-bottom: 0px !important;
        }

        .hp-payment .owl-item .card .card-body {
            background-color: transparent !important;
            border-radius: 15px !important;
        }

        .hp-payment .owl-item .card {
            padding-bottom: 20px !important;
        }

        .hp-payment .owl-item .card .card-body img {
            height: auto !important;
            width: 100% !important;
        }

        .hp-payment section .bg-color-light {
            background-color: transparent !important;
        }

        .hp-payment .owl-item .card .card-body .card-title {
            color: #ffffff !important;
            font-size: 17px !important;
        }


        .hp-payment {
            background-image: url(images/mcb/personal/assets/hp-payment-bg.png);
            padding-top: 50px;
            padding-bottom: 50px;
            background-size: cover;
        }

        .hp-payment .payment-text h4,
        .hp-payment .payment-text h2,
        .hp-payment .payment-text p {
            color: #ffffff !important;
        }

        .hp-payment .payment-text .button a {
            background-color: #ffffff !important;
        }

        .hp-payment .owl-carousel.nav-style-1 .owl-nav .owl-next,
        .hp-payment .owl-carousel.nav-style-1 .owl-nav .owl-prev,
        .link-slider-hp .owl-carousel.nav-style-1 .owl-nav .owl-next,
        .link-slider-hp .owl-carousel.nav-style-1 .owl-nav .owl-prev {
            color: #ffffff !important;
        }

        @media only screen and (max-width: 768px) {

            .hp-juice .text-content,
            .hp-payment .payment-text,
            .hp-news,
            .owl-carousel-top-banner h1 {
                text-align: center !important;
            }
        }

        .hp-news.section {
            padding-top: 0px;
        }

        #mcb-juice .title {
            color: #000000 !important;
        }

        @media only screen and (min-width: 768px) {

            .hp-payment h2,
            .hp-juice h2 {
                font-size: 3.1rem !important;
            }
        }

        .hp-news h2 {
            margin-bottom: 0px !important;
        }

        .hp-news.block {
            margin: 0px !important;
            padding: 0px !important;
        }

        .hp-news.block .row.pt-4 {
            padding: 0px !important;
        }

        .hp-news .btn {
            width: auto !important;
        }

        @media only screen and (min-width: 1200px) {
            .hp-treasury-market .card {
                margin: 0px !important;
                height: 460px;
            }

            .hp-treasury-market .card .card-content {
                height: 460px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .hp-currency-convertor .featured-box,
            .hp-currency-convertor .block-currency-convertor {
                height: 370px;
            }

        }

        .hp-offers h2 {
            margin-top: 35px;
        }

        .hp-offers .container.mb-70 {
            margin: 0px !important;
        }

        .hp-offers .sort-destination-loader-showing {
            margin-top: 0px !important;
            padding-top: 0px !important;
        }

        .hp-offers .portfolio-list .owl-item img {
            height: 220px !important;
        }

        .hp-offers .portfolio-list .thumb-info-title {
            max-width: 100% !important;
            bottom: 0% !important;
        }

        @media only screen and (min-width: 992px) {
            .hp-offers .portfolio-list .col-lg-3 {
                width: 33% !important;
            }

            .hp-offers .portfolio-list .owl-item img {
                height: 220px !important;
            }

            .hp-offers .portfolio-list .thumb-info-title {
                max-width: 100% !important;
                bottom: 0% !important;
            }

            .hp-offers .portfolio-list {
                margin-left: -23px;
            }
        }

        @media only screen and (max-width: 992px) {
            .hp-offers .btn-view-all {
                text-align: center;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .hp-hr {
            margin-top: 0px !important;
            margin-bottom: 0px !important;
        }

        .hp-home-loan {
            background-image: url('images/mcb/personal/assets/hp-home-loan.jpg');
            background-size: cover;
        }

        .hp-home-loan .text-content h2 {
            font-size: 3.1rem !important;
            font-family: "Kanit", sans-serif;
        }

        .hp-home-loan .text-content h2,
        .hp-home-loan .text-content p {
            color: #ffffff;
        }

        .hp-loan .img-text-cta .thumb-info-wrapper {
            height: 460px !important;
        }

        .hp-loan .img-text-cta {
            margin-top: 0px !important;
            margin-bottom: 70px !important;
        } `}
        `
      </style>
      <style type="text/css" media="all">
        {`
        .owl-item h1.text-color-light {
            visibility: hidden;
            display: none;
        }
            `}
      </style>
      <link rel="canonical" href="/" />
      <div className="body detail-landing">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMCB2SN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* REUSABLE HEADER COMPONENT */}
        <PersonalHeader />
        {/* END OF REUSABLE HEADER COMPONENT */}
        {/* THIS DIV IS TO BE REMOVED DURING CLEANUP */}
        <div>
          <div role="main" className="main">
            <div
              className="owl-carousel owl-carousel-top-banner owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-vertical-center dots-align-right dots-orientation-portrait custom-dots-style-1 show-dots-hover show-dots-xs nav-style-1 nav-inside nav-inside-plus nav-dark nav-lg nav-font-size-lg show-nav-hover mb-0"
              data-plugin-options="{'autoplayTimeout': 36000000}"
              data-dynamic-height="['650px','650px','650px','550px','500px']"
              style={{ height: 650 }}
            >
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div
                    className="owl-item position-relative overlay overlay-show overlay-op-3"
                    style={{
                      backgroundImage:
                        "url(images/mcb/personal/banners/mcb-main-bannered8f.jpg?sfvrsn=18cbc14f_1)",
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                    }}
                  >
                    <div className="container position-relative z-index-3 h-100">
                      <div className="row align-items-center h-100">
                        <div className="col pb-4">
                          <h1
                            className="text-color-light w-50 w-100-mobile font-weight-medium text-12 line-height-2 mb-2 appear-animation text-decoration-none"
                            data-appear-animation="fadeInUpShorter"
                            data-appear-animation-delay={500}
                            data-plugin-options="{'minWindowWidth': 0}"
                          >
                            Everyday we will help make something happen
                          </h1>
                          <div className="description">
                            <p>&amp;nbsp;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="bg-color-light p-relative z-index-2 link-slider-hp">
              <div
                className="cards custom-cards custom-cards-slider home h-auto pt-5 pb-4 container appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay={100}
              >
                <div className="row bg-color-light cards-container d-flex justify-content-center justify-content-xl-between w-100 mb-5 mx-0 box-shadow-1 p-relative top-0">
                  <div className="col-sm-12 col-md-12 col-xl-12 bg-light p-5 pb-0 shadow-none text-center">
                    <h2 className="title mb-3">
                      Hello there. What are you looking for today?
                    </h2>
                  </div>
                  <div
                    className="owl-carousel owl-theme stage-margin nav-style-1 hp"
                    data-plugin-options="{'items': 4 , 'margin': 0, 'loop': false, 'nav': true, 'dots': false, 'stagePadding': 40,'responsive': {'0': {'items': 1, 'loop':true}, '479': {'items': 1, 'loop':true}, '768': {'items': 2, 'loop':true}, '991': {'items': 3, 'loop':true}}}"
                  >
                    <div className=" bg-light p-0 shadow-none">
                      <div className="card border-radius-0 border-0 shadow-none">
                        <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                          <a href="/personal/loans/home-loan">
                            <img
                              src="images/mcb/default-album/ph_house-line-lighte8bf.png?sfvrsn=49ba69b0_3"
                              height={80}
                              className="w-auto p-0"
                              alt="ph_house-line-light"
                            />
                          </a>
                          <a href="/personal/loans/home-loan">
                            <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                              Buy your first house
                            </h4>
                          </a>
                          <a
                            href="/personal/loans/home-loan"
                            className="font-weight-bold text-uppercase text-decoration-none mt-3"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-light p-0 shadow-none">
                      <div className="card border-radius-0 border-0 shadow-none">
                        <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                          <a href="/personal/loans/educational-loan">
                            <img
                              src="/images/mcb/default-album/cil_education4b9a.png?sfvrsn=97285b76_3"
                              height={80}
                              className="w-auto p-0"
                              alt="cil_education"
                            />
                          </a>
                          <a href="/personal/loans/educational-loan">
                            <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                              Finance your child&#39;s studies
                            </h4>
                          </a>
                          <a
                            href="/personal/loans/educational-loan"
                            className="font-weight-bold text-uppercase text-decoration-none mt-3"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-light p-0 shadow-none">
                      <div className="card border-radius-0 border-0 shadow-none">
                        <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                          <a href="/personal/ways-to-bank/payment-solutions">
                            <img
                              src="/images/mcb/default-album/fluent_payment-20-regular078e.png?sfvrsn=31141dc3_3"
                              height={80}
                              className="w-auto p-0"
                              alt="fluent_payment-20-regular"
                            />
                          </a>
                          <a href="/personal/ways-to-bank/payment-solutions">
                            <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                              Discover our payment solutions
                            </h4>
                          </a>
                          <a
                            href="/personal/ways-to-bank/payment-solutions"
                            className="font-weight-bold text-uppercase text-decoration-none mt-3"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-light p-0 shadow-none">
                      <div className="card border-radius-0 border-0 shadow-none">
                        <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                          <a href="/personal/investments/mcb-mutual-funds">
                            <img
                              src="/images/mcb/default-album/fe_line-chart987a.png?sfvrsn=b7a33998_3"
                              height={80}
                              className="w-auto p-0"
                              alt="fe_line-chart"
                            />
                          </a>
                          <a href="/personal/investments/mcb-mutual-funds">
                            <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                              Invest for your future
                            </h4>
                          </a>
                          <a
                            href="/personal/investments/mcb-mutual-funds"
                            className="font-weight-bold text-uppercase text-decoration-none mt-3"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C030_Col00"
                className="sf_colsIn col-lg-12"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              ></div>
            </div>
          </div>
          <div
            id="Main_C104_Col00"
            className="sf_colsIn container hp-loan"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <section className="img-text-cta">
              <div className="container my-5">
                <div className="row my-lg-5">
                  <div className="col-lg-12">
                    <span className="thumb-info border-all thumb-info-show-button-hover">
                      <span
                        className="thumb-info-wrapper"
                        style={{
                          backgroundImage:
                            "url(images/mcb/personal/assets/hp-home-loan79dd.jpg?sfvrsn=a155643c_3)",
                        }}
                      >
                        <span className="thumb-info-title bg-transparent">
                          <h3 className="card-title mb-4 text-6 font-weight-medium text-light w-50 w-100-mobile">
                            Your new home now even more attainable
                          </h3>
                          <p className="card-text font-weight-medium text-light w-75 w-100-mobile">
                            Get a headstart to your final destination with a
                            Bank Of Africa Home Loan. Acquire that plot of land
                            to build your dream home or renovate your home to
                            create your dream house has never been more
                            accessible.
                          </p>
                          <a
                            href="/personal/loans/home-loan"
                            target="_self"
                            className="btn btn-more text-light d-flex align-items-center ps-0"
                          >
                            <i
                              className="icon icon-arrow-right me-2 text-9"
                              aria-hidden="true"
                            />
                            Learn more
                          </a>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="row hp-payment" data-sf-element="Row">
            <div
              id="Main_C039_Col00"
              className="sf_colsIn col-lg-12"
              data-sf-element="Column 1"
              data-placeholder-label="Column 1"
            >
              <div
                id="Main_C041_Col00"
                className="sf_colsIn container"
                data-sf-element="Container"
                data-placeholder-label="Container"
              >
                <div className="row" data-sf-element="Row">
                  <div
                    id="Main_C042_Col00"
                    className="sf_colsIn col-lg-6 payment-text mb-5 order-2 order-sm-2 order-lg-1"
                    data-sf-element="Column 1"
                    data-placeholder-label="Column 1"
                  >
                    <div className="check-ul-styling">
                      <div>
                        <div>
                          <h2>
                            Your cards. <br />
                            Your choices.
                          </h2>
                          <p>
                            Welcome to a world of convenience, flexibility and
                            offers when you shop, travel and pay with our credit
                            cards.
                          </p>
                          <div className="button mt-25">
                            <a
                              href="/personal/cards/compare-our-credit-cards"
                              className="btn primary"
                            >
                              Explore our credit cards
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Main_C042_Col01"
                    className="sf_colsIn col-lg-6 order-1 order-sm-1 order-lg-2"
                    data-sf-element="Column 2"
                    data-placeholder-label="Column 2"
                  >
                    <section className=" p-relative z-index-2">
                      <div
                        className="cards custom-cards custom-cards-slider home h-auto pt-5 pb-4 container appear-animation animated fadeInUpShorter appear-animation-visible"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay={100}
                        style={{ animationDelay: "100ms" }}
                      >
                        <div className="row bg-color-light cards-container d-flex justify-content-center justify-content-xl-between w-100 mb-5 mx-0 box-shadow-1 p-relative top-0">
                          <div
                            className="owl-carousel owl-theme stage-margin nav-style-1 hp owl-loaded owl-drag owl-carousel-init"
                            data-plugin-options='{"items": 2 , "margin": 0, "loop": true, "autoplay": true, "autoplayTimeout":5000, "nav": true, "dots": false, "stagePadding": 40,"responsive": {"0": {"items": 1, "loop":true}, "479": {"items": 1,"loop":true}, "768": {"items": 2, "loop":true}, "991": {"items": 1, "loop":true}}}'
                            style={{ height: "auto" }}
                          >
                            <div className="owl-stage-outer">
                              <div
                                className="owl-stage"
                                style={{
                                  transform: "translate3d(-187px, 0px, 0px)",
                                  transition: "all 0.25s ease 0s",
                                }}
                              >
                                <div className="owl-item active">
                                  <div className=" bg-light p-0 shadow-none">
                                    <div className="card border-radius-0 border-0 shadow-none">
                                      <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                                        <a href="/personal/cards/mastercard-primo-credit-card">
                                          <img
                                            src="images/mcb/personal/assets/mastercard-primo8bb66cb6-b723-4fd1-abed-bf0443460927.png"
                                            height={80}
                                            className="w-auto p-0"
                                            alt="Primo Credit Card"
                                          />
                                        </a>
                                        <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                          Primo Credit Card
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="owl-item active">
                                  <div className=" bg-light p-0 shadow-none">
                                    <div className="card border-radius-0 border-0 shadow-none">
                                      <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                                        <a href="/personal/cards/classic-credit-card">
                                          <img
                                            src="images/mcb/personal/assets/Visa-Credit2a6ce057-1333-4ed6-ab12-be01a3012660.png"
                                            height={80}
                                            className="w-auto p-0"
                                            alt="Classic Credit Card"
                                          />
                                        </a>
                                        <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                          Classic Credit Card
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="owl-item active">
                                  <div className=" bg-light p-0 shadow-none">
                                    <div className="card border-radius-0 border-0 shadow-none">
                                      <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                                        <a href="/personal/cards/gold-credit-card">
                                          <img
                                            src="/images/mcb/personal/assets/Visa-gold3a505ac2-f9ab-4f84-b36d-2600e46d3527.png"
                                            height={80}
                                            className="w-auto p-0"
                                            alt="Gold Credit Card"
                                          />
                                        </a>
                                        <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                          Gold Credit Card
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="owl-item active">
                                  <div className=" bg-light p-0 shadow-none">
                                    <div className="card border-radius-0 border-0 shadow-none">
                                      <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                                        <a href="/personal/cards/visa-platinum">
                                          <img
                                            src="/images/mcb/personal/assets/Visa-platinum6c6b277d-9c1e-479a-ac3b-cb980bdddc52.png"
                                            height={80}
                                            className="w-auto p-0"
                                            alt="Visa Platinum"
                                          />
                                        </a>
                                        <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                          Visa Platinum
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="owl-item active">
                                  <div className=" bg-light p-0 shadow-none">
                                    <div className="card border-radius-0 border-0 shadow-none">
                                      <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                                        <a href="/personal/cards/visa-signature">
                                          <img
                                            src="/images/mcb/personal/assets/Visa-signature.png"
                                            height={80}
                                            className="w-auto p-0"
                                            alt="Visa Signature"
                                          />
                                        </a>
                                        <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                          Visa Signature
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="owl-item">
                                  <div className=" bg-light p-0 shadow-none">
                                    <div className="card border-radius-0 border-0 shadow-none">
                                      <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                                        <a href="/personal/cards/american-express/american-express-green">
                                          <img
                                            src="images/mcb/personal/assets/amex-green22d193d1-cb68-4aac-84da-b488aeb714c6.png"
                                            height={80}
                                            className="w-auto p-0"
                                            alt="American Express® Green"
                                          />
                                        </a>
                                        <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                          American Express® Green
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="owl-item">
                                  <div className=" bg-light p-0 shadow-none">
                                    <div className="card border-radius-0 border-0 shadow-none">
                                      <div className="card-body hp border-0 px-3 d-flex align-items-center justify-content-center flex-column z-index-1">
                                        <a href="/personal/cards/american-express/american-express-gold">
                                          <img
                                            src="/images/mcb/personal/assets/amex-gold2138435b-fa90-43f3-8191-343bd361d3ed.png"
                                            height={80}
                                            className="w-auto p-0"
                                            alt="American Express® Gold"
                                          />
                                        </a>
                                        <h4 className="card-title mb-1 text-6 font-weight-light text-color-dark text-center">
                                          American Express® Gold
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="owl-nav">
                              <button
                                type="button"
                                role="presentation"
                                className="owl-prev"
                              />
                              <button
                                type="button"
                                role="presentation"
                                className="owl-next disabled"
                              />
                            </div>
                            <div className="owl-dots disabled" />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hp-offers" data-sf-element="Row">
            <div
              id="Main_C090_Col00"
              className="sf_colsIn col-lg-12"
              data-sf-element="Column 1"
              data-placeholder-label="Column 1"
            >
              <div
                id="Main_C088_Col00"
                className="sf_colsIn container title"
                data-sf-element="Container"
                data-placeholder-label="Container"
              >
                <div className="check-ul-styling">
                  <div>
                    <h2>Offers &amp; promotions</h2>
                  </div>
                </div>
                <div className="container py-2 mt-50 mb-70">
                  <div className=" sort-destination-loader-showing mt-4 pt-2">
                    <div className="row portfolio-list sort-destination">
                      <div className="col-sm-6 col-lg-3 isotope-item">
                        <div className="portfolio-item">
                          <div>
                            <span className="thumb-info thumb-info-lighten border-radius-0">
                              <span className="thumb-info-wrapper border-radius-0">
                                <span
                                  className="owl-carousel owl-theme dots-inside m-0"
                                  data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                                >
                                  <span>
                                    <img
                                      src="images/mcb/offers/banking/Visa---Booking.com-Promo-2023-2024_Website-Banner_585x330f71c.jpg?sfvrsn=2a432b5b_1"
                                      className="img-fluid border-radius-0"
                                      alt=""
                                    />
                                  </span>
                                </span>
                                <span className="thumb-info-title">
                                  <span className="thumb-info-inner">
                                    Enjoy up to 8% off on Booking.com with Visa
                                  </span>
                                </span>
                                <span className="thumb-info-action">
                                  <span className="thumb-info-action-icon bg-dark opacity-8">
                                    <i className="fas fa-plus" />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3 isotope-item">
                        <div className="portfolio-item">
                          <div>
                            <span className="thumb-info thumb-info-lighten border-radius-0">
                              <span className="thumb-info-wrapper border-radius-0">
                                <span
                                  className="owl-carousel owl-theme dots-inside m-0"
                                  data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                                >
                                  <span>
                                    <img
                                      src="images/mcb/offers/banking/EOY-2023---CASHLESS-AVOY-OU-LWIN---V222d2.jpg?sfvrsn=ec0de8f5_2"
                                      className="img-fluid border-radius-0"
                                      alt=""
                                    />
                                  </span>
                                </span>
                                <span className="thumb-info-title">
                                  <span className="thumb-info-inner">
                                    CASHLESS AVOY OU LWIN
                                  </span>
                                </span>
                                <span className="thumb-info-action">
                                  <span className="thumb-info-action-icon bg-dark opacity-8">
                                    <i className="fas fa-plus" />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3 isotope-item">
                        <div className="portfolio-item">
                          <div>
                            <span className="thumb-info thumb-info-lighten border-radius-0">
                              <span className="thumb-info-wrapper border-radius-0">
                                <span
                                  className="owl-carousel owl-theme dots-inside m-0"
                                  data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
                                >
                                  <span>
                                    <img
                                      src="images/mcb/offers/amex/golf/The-Nine-Golf-Course---Azurid0a0.jpg?sfvrsn=e671456d_1"
                                      className="img-fluid border-radius-0"
                                      alt=""
                                    />
                                  </span>
                                </span>
                                <span className="thumb-info-title">
                                  <span className="thumb-info-inner">
                                    The Nine, Azuri Golf Course
                                  </span>
                                </span>
                                <span className="thumb-info-action">
                                  <span className="thumb-info-action-icon bg-dark opacity-8">
                                    <i className="fas fa-plus" />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="check-ul-styling">
                  <div>
                    <a
                      className="btn btn-default w-auto btn-view-all"
                      href="/personal/offers-and-promotions"
                    >
                      VIEW ALL OFFERS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="Main_C027_Col00"
            className="sf_colsIn container mt-50"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C004_Col00"
                className="sf_colsIn col-lg-12"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="check-ul-styling">
                  <div>
                    <h2>Useful tools and resources</h2>
                  </div>
                </div>

                {/* The calculator */}
                <div className="row" data-sf-element="Row">
                  <div
                    id="Main_C010_Col00"
                    className="sf_colsIn col-lg-6 hp-currency-convertor"
                    data-sf-element="Column 1"
                    data-placeholder-label="Column 1"
                  >
                    <div className="featured-box featured-box-primary border-radius-0 border-all-light box-shadow-none box-shadow-1 box-shadow-1-hover border-color-transparent-hover mt-0">
                      <div className="grid__item block-currency-convertor grid__item-1-2-large">
                        <div className="component component--collapsed">
                          <div
                            className="tools-list"
                            data-eh="yes"
                            style={{ height: "445.281px" }}
                          >
                            <a
                              href="#"
                              className="product-panel hidden-at-large"
                              data-eh="yes"
                              data-triggerer="true"
                              data-show="#foreignexchangecalculatorpopup"
                              style={{ height: "445.281px" }}
                            >
                              <div className="product-panel__header">
                                <span className="icon--calculator" />
                              </div>
                              <div className="product-panel__info">
                                <div className="product-panel__info-inner">
                                  <h2 className="h2 product-panel__info-title mt-4">
                                    Currency Converter
                                  </h2>
                                  <p className="product-panel__info-text" />
                                  <span className="anchor product-panel__info-link">
                                    Use our foreign exchange calculator
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div id="ftools">
                              <div
                                id="foreignexchangecalculator"
                                className="foreignexchangecalculator element-animate element-animate-show"
                                data-equal="[data-eh]"
                              >
                                <span
                                  className="foreignexchangecalculator__close"
                                  data-triggerer="true"
                                  data-hide="#foreignexchangecalculator"
                                  style={{ display: "none" }}
                                >
                                  <span className="icon--cross" />
                                </span>
                                <div className="foreignexchangecalculator__inner">
                                  <div className="grid__row">
                                    <div
                                      className="grid__item grid__item--collapse-bottom grid__item-9-10-medium"
                                      data-eh="true"
                                      style={{ height: 126 }}
                                    >
                                      <div className="grid__row grid-row-new">
                                        <div className="grid__item grid__item-4-10-medium me-4">
                                          <div className="form__input-container">
                                            <label
                                              className="visually-hidden"
                                              htmlFor="moneyAmount1a"
                                            >
                                              <span />
                                            </label>
                                            <input
                                              type="text"
                                              name="moneyAmount1a"
                                              id="moneyAmount1a"
                                              defaultValue={1}
                                              className="form__input form__input--full-width moneyAmount1"
                                              placeholder="e.g. 100"
                                            />
                                          </div>
                                        </div>
                                        <div className="grid__item grid__item-6-10-medium grid_listing">
                                          <div className="form__input-container">
                                            <select
                                              id="currency1a"
                                              name="currency1a"
                                              className="form__input jquery-selectmenu--forex currency1"
                                              style={{ display: "none" }}
                                            >
                                              <option value="aed">
                                                UAE Dirham AED
                                              </option>
                                              <option value="aud">
                                                Australia Dollars AUD
                                              </option>
                                              <option value="cad">
                                                Canadian Dollar CAD
                                              </option>
                                              <option value="chf">
                                                Switzerland Franc CHF
                                              </option>
                                              <option value="cny">
                                                China Yuan Renminbi CNY
                                              </option>
                                              <option value="eur">
                                                Euro EUR
                                              </option>
                                              <option value="gbp">
                                                Great Britain Pound GBP
                                              </option>
                                              <option value="hkd">
                                                Hong Kong Dollar HKD
                                              </option>
                                              <option value="inr">
                                                India Rupee INR
                                              </option>
                                              <option value="jpy">
                                                Japan Yen JPY
                                              </option>
                                              <option value="kes">
                                                Kenya Shilling KES
                                              </option>
                                              <option value="lkr">
                                                Sri Lanka Rupee LKR
                                              </option>
                                              <option value="mga">
                                                Malagasy Ariary MGA
                                              </option>
                                              <option value="mur" disabled="">
                                                Mauritius MUR
                                              </option>
                                              <option value="nok">
                                                Bouvet Island Norway Kroner NOK
                                              </option>
                                              <option value="nzd">
                                                Cook Islands New Zealand Dollars
                                                NZD
                                              </option>
                                              <option value="pkr">
                                                Pakistan Rupees PKR
                                              </option>
                                              <option value="sar">
                                                Saudi Arabia Riyals SAR
                                              </option>
                                              <option value="scr">
                                                Seychelles Rupees SCR
                                              </option>
                                              <option value="sgd">
                                                Singapore Dollars SGD
                                              </option>
                                              <option value="tzs">
                                                Tanzania Shillings TZS
                                              </option>
                                              <option value="usd" selected="">
                                                United States Dollars USD
                                              </option>
                                              <option value="zar">
                                                South Africa Rand ZAR
                                              </option>
                                            </select>
                                            <span
                                              tabIndex={0}
                                              id="currency1a-button"
                                              role="combobox"
                                              aria-expanded="false"
                                              aria-autocomplete="list"
                                              aria-owns="currency1a-menu"
                                              aria-haspopup="true"
                                              className="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"
                                              aria-activedescendant="ui-id-390"
                                              aria-labelledby="ui-id-390"
                                              aria-disabled="false"
                                            >
                                              <span
                                                style={{}}
                                                className="ui-selectmenu-flag"
                                              />
                                              <span className="ui-selectmenu-icon ui-icon icon--arrow-down" />
                                              <span className="ui-selectmenu-text">
                                                United States Dollars USD
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid__item hidden-at-large grid-swap-currencies content-centered text-end mt-2">
                                        <span className="foreignexchangecalculator__swap-currencies">
                                          <i className="fa-solid fa-arrow-right-arrow-left fa-rotate-90 fs-2" />
                                        </span>
                                      </div>
                                      <div className="grid__row grid-row-new">
                                        <div className="grid__item grid__item--collapse-bottom grid__item-4-10-medium me-4">
                                          <div className="form__input-container">
                                            <label
                                              className="visually-hidden"
                                              htmlFor="moneyAmount2a"
                                            >
                                              <span />
                                            </label>
                                            <input
                                              type="text"
                                              name="moneyAmount2a"
                                              id="moneyAmount2a"
                                              className="form__input form__input--full-width moneyAmount2"
                                              readOnly="readonly"
                                            />
                                          </div>
                                        </div>
                                        <div className="grid__item grid__item-6-10-medium grid_listing">
                                          <div className="form__input-container">
                                            <select
                                              id="currency2a"
                                              name="currency2a"
                                              className="form__input jquery-selectmenu--forex currency2"
                                              style={{ display: "none" }}
                                            >
                                              <option value="aed">
                                                UAE Dirham AED
                                              </option>
                                              <option value="aud">
                                                Australia Dollars AUD
                                              </option>
                                              <option value="cad">
                                                Canadian Dollar CAD
                                              </option>
                                              <option value="chf">
                                                Switzerland Franc CHF
                                              </option>
                                              <option value="cny">
                                                China Yuan Renminbi CNY
                                              </option>
                                              <option value="eur">
                                                Euro EUR
                                              </option>
                                              <option value="gbp">
                                                Great Britain Pound GBP
                                              </option>
                                              <option value="hkd">
                                                Hong Kong Dollar HKD
                                              </option>
                                              <option value="inr">
                                                India Rupee INR
                                              </option>
                                              <option value="jpy">
                                                Japan Yen JPY
                                              </option>
                                              <option value="kes">
                                                Kenya Shilling KES
                                              </option>
                                              <option value="lkr">
                                                Sri Lanka Rupee LKR
                                              </option>
                                              <option value="mga">
                                                Malagasy Ariary MGA
                                              </option>
                                              <option value="mur" selected="">
                                                Mauritius MUR
                                              </option>
                                              <option value="nok">
                                                Bouvet Island Norway Kroner NOK
                                              </option>
                                              <option value="nzd">
                                                Cook Islands New Zealand Dollars
                                                NZD
                                              </option>
                                              <option value="pkr">
                                                Pakistan Rupees PKR
                                              </option>
                                              <option value="sar">
                                                Saudi Arabia Riyals SAR
                                              </option>
                                              <option value="scr">
                                                Seychelles Rupees SCR
                                              </option>
                                              <option value="sgd">
                                                Singapore Dollars SGD
                                              </option>
                                              <option value="tzs">
                                                Tanzania Shillings TZS
                                              </option>
                                              <option value="usd" disabled="">
                                                United States Dollars USD
                                              </option>
                                              <option value="zar">
                                                South Africa Rand ZAR
                                              </option>
                                            </select>
                                            <span
                                              tabIndex={0}
                                              id="currency2a-button"
                                              role="combobox"
                                              aria-expanded="false"
                                              aria-autocomplete="list"
                                              aria-owns="currency2a-menu"
                                              aria-haspopup="true"
                                              className="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"
                                              aria-activedescendant="ui-id-405"
                                              aria-labelledby="ui-id-405"
                                              aria-disabled="false"
                                            >
                                              <span
                                                style={{}}
                                                className="ui-selectmenu-flag"
                                              />
                                              <span className="ui-selectmenu-icon ui-icon icon--arrow-down" />
                                              <span className="ui-selectmenu-text">
                                                Mauritius MUR
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item grid__item--collapse-bottom grid__item-1-10-medium visible-at-large">
                                      <div
                                        className="vertically-aligned"
                                        data-eh="true"
                                        style={{ height: 126 }}
                                      >
                                        <div className="vertically-aligned__content">
                                          <span className="foreignexchangecalculator__swap-currencies">
                                            <span className="icon--swap foreignexchangecalculator__swap-currencies-icon" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="foreignexchangecalculator__results"
                                    style={{}}
                                  >
                                    <span className="foreignexchangecalculator__results-from">
                                      <span className="foreignexchangecalculator__results-base-amount">
                                        1.00 United States Dollars
                                      </span>{" "}
                                      equals
                                    </span>
                                    <span className="foreignexchangecalculator__results-to">
                                      <span className="foreignexchangecalculator__results-result-amount">
                                        44.2300 Mauritius
                                      </span>
                                    </span>
                                    <span className="foreignexchangecalculator__results-terms">
                                      Disclaimer: The exchange rates provided by
                                      this converter are indicative only and are
                                      the average value of the buying &amp;
                                      selling price. At no time should they be
                                      considered as equivalent to the rates
                                      applied by the bank. Customers should
                                      therefore contact bank officials for the
                                      market rate prior to entering into any
                                      firm transaction. It is understood and
                                      agreed that under no circumstances
                                      whatsoever shall MCB be liable for any
                                      direct/indirect or consequential loss
                                      arising from the use of these rates.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Main_C010_Col01"
                    className="sf_colsIn col-lg-3"
                    data-sf-element="Column 2"
                    data-placeholder-label="Column 2"
                  >
                    <div
                      id="Forex"
                      className="p-4 featured-box featured-box-primary border-radius-0 border-all-light box-shadow-none box-shadow-1 box-shadow-1-hover border-color-transparent-hover container-zebra-table mt-0"
                    >
                      <div className="grid__item grid__item-1-4-large">
                        <div className="component component--collapsed">
                          <a
                            href="/tools-calculators/download-daily-rates"
                            className="product-panel hover-expand indicativeforex"
                            data-eh="yes"
                            target="_self"
                          >
                            <div className="product-panel__info">
                              <div className="product-panel__info-inner">
                                <h3 className="h3 product-panel__info-title">
                                  Indicative Forex Rates
                                </h3>
                                <div
                                  className="product-panel__info-text"
                                  id="indicativeRates"
                                ></div>
                                <div className="product-panel__info-links">
                                  <span className="product-panel__info-link">
                                    <span className="icon--calculator product-panel__info-link-icon" />
                                    <span className="icon-label">
                                      Get daily rates
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Main_C010_Col02"
                    className="sf_colsIn col-lg-3"
                    data-sf-element="Column 3"
                    data-placeholder-label="Column 3"
                  >
                    {/* Mauritius */}
                    <div className="card bg-img-col-3 text-center rounded-0">
                      <div
                        className="d-flex flex-column justify-content-end align-items-center p-3"
                        style={{
                          backgroundImage:
                            "url(images/mcb/personal/assets/rates-and-fees.png)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          minHeight: 360,
                        }}
                      >
                        <div className="mt-4 d-flex flex-column align-items-center justify-content-end">
                          <h3 className="font-weight-medium text-color-light text-8 line-height-1 mb-2">
                            Rates &amp; Fees
                          </h3>
                          <p className="font-weight-medium text-color-light text-2 line-height-4">
                            Interest rates, fees and charges applied to personal
                            and corporate banking
                          </p>
                        </div>
                        <div className="d-flex flex-row flex-wrap align-items-center justify-content-evenly">
                          <a
                            href="/rates-fees"
                            className="btn btn-light btn-outline btn-outline-thin btn-outline-light-opacity-2 btn-effect-5 font-weight-semi-bold px-3 btn-py-2 text-3 text-color-light text-color-hover-dark d-flex flex-row ms-1 mb-1 text-1"
                            target="_blank"
                          >
                            View <span className="icon-chevron-right" />
                            {/*<span class="icon-bi_download ms-1"></span>*/}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="Main_C079_Col00"
            className="sf_colsIn container"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C080_Col00"
                className="sf_colsIn col-lg-8 mauritian-bond"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <div className="p-4 featured-box featured-box-primary border-radius-0 border-all-light box-shadow-none box-shadow-1 box-shadow-1-hover border-color-transparent-hover container-zebra-table mt-0">
                  <div className="grid__item grid__item-1-4-large">
                    <div className="component component--collapsed">
                      <a
                        href="/treasury-market-updates"
                        className="product-panel hover-expand indicativeforex"
                        data-eh="yes"
                        target="Model.IsTargetNewTab"
                      >
                        <div className="product-panel__info">
                          <div className="product-panel__info-inner">
                            <h3 className="h3 product-panel__info-title">
                              Bank Of Africa Bond Markets
                            </h3>
                            <div
                              className="product-panel__info-text"
                              id="indicativeRates"
                            >
                              <table className="table table--decorated">
                                <tbody>
                                  <tr>
                                    <th className="content-right">Security</th>
                                    <th className="content-right">Coupon</th>
                                    <th className="content-right">
                                      Bank Buy Yield (%)
                                    </th>
                                    <th className="content-right">
                                      Bank Sell Yield (%)
                                    </th>
                                  </tr>
                                  <tr>
                                    <td className="content-right">
                                      BOARCB 0 03/28/24
                                    </td>
                                    <td className="content-right">0.00</td>
                                    <td className="content-right"> 3.35000</td>
                                    <td className="content-right"> 3.20000</td>
                                  </tr>
                                  <tr>
                                    <td className="content-right">
                                      BOARCB 0 06/27/24
                                    </td>
                                    <td className="content-right">0.00</td>
                                    <td className="content-right"> 3.90000</td>
                                    <td className="content-right"> 3.75000</td>
                                  </tr>
                                  <tr>
                                    <td className="content-right">
                                      BOARCB 0 12/26/24
                                    </td>
                                    <td className="content-right">0.00</td>
                                    <td className="content-right"> 4.05000</td>
                                    <td className="content-right"> 3.90000</td>
                                  </tr>
                                  <tr>
                                    <td className="content-right">
                                      BOARTN 3.92 10/20/26
                                    </td>
                                    <td className="content-right">3.92</td>
                                    <td className="content-right"> 4.75000</td>
                                    <td className="content-right"> 4.55000</td>
                                  </tr>
                                  <tr>
                                    <td className="content-right">
                                      BOARGB 3.78 08/18/28
                                    </td>
                                    <td className="content-right">3.78</td>
                                    <td className="content-right"> 4.80000</td>
                                    <td className="content-right"> 4.55000</td>
                                  </tr>
                                  <tr>
                                    <td className="content-right">
                                      BOARGB 4.24 09/08/33
                                    </td>
                                    <td className="content-right">4.24</td>
                                    <td className="content-right"> 4.95000</td>
                                    <td className="content-right"> 4.70000</td>
                                  </tr>
                                  <tr>
                                    <td className="content-right">
                                      BOARGB 4.4 07/19/38
                                    </td>
                                    <td className="content-right">4.40</td>
                                    <td className="content-right"> 5.40000</td>
                                    <td className="content-right"> 5.15000</td>
                                  </tr>
                                  <tr>
                                    <td className="content-right">
                                      BOARGB 5.55 12/22/43
                                    </td>
                                    <td className="content-right">5.55</td>
                                    <td className="content-right"> 5.80000</td>
                                    <td className="content-right"> 5.55000</td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="content-left">
                                <small> 04/01/2024</small>
                                <br />
                              </p>
                            </div>
                            <div className="product-panel__info-links">
                              <span className="product-panel__info-link">
                                <span className="icon--calculator product-panel__info-link-icon" />
                                <span className="icon-label">
                                  View More Details
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="Main_C080_Col01"
                className="sf_colsIn col-lg-4 hp-treasury-market"
                data-sf-element="Column 2"
                data-placeholder-label="Column 2"
              >
                <div className="check-ul-styling">
                  <div>
                    <div className="card bg-img-col-3 text-center rounded-0">
                      <div
                        className="card-content d-flex flex-column justify-content-end align-items-center p-3"
                        style={{
                          backgroundImage:
                            "url(_/images/mcb/personal/assets/personal-treasury-market-updates)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          minHeight: 360,
                        }}
                      >
                        <div className="mt-4 d-flex flex-column align-items-center justify-content-end">
                          <h3 className="font-weight-medium text-color-dark text-8 line-height-1 mb-2">
                            Treasury Market Updates
                          </h3>
                          <p className="font-weight-medium text-color-dark text-2 line-height-4">
                            Download the latest updates.
                          </p>
                        </div>
                        <div className="d-flex flex-row flex-wrap align-items-center justify-content-evenly">
                          <a
                            href="/treasury-market-updates"
                            className="btn btn-default btn-outline btn-outline-thin btn-outline-light-opacity-2 btn-effect-5 font-weight-semi-bold px-3 btn-py-2 text-3 text-color-dark text-color-hover-dark d-flex flex-row ms-1 mb-1 text-1"
                            target="_blank"
                            data-sf-ec-immutable=""
                          >
                            View <span className="icon-chevron-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hp-news mt-5" data-sf-element="Row">
            <div
              id="Main_C046_Col00"
              className="sf_colsIn col-lg-12"
              data-sf-element="Column 1"
              data-placeholder-label="Column 1"
            >
              <div
                id="Main_C070_Col00"
                className="sf_colsIn"
                data-sf-element="Container Light Gray 2"
                data-placeholder-label="Container Light Gray 2"
              >
                <div
                  id="Main_C047_Col00"
                  className="sf_colsIn container"
                  data-sf-element="Container"
                  data-placeholder-label="Container"
                >
                  <div className="d-none check-ul-styling">
                    <div>
                      <h2>Latest news</h2>
                    </div>
                  </div>
                  <section className="section check-ul-styling bg-color-white  border-0 mt-0 mb-0 hp-news block d-none">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div
                            className="row align-items-center pt-4 appear-animation"
                            data-appear-animation="fadeInLeftShorter"
                          >
                            <div className="col-md-4 mb-4 mb-md-0">
                              <img
                                className="img-fluid w-100 pe-md-0 my-4"
                                src="images/mcb/personal/assets/personal-homepage-newsbcad.png?sfvrsn=3e38f31b_3"
                                alt="layout styles"
                              />
                            </div>
                            <div className="col-md-8 ps-md-5">
                              <h2 className="font-weight-normal text-7 mb-3">
                                <strong className="font-weight-medium">
                                  Philippe Touati has been appointed as MCB’s
                                  Head of Corporate and Institutional Banking
                                </strong>
                              </h2>
                              <p>
                                Philippe Touati&nbsp;brings a wealth of
                                experience from his impressive financial career,
                                with leadership roles at renowned financial
                                institutions and managing corporate
                                transformations across Europe and Asia...
                              </p>{" "}
                              <a
                                href="https://mcbgroup.com/post/philippe-touati-is-our-new-head-of-cib"
                                className=" btn btn-primary me-4 mt-3 w-100-mobile btn-floating is-visible"
                                target="_blank"
                              >
                                Read more
                                <i className="fas fa-angle-right icons ms-1" />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div
            id="Main_C092_Col00"
            className="sf_colsIn container"
            data-sf-element="Container"
            data-placeholder-label="Container"
          >
            <div className="row" data-sf-element="Row">
              <div
                id="Main_C040_Col00"
                className="sf_colsIn col-lg-12"
                data-sf-element="Column 1"
                data-placeholder-label="Column 1"
              >
                <section className="img-text-cta hp-hr">
                  <div className="container my-5">
                    <div className="row my-lg-5">
                      <div className="col-lg-12">
                        <span className="thumb-info border-all thumb-info-show-button-hover">
                          <span
                            className="thumb-info-wrapper"
                            style={{
                              backgroundImage:
                                "url(images/mcb/personal/assets/careerbf99.jpeg?sfvrsn=b208d1bf_3)",
                            }}
                          >
                            <span className="thumb-info-title bg-transparent">
                              <h3 className="card-title mb-4 text-6 font-weight-medium text-light w-50 w-100-mobile">
                                Let’s push boundaries together!
                              </h3>
                              <p className="card-text font-weight-medium text-light w-75 w-100-mobile">
                                We believe that great achievements are born when
                                talent meets opportunity! Success is a journey
                                of self-discovery, personal growth, and
                                collaboration. Our real value lies in helping
                                you unlock your Success from every point of YOU!
                              </p>
                              {/* <a href="https://mcbgroup.com/talent" target="_blank" class="btn btn-more text-light d-flex align-items-center ps-0"><i class="icon icon-arrow-right me-2 text-9" aria-hidden="true"></i>More Information</a> */}
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="row hp-help" data-sf-element="Row">
            <div
              id="Main_C056_Col00"
              className="sf_colsIn col-lg-12"
              data-sf-element="Column 1"
              data-placeholder-label="Column 1"
            >
              <div className="check-ul-styling">
                <div>
                  <section
                    className="call-to-action call-to-action-default"
                    style={{
                      borderTop: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "none",
                      borderBottom: "none",
                      borderLeft: "none",
                      background: "rgba(255, 255, 255, 1) !important",
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-9 col-lg-9">
                          <div className="call-to-action-content-left">
                            <h2 className="text-7 font-weight-normal mb-2">
                              Help &amp; Support
                            </h2>
                            <p className="mb-0">
                              We have gathered the most popular questions to get
                              you started
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                          <div className="call-to-action-btn w-100-mobile px-0 w-auto">
                            <a
                              href="/personal/help-centre"
                              target="_blank"
                              className="btn btn-gray-ca w-auto btn-modern text-2"
                              data-sf-ec-immutable=""
                            >
                              Need help?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* REUSABLE FOOTER COMPONENT */}
      <Footer />
      {/* END OF REUSABLE FOOTER COMPONENT */}
      {/* Vendor */} {/* Theme Base, Components and Settings */}{" "}
      {/* Current Page Vendor and Views */}
      {/* Demo */} {/* Theme Custom */}
      {/* Theme Initialization Files */}
      {/* Mirrored from mcb.mu/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jan 2024 06:28:59 GMT */}
    </>
  );
};
export default Personal;
