import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { features } from "../constants";
import styles, { layout } from "../styles/style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 1)}
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </motion.div>

    <motion.div
      variants={fadeIn("left", "tween", 0.5, 1)}
      className="flex-1 flex flex-col ml-3"
    >
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </motion.div>
  </motion.div>
);

const Deskripsi = () => (
  <section id="features" className={layout.section}>
    <motion.div
      variants={fadeIn("left", "tween", 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={layout.sectionInfo}
    >
      <motion.h2
        variants={fadeIn("right", "tween", 0.5, 1)}
        className={styles.heading2}
      >
        Join our community <br className="sm:block hidden" /> made by the best
        artists and creators.
      </motion.h2>

      <motion.p
        variants={fadeIn("up", "tween", 0.5, 1)}
        className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}
      >
        Don't miss the opportunity to own rare and exclusive NFTs, and connect
        with a community of creatives who are equally passionate about exploring
        this new technology. Join us today and start discovering the world of
        NFTs!
      </motion.p>

      <Button styles={`mt-10 `} />
    </motion.div>

    <motion.div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>

    {/* bg gradient */}
    <div className="absolute z-[0] w-[20%] h-[20%] left-[64%]  rounded-full   gradient-01 " />
  </section>
);

export default Deskripsi;
