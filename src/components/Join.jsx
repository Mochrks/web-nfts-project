import styles from "../styles/style";
import Button from "./Button";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const Join = () => (
  <motion.section
    variants={textVariant(1.1)}
    initial="hidden"
    whileInView="show"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try and join comunity now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Secure your digital assets with blockchain technology | Innovate your
        digital portfolio with NFTs
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </motion.section>
);

export default Join;
