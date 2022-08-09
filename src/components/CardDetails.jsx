import { useLocation } from "react-router-dom";
import { useState } from "react";

const CardDetails = () => {
  const location = useLocation();
  


  const elements = location.state[0].models.map((el, idx) => {
      return (
        <>
        {/* {el.modelName ? <li className="ph3 pv3 bb red b b--light-silver"><span className="red">{el.modelName}</span></li>: null} */}
        {el.pr ? <li className="ph3 pv3 bg-red bb b--light-silver">Норма слойности: <span className="">{el.pr}</span></li>: null}
          <li className="ph3 pv3 bb b--light-silver">Индекс нагрузки: <span className="red">{el.loadIndex}</span></li>
          {el.speedIndex ? <li className="ph3 pv3 bb b--light-silver">Индекс скорости: <span className="red">{el.speedIndex}</span></li> : null}
          {el.maxSpeed ? <li className="ph3 pv3 bb b--light-silver">Макс. скорость (км/ч): <span className="red">{el.maxSpeed}</span></li> : null}
          {el.setupAxis ? <li className="ph3 pv3 bb b--light-silver">Ось установки: <span className="red">{el.setupAxis}</span></li>: null}
          {el.diameter ? <li className="ph3 pv3 bb b--light-silver">Диаметр (мм): <span className="red">{el.diameter}</span></li>: null}
          {el.rimWidth ? <li className="ph3 pv3 bb b--light-silver">Ширина обода (дюйм): <span className="red">{el.rimWidth}</span></li>: null}
          
        </>
      )
    })
      


  // console.log('location  state:',location.state[0])


  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <article className="pa3 pa5-ns">
        <h1 className="f4 bold center mw6">{location.state[0].name}</h1>
        <h1 className="f6 bold center mw6">{location.state[0].size}</h1>

        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">

        {elements}

          {/* <li className="ph3 pv3 bb b--light-silver">Максимальная скорость: {location.state[0].maxSpeed}</li>  */}
          {/* {
           location.state[0].models ? location.state[0].models.map((el, idx) => {
              return (
                <>
              
                  <li className="ph3 pv2 bg-red bb b--light-red">{el.modelName}</li>
                  <li className="ph3 pv3 bb b--light-silver">Норма слойности: <span className="red">{el.pr}</span></li>
                  <li className="ph3 pv3 bb b--light-silver">Индекс нагрузки: <span className="red">{el.loadIndex}</span></li>
                  <li className="ph3 pv3 bb b--light-silver">Диаметер: <span className="red">{el.diameter}</span> </li>
                  <li className="ph3 pv3 bb b--light-silver">Ширина обода: <span className="red">{el.rimWidth }</span></li>
                </>
              )
            }) : null
          } */}



          {/* {
            location.state[0].setupAxis ?v: null
          }  */}

        </ul>
      </article>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default CardDetails;
