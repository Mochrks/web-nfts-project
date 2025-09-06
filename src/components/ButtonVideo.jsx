import PropTypes from "prop-types";

const ButtonVideo = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 mx-5 my-5 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px] outline-none ${styles}`}
  >
    Video
  </button>
);
ButtonVideo.propTypes = {
  styles: PropTypes.string,
};
export default ButtonVideo;
