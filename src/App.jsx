import styles from "./style";
import { Billing, Deskripsi,  Clients, Join, Footer, Navbar, CreateNFT, Hero } from "./components";

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
        
        <Deskripsi />
        <Billing />
        <CreateNFT />
        <Clients />
        <Join />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;