import { useRef, useEffect } from "react";
import tyre from "../assets/tyre-rotation1.png";
import { gsap } from "gsap";

const Contacts = () => {
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
      <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns pt6 w-100 ">
        <h2 className="ma1">Контакты:</h2>
        <br />

        <address>
          <a
            href="mailto:rinat@gs-tyres.com"
            className="f4 fw6 db navy link dim"
          >
            rinat@gs-tyres.com
          </a>
          <br />
          <a
            href="mailto:sales@gs-tyres.com"
            className="f4 fw6 db dark-blue link dim"
          >
            sales@gs-tyres.com
          </a>
          <br />
          <a href="tel:+79961232940" className="f4 fw6 db blue link dim">
            +7 (996) 123-29-40
          </a>
          <h5>Республика Татарстан, Казань</h5>
        </address>
        {/* <p className="lh-copy measure">
    Combine width or max-width values with the center className to create a centered
    container for your content.
  </p> */}

        <div id="main-tyre">
          <img src={tyre} ref={element} />
        </div>
        <h3 className="f3 lh-copy dark-blue">
          Эксклюзивный представитель концерна Artawheel
        </h3>
        <h3 className="f5  lh-copy">
          Мы предлагаем оптимальные шины для легковых, грузовых автомобилей и
          сельскохозяйственной техники.
        </h3>
      </section>
    </>
  );
};

export default Contacts;
