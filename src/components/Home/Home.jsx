import "./Home.scoped.scss";
import banner from "../../assets/TyreAMG_w_1400.jpg";
import razi from '../../assets/raziTire.png'
import yazd from '../../assets/yazdTire.png'
import gs from '../../assets/gsTire.png'
import MainList from "../MainList/MainList";

const Home = () => (
  <>
    <figure className="mainbanner">
      <img src={banner} alt="" />
      <figcaption>
        <span className="slogan">ARTAWHEEL</span>TIRE INDUSTRIAL COMPLEX
      </figcaption>
    </figure>
    <MainList />  
 
    <h2 className="text-primary">КОНЦЕРН ARTAWHEEL. КРУПНЕЙШИЙ ИРАНСКИЙ ПРОИЗВОДИТЕЛЬ РАДИАЛЬНЫХ ШИН </h2>
    <br />
    <img src={gs} alt="gs-logo" />
    <img src={razi} alt="razi-logo" />
    <img src={yazd} alt="yazd-logo" />
  </>
);

export default Home;
