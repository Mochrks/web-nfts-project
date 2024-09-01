import { clients } from "../constants";
import styles from "../styles/style";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";
const Clients = () => (
  <motion.section
    variants={textVariant(1.1)}
    initial="hidden"
    whileInView="show"
    className={`${styles.flexCenter} my-4`}
  >
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </motion.section>
);

export default Clients;
