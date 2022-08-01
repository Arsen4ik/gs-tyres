import { useNavigate } from "react-router-dom";

import "./MainList.scoped.scss";
import car from "../../assets/car-64.png";
import tyre from "../../assets/tyre-rotation1.png";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const MainList = () => {
  const navigateTo = useNavigate();
  const data = ["Шины для легковых машин".toUpperCase(), "Шины для грузовых машин".toUpperCase(), " Шины для сельскохозяйственной техники".toUpperCase()];
  // const data = ["CAR, SUV & VAN", "TRUCKS", "AGRICULTURAL & INDUSTRIAL"];
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

  const handleListClick = (e) => {
    if (e.target.value == 0) {
      // console.log(e.target.value);
      navigateTo("/car-suv-vans");
    } else if (e.target.value == 1) {
      console.log(e.target.value);
      navigateTo('/trucks')
    } else if (e.target.value == 2) {
      console.log(e.target.value);
      navigateTo('/agriculture')
    } else {
      // console.log("no data");
    }
  };

  return (
    <>
      <div id="list">
        <ListGroup>
          {data.map((el, idx) => (
            <ListGroup.Item
              className="bg-secondary text-light"
              action
              variant="primary"
              value={idx}
              onClick={handleListClick}
              key={idx}
            >
              {el}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div id="main-tyre">
        <img src={tyre} ref={element} />
      </div>
    </>
  );
};

export default MainList;


