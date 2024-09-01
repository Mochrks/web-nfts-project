import { create } from "../assets";

const Create = ({ styles }) => (
  <img
    src={create}
    alt="btn start"
    className={`w-[130px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

export default Create;
