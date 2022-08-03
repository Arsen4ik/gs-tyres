import { useRef, useEffect } from "react";
import tyre from "../assets/tyre-rotation1.png";
import { gsap } from "gsap";
import banner from "../assets/aboutBanner.jpg";

// import "./About.scoped.scss";

const News = () => {
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
      <article className="bg-white">
        <div className="vh-75 bg-center" style={{ backgroundImage: `url(${banner}` }}></div>
        <div className="ph4 ph5-m ph6-l">
          <div className="pv5 f4 f2-ns measure center">
            <h1 className="fw6 f2 fl w-100 black-70 mt0 mb3 avenir">Концерн Artawheel Tire lndustrial Complex является крупнейшим производителем радиальных шин в Иране.</h1>
            <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
              Три завода производят легковые, грузовые и сельхоз шины под брендами Goldstone, Razi и Yazd.
              Продукция концерна Artawheel Tire lndustrial Complex отличается высоким качеством и надежностью. Bcя продукция производится на новейшем оборудовании.
              В 2022 году компания приняла решение об открытии официального представительства на территории Российской Федерации для реализации товара в странах Евразийского союза.
            </p>
          </div>
        </div>
      </article>

      <br />

      <div id="main-tyre">
        <img src={tyre} ref={element} alt='tyre' />
      </div>

    </>
  );
};

export default News;
