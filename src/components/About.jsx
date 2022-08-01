import { useRef, useEffect } from "react";
import tyre from "../assets/tyre-rotation1.png";
import { gsap } from "gsap";
import banner from "../assets/aboutBanner.jpg";

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
    <>
      <img src={banner} alt="about" style={{ paddingTop: "100px" }} />
      <div className="container-fluid about">
        <div id="main-tyre">
          <img src={tyre} ref={element} />
        </div>
        <div className="h3 text-primary">
          Эксклюзивный представитель концерна Artawheel в странах СНГ
        </div>
        <div className="h3">
          Мы предлагаем оптимальные шины для легковых, грузовых автомобилей и
          сельскохозяйственной техники.
        </div>
      </div>
    </>
  );
};

export default About;
