import styles from "../style";
import Subs from "./Subs";

const Subscribe = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-discount-gradient rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col text-center">
      <h2 className={styles.heading2}>Never missing a drop</h2>
      <p className={`${styles.paragraph} max-w-[1470px] mt-5  text-center text-justify`}>
        Join our community of 323 k subscribers and never miss an update!, Subscribe now and be the first to know about our exclusive content and offers!, Don't miss out on the latest news and trends - subscribe today
        </p>
        
      <Subs styles={`mt-5`}/>

    </div>
    


  </section>
);

export default Subscribe;
