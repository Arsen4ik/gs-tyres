import { useLocation } from "react-router-dom";

const CardDetails = () => {
    const location = useLocation();

    

    // console.log(location.state[0])

  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <article className="pa3 pa5-ns">
        <h1 className="f4 bold center mw6">{location.state[0].name}</h1>
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
          <li className="ph3 pv3 bb b--light-silver">Индекс нагрузки: {location.state[0].loadIndex}</li>
          <li className="ph3 pv3 bb b--light-silver">Индекс скорости: {location.state[0].speedIndex}</li>
          <li className="ph3 pv3 bb b--light-silver">Размеры: {location.state[0].sizes.join(' ')}</li>
        </ul>
      </article>
    </>
  );
};

export default CardDetails;
