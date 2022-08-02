import { useNavigate } from "react-router-dom";

import "./MainList.scss";
import car from "../../assets/car-64.png";
import tyre from "../../assets/tyre-rotation1.png";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const MainList = () => {
  const navigateTo = useNavigate();
  const data = ["Шины для легковых автомобилей".toUpperCase(), "Шины для грузовых автомобилей".toUpperCase(), " Шины для сельскохозяйственной техники".toUpperCase()];
  // const data = ["CAR, SUV & VAN", "TRUCKS", "AGRICULTURAL & INDUSTRIAL"];
  const element = useRef();
  //   const q = gsap.utils.selector(element);
  useEffect(() => {
    gsap.to(element.current, {
      rotation: 360,
      duration: 7,
      ease: "none",
      repeat: -1,
    });
  });

  const handleListClick = (e) => {
    console.log(e.target)
    const name = e.target.getAttribute('name')
    if (name === '0') {
      // console.log(name);
      navigateTo("/car-suv-vans");
    } else if (name == 1) {
      // console.log(e.target.value);
      navigateTo('/trucks')
    } else if (name == 2) {
      // console.log(e.target);
      navigateTo('/agriculture')
    } else {
      // console.log("no data");
    }
  };

  return (
    <>
      <div id="list">
        
          {data.map((el, idx) => (
            <div
              className="lst bg-dark-gray"
              value={idx}
              key={idx}
              name={idx}
              onClick={handleListClick}
            >
              <p className="dib v-mid fw4" onClick={handleListClick} name={idx} >{el}</p>
            </div>
          ))}
      </div>

      <div id="main-tyre">
        <img src={tyre} ref={element} />
      </div>
    </>
  );
};

export default MainList;


