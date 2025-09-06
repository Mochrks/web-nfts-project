import PropTypes from "prop-types";

const ButtonVirtual = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 mx-5 my-5 items-center font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px] outline-none ${styles}`}
  >
    Virtual
  </button>
);
ButtonVirtual.propTypes = {
  styles: PropTypes.string,
};
export default ButtonVirtual;
