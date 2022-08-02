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

      <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns pt6 bg-light-green">
        <h3 className="ma1 ">Концерн Artawheel Tire lndustrial Complex является крупнеишим производителем радиальных шин в Иране.</h3>
        <br />
        <h3 className="ma1 ">Три завода производят легковые, грузовые и сельхоз шины под брендами Goldstone, Razi и Yazd.
          Продукция концерна Artawheel Tire lndustrial Complex отличается высоким качеством и надежностью. Вся продукция производится на новейшем оборудовании.
          В 2022 году компания приняла решение об открытии официального представительства на территории Российской Федерации для реализации товара в странах Евразийского союза. </h3>
        <br />
        <h2 className="ma1 bg-lightest-blue">Контакты:</h2>
        <address>
          <a href="mailto:rinat@gs-tyres.com">rinat@gs-tyres.com</a>
          <br />
          <a href="mailto:sales@gs-tyres.com">sales@gs-tyres.com</a>
          <br />
          <a href="tel:+79961232940">+7 (996) 123-29-40</a>
          <h5>Республика Татарстан, Казань</h5>
        </address>
        {/* <p className="lh-copy measure">
    Combine width or max-width values with the center className to create a centered
    container for your content.
  </p> */}

        <div id="main-tyre">
          <img src={tyre} ref={element} />
        </div>
      </section>




    </>
  );
};

export default Contacts;