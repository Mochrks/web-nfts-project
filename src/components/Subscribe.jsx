import styles from "../styles/style";
import Subs from "./Subs";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const Subscribe = () => (
  <motion.section
    variants={textVariant(1.1)}
    initial="hidden"
    whileInView="show"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-discount-gradient rounded-[20px] box-shadow`}
  >
    <motion.div
      variants={textVariant(1.1)}
      className="flex-1 flex flex-col text-center"
    >
      <h2 className={styles.heading2}>Never missing a drop</h2>
      <p className={`${styles.paragraph} max-w-[1470px] mt-5  text-center `}>
        Join our community of 323 k subscribers and never miss an update!,
        Subscribe now and be the first to know about our exclusive content and
        offers!, Don't miss out on the latest news and trends - subscribe today
      </p>

      <Subs styles={`mt-5`} />
    </motion.div>
  </motion.section>
);

export default Subscribe;
