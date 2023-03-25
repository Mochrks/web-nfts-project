import styles from "../style";
import ButtonViewAll from "./ButtonViewAll";
import { layout } from "../style";
import {
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
  nft9,
  nft10,
} from "../assets";
import ButtonTrending from "./ButtonTrending";
import ButtonVideo from "./ButtonVideo";
import ButtonVirtual from "./ButtonVirtual";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

const HotDrop = () => (
  <section
    id="activity"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-discount-gradient rounded-[20px] box-shadow`}
  >
    <div className={`${layout.sectionImg} flex-col`}>
      <p className={`${styles.paragraph} max-w-full mt-5  text-center`}>
        NFT MARKETPLACE
      </p>

      <h2 className={`${styles.heading2} text-center`}>Hot Drop</h2>

      <div className={`${styles.flexCenter}  flex sm:flex-row flex-col  `}>
        <div>
          <ButtonTrending />
        </div>
        <div>
          <ButtonVideo />
        </div>
        <div>
          <ButtonVirtual />
        </div>
      </div>

      <div className="w-full flex sm:flex-row flex-col ">
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft1}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft2}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft3}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft4}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft5}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
      </div>

      <div className="w-full flex sm:flex-row flex-col ">
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft6}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft7}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft8}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft9}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={nft10}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
      </div>

      <div className="flex1 flex flex-row">
        <ButtonViewAll styles={`mt-[22%]`} />
      </div>
    </div>
  </section>
);

export default HotDrop;
