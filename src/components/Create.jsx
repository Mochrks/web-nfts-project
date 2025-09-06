import PropTypes from "prop-types";
import { create } from "../assets";

const Create = ({ styles }) => (
  <img
    src={create}
    alt="btn start"
    className={`w-[130px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

Create.propTypes = {
  styles: PropTypes.string.isRequired,
};

export default Create;
