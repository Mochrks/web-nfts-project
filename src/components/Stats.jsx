import { stats } from "../constants";
import styles from "../styles/style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-col justify-center items-center  xs:ml-10 ml-8`}
      >
        <h4 className="font-poppins font-semibold xs:text-[25.89px] text-[16.89px] xs:leading-[53.16px] leading-[43.16px] text-white ">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[10.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
