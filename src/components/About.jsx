import { useRef, useEffect } from "react";
import tyre from "../assets/tyre-rotation1.png";
import { gsap } from "gsap";

import "./About.scoped.scss";

const About = () => {
  const element = useRef();
  //   const q = gsap.utils.selector(element);
  useEffect(() => {
    gsap.to(element.current, {
      rotation: 360,
      duration: 4,
      ease: "none",
      repeat: -1,
    });
  });
  return (
    <div className="container-fluid about">
      <h3>Контакты:</h3>

<address>
  <a href="mailto:rinat@gs-tyres.com">rinat@gs-tyres.com</a>
  <br />
  <a href="mailto:sales@gs-tyres.com">sales@gs-tyres.com</a>
  <br/>
  <a href="tel:+79961232940">+7 (996) 123-29-40</a>
  <h5>Республика Татарстан, Казань</h5>
</address>
      <div id="main-tyre">
        <img src={tyre} ref={element} />
      </div>
      <div className="h3 text-primary">
        Эксклюзивный представитель концерна Artawheel в странах СНГ
      </div>
      <div className="h3">
        Мы предлагаем оптимальные шины для легковых, грузовых автомобилей и сельскохозяйственной техники.
      </div>
    
    </div>
  );
};

export default About;
