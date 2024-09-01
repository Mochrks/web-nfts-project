import styles from "./styles/style";
import {
  Billing,
  Deskripsi,
  Clients,
  Join,
  Footer,
  Navbar,
  CreateNFT,
  Hero,
  Subscribe,
  HotDrop,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <HotDrop />
        <Deskripsi />
        <Billing />
        <Subscribe />
        <CreateNFT />
        <Clients />
        <Join />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter} mt-20`}>
      <Footer />
    </div>
  </div>
);

export default App;
