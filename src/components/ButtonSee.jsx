import PropTypes from "prop-types";

const ButtonSee = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white hero-gradient rounded-[10px] outline-none ${styles}`}
  >
    See More.
  </button>
);
ButtonSee.propTypes = {
  styles: PropTypes.string,
};

export default ButtonSee;
