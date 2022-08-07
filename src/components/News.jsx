import { useRef, useEffect } from "react";
import tyre from "../assets/tyre-rotation1.png";
import { gsap } from "gsap";
import banner from "../assets/aboutBanner.jpg";
import "./News.scss";

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
          {/* <br />
          <br />
          <br />
          <br />
          <br /> */}
        <h1 className="fw6 f2 fl w-100 black-70 mt6 mb3 avenir">
          Концерн Artawheel Tire lndustrial Complex является крупнейшим
          производителем радиальных шин в Иране.
        </h1>
      
        <div className="ph4 ph5-m ph6-l">
          <div className="pv5 f4 f2-ns measure center">
          <h1 className="fw6 f2 fl w-100 red black-60 mt0 mb3 avenir">
                ИНТЕРАВТО. КРОКУС ЭКСПО
              </h1>
            <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
              17-я международная выставка автомобильной индустрии 23 Августа
              2022 — 26 Августа 2022 Приглашаем Вас посетить наш стенд М 354.
              Павильон 2, Зал 5 Вашему вниманию будет представлена продукция
              крупнейшего Иранского производственного концерна ARTAWHEEL.
              Радиальные шины, определяющие собой качество и умеренную цену.
            </p>
          </div>
        </div>
      </article>
      <div
          className="vh-75 bg-center news"
          style={{ backgroundImage: `url(${banner}` }}
        />

      <br />

      <div id="main-tyre">
        <img src={tyre} ref={element} alt="tyre" />
      </div>
    </>
  );
};

export default News;
