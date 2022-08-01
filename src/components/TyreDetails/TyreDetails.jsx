import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./TyreDetails.scoped.scss";
import tyre from "../../assets/car-tyre1.png";

const TyreDetails = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // console.log(location.state);
  return (
    <div className="details-grid">
      <div className="box-1">
        <h3>
          Усовершенствованный рисунок протектора для снижения уровня шума.
        </h3>
      </div>
      <div className="box-2">
        <img src={tyre} />
      </div>
      <div className="box-3">3</div>
      <div className="box-4" />
    </div>
  );
};

export default TyreDetails;
