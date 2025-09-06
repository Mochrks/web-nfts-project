import PropTypes from "prop-types";
import { exploreNow } from "../assets";

const ExploreNow = ({ styles }) => (
  <img
    src={exploreNow}
    alt="btn start"
    className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

ExploreNow.propTypes = {
  styles: PropTypes.string.isRequired,
};

export default ExploreNow;
