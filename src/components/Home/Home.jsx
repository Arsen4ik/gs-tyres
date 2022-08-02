import "./Home.scoped.scss";
import banner from "../../assets/TyreAMG_w_1400.jpg";
import razi from '../../assets/raziTire.png'
import yazd from '../../assets/yazdTire.png'
import gs from '../../assets/gsTire.png'
import MainList from "../MainList/MainList";

const Home = () => (
  <>
    <figure className="mainbanner">
      <img  alt="" />
      <figcaption>
        <span className="slogan">LIFE </span>IN MOTION
        {/* <span className="slogan">ARTAWHEEL</span>TIRE INDUSTRIAL COMPLEX */}
      </figcaption>
    </figure>
    <MainList />  
 
    <h2 className="blue">ARTAWHEEL TIRE INDUSTRIAL COMPLEX</h2>
    <br />
    <img className="logos"  src={gs} alt="gs-logo" />
    <img className="logos" src={razi} alt="razi-logo" />
    <img className="logos" src={yazd} alt="yazd-logo" />
  </>
);

export default Home;
