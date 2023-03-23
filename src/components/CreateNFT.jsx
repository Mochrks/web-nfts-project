import { motion } from 'framer-motion';
import { textVariant ,slideIn ,fadeIn,textVariant2,staggerContainer} from "../utils/motion.js";
import styles from "../style";
import ButtonSee from "./ButtonSee";

import { nft1,nft2,nft3 } from "../assets";

const CreateNFT = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    {/* gradient */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full pink__gradient bottom-40" />

    <motion.div
    variants={fadeIn('left', 'tween', 0.5 , 1)}  
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}

    className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Create Your NFT! <br className="sm:block hidden" /> Collection
      </h2>
      
      <div className="w-full md:mt-10 mt-6 mx-10">
         <img src={nft1} alt="nft" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
      <div className="w-full md:mt-10 mt-6 mx-10">
         <img src={nft2} alt="nft" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
      <div className="w-full md:mt-10 mt-6 mx-10">
         <img src={nft3} alt="nft" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
    </motion.div>


    {/* bg gradient */}
    <div className="absolute z-[0] w-[130%] h-[30%] -left-[4%]  rounded-full   gradient-01 " />


    {/* button see more */}
    <motion.div 
    variants={fadeIn('up', 'tween', 0.5 , 1)}  
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ButtonSee />
    </motion.div>
  </section>
);

export default CreateNFT;
