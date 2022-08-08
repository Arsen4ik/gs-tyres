import { useLocation } from "react-router-dom";

const CardDetails = () => {
    const location = useLocation();

    

    console.log(location.state[0])

  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <article className="pa3 pa5-ns">
        <h1 className="f4 bold center mw6">{location.state[0].name}</h1>
        {/* <h1 className="f6 bold center mw6">{location.state[0].sizes}</h1> */}
       
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
          
          {location.state[0].models ? <li className="ph3 pv3 bb b--light-silver">{location.state[0].models}</li> : null } 
          {/* {
            location.state[0].speedIndex ? <li className="ph3 pv3 bb b--light-silver">Индекс скорости: {location.state[0].speedIndex}</li> : null
          }
          
          
          {
            location.state[0].setupAxis ? <li className="ph3 pv3 bb b--light-silver">Ось установки: {location.state[0].setupAxis}</li> : null
          } */}
          
        </ul>
      </article>
    </>
  );
};

export default CardDetails;
