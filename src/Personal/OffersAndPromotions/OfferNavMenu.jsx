import PropTypes from "prop-types";

const NavMenu = ({ items }) => {
  return (
    <ul className="nav nav-pills sort-source sort-source-style-3 justify-content-center">
      {items.map((item, index) => (
        <li key={index} className={`nav-item ${item.isActive ? "active" : ""}`}>
          <a
            className={`nav-link text-2-5 text-uppercase ${
              item.isActive ? "active" : ""
            }`}
            href={item.href}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Adding prop types for validation
NavMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    })
  ).isRequired,
};

export default NavMenu;
