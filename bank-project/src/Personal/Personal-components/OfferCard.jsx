// OfferCard.js
import PropTypes from "prop-types";

const OfferCard = ({ link, images, title }) => {
  return (
    <div className="col-sm-6 col-lg-3 isotope-item">
      <div className="portfolio-item">
        <a href={link}>
          <span className="thumb-info thumb-info-lighten border-radius-0">
            <span className="thumb-info-wrapper border-radius-0">
              <span
                className="owl-carousel owl-theme dots-inside m-0"
                data-plugin-options="{'items': 1, 'margin': 20, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}"
              >
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      className="img-fluid border-radius-0"
                      alt={title}
                    />
                  </div>
                ))}
              </span>
              <span className="thumb-info-title">
                <span className="thumb-info-inner">{title}</span>
              </span>
              <span className="thumb-info-action">
                <span className="thumb-info-action-icon bg-dark opacity-8">
                  <i className="fas fa-plus" />
                </span>
              </span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

OfferCard.propTypes = {
  link: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default OfferCard;
