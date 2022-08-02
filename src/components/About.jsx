import { useRef, useEffect } from "react";
import tyre from "../assets/tyre-rotation1.png";
import { gsap } from "gsap";
import banner from "../assets/aboutMain.jpg";

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
      <article className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
        {/* <h1 className="f2 mt5">О нас</h1> */}
        <img src={banner} className="w-100 f5 measure mt6" alt="Photo of outer space" />
        <p className="measure lh-copy center">
          Концерн Artawheel Tire lndustrial Complex является крупнеишим производителем радиальных шин в Иране.
        </p>
        <p className="measure lh-copy center">
          Продукция концерна Artawheel Tire lndustrial Complex отличается высоким качеством и надежностью. Вся продукция производится на новейшем оборудовании.
          В 2022 году компания приняла решение об открытии официального представительства на территории Российской Федерации для реализации товара в странах Евразийского союза.
        </p>
      </article>
      <div id="main-tyre">
          <img src={tyre} ref={element} />
        </div>
      {/* <img src={banner} alt="about" style={{ paddingTop: "100px" }} />
      <div classNameName="container-fluid about">
        <div id="main-tyre">
          <img src={tyre} ref={element} />
        </div>
        <div classNameName="h3 text-primary">
          Эксклюзивный представитель концерна Artawheel в странах СНГ
        </div>
        <div classNameName="h3">
          Мы предлагаем оптимальные шины для легковых, грузовых автомобилей и
          сельскохозяйственной техники.
        </div>
      </div> */}
    </>
  );
};

export default About;
