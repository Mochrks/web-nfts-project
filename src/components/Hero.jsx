
import { motion } from 'framer-motion';
import styles from "../style";
import { nft,  mobileContent ,b,s,d} from "../assets";
import { textVariant ,slideIn ,fadeIn,textVariant2,staggerContainer} from "../utils/motion.js";
import Button from "./Button";
import ExploreNow from './ExploreNow';
import Create from './Create';
import Stats from './Stats';

const Hero = () => {
  return (
    // heroo awal
    <section id="home" className={`flex md:flex-row flex-col sm:py-1 py-10`}>

   
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      
      className={`flex-1 ${styles.flexStart} flex-row xl:px-0 sm:px-16 px-6 z-[999]`}>

        {/* gambar content */}

        <motion.img 
          variants={fadeIn('right', 'tween', 0.5 , 2)} 
          src={mobileContent} alt="mobileContent" className="w-[100%] h-[100%] relative z-[5]" >
        </motion.img>

      </motion.div>
      
      
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex-1 ${styles.flexCenter} flex-col md:my-0 my-10 relative`}>
        
        {/* text */}
          <motion.div 
            variants={textVariant(1.1)}
            className="flex flex-row justify-between items-center w-full z-[999]">

              <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] ss:px-1 px-5 text-white ss:leading-[80.8px] leading-[75px] ">
                Discover, Collect  <br className="sm:block hidden" />{" "}
                <span className="text-white">And Sell numerious Amazing NFTs.</span>{" "}
              </h1>

              
          </motion.div>

          {/* deskripsi */}
          <motion.p
          variants={textVariant(1.1)} 
          className={`${styles.paragraph} max-w-[770px] mt-5 ss:px-1 z-[999] text-justify text-center mx-5`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.

              {/* button */}
              <motion.div
                variants={fadeIn('right', 'tween', 0.5 , 2)} 
                className="flex flex-row "
              >
                <ExploreNow styles={` mt-1`} />
                <Create styles={` mt-2 ss:mx-5 mx-5`} />
              </motion.div>

              <div
              className="flex flex-row "
              >
                <Stats />
              </div>

              {/* icon bussines */}
               <div
                className="flex flex-row justify-end"
              >
                {/* gambar1 */}
                  <img 
                    src={b} alt="b" className="w-[13%] h-[100%] object-contan relative z-[5]" >
                  </img>

                  {/* gambar 2 */}

                  <img 
                    src={s} alt="s" className="w-[20%] h-[100%] object-contain relative z-[5] " >
                  </img>

                  {/* gambar 3 */}

                  <img 
                    src={d} alt="d" className="w-[10%] h-[90%] object-contain relative z-[5] mt-3 " >
                  </img>
              </div>

     
            
          </motion.p>
          
          
         
        
        {/* gradient start */}
      
        {/* white ditengah */}
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        {/* blue */}
        <div className="absolute z-[1] w-[30%] h-[30%] -left-[4%]  rounded-full   gradient-02-2 " />
        {/* pink */}
        <div className="absolute z-[0] w-[30%] h-[30%] -left-[50%]  rounded-full   gradient-06 " />
        {/* ungu */}
        <div className="absolute z-[1] w-[140%] h-[165%]  -left-[160%] ungu__gradient  bottom-40" />
        
        {/* gradient end */}

        {/* garis panjang 1 */}
        <div className=" absolute z-[0] border-l border-gray-300 h-[300%] -left-[20%] opacity-5" />

         {/* garis panjang 2 */}
        <div className=" absolute z-[0] border-l border-gray-300 h-[300%] -right-[10%] opacity-5" />

         {/* garis panjang 3 */}
        <div className=" absolute z-[0] border-l border-gray-300 h-[300%] right-[53%] opacity-5" />


        {/* bulat 1 */}
        <div className=" absolute z-[0] border border-gray-300 w-[80%] h-[65%] rounded-full mt-[110%] -left-[104%]  opacity-5" />

         {/* bulat 2 */}
        <div className=" absolute z-[0] border border-gray-300 w-[80%] h-[65%] rounded-full mt-[80%] -left-[135%]  opacity-5" />

          {/* bulat 2 */}
        <div className=" absolute z-[0] border border-gray-300 w-[80%] h-[65%] rounded-full mt-[30%] -left-[155%]  opacity-5" />




      </motion.div>     
    </section>
  );
};

export default Hero;
