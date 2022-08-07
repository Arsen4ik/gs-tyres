import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import cardImage from "../../assets/card-image.png";
import FigureComponent from "../FigureComponent/FigureComponent";
import pic from "../../assets/Truck.jpg";
import Card from '../Card'



function Trucks() {
  const navigateTo = useNavigate();
  const cardData = [{
    id: 0,
    name: 'RL4',
    sizes: ['315/80/22.5'],
    setupAxis: 'рулевая',
    loadIndex: '156/150',
    speedIndex: 'L',
    description: 'tractor tyres desc goes here.',
    picture: cardImage
  },
  {
    id: 1,
    name: 'RT1',
    sizes: ['315/80/22.5'],
    setupAxis: 'ведущая',
    loadIndex: '154/150',
    speedIndex: 'L',
    description: 'desc',
    picture: cardImage
  },
  {
    id: 2,
    name: 'RM1',
    sizes: ['385/65/22.5'],
    setupAxis: 'прицепная',
    loadIndex: '158',
    speedIndex: 'L',
    description: 'desc',
    picture: cardImage
  },
  {
    id: 3,
    name: 'RL2',
    sizes: ['385/65/22.5'],
    setupAxis: 'прицепная',
    loadIndex: '160',
    speedIndex: 'L',
    description: 'desc',
    picture: cardImage
  },

  ]




  return (
    <>
      <figure className="mainbanner">
        <img src={pic} alt="tractor" />
        <figcaption>
          <span className="sloganTractor">Шины для грузовых автомобилей</span>
        </figcaption>
      </figure>

    

      
      <div className='container-card'>
      {
        cardData.map((el, idx) => {
          return (
            <div className='card-Container'>
              <Card data={el} />
            </div>

          )
        })
      }
      </div>




      {/* <h2 className="f3 f2-m f1-l">RL4</h2>

      <div className="pa0">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8" cellspacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white ">№</th>
                <th className="fw6 tl pa3 bg-white">Размер</th>
                <th className="fw6 tl pa3 bg-white">Ось установки</th>
                <th className="fw6 tl pa3 bg-white">Индекс скорости/нагрузки</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr className="stripe-dark">
                <td className="pa3">1</td>
                <td className="pa3">315/80/22.5</td>
                <td className="pa3">рулевая</td>
                <td className="pa3">L/ 156/150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="f3 f2-m f1-l">RT1</h2>

      <div className="pa0">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellspacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">№</th>
                <th className="fw6 tl pa3 bg-white">Размер</th>
                <th className="fw6 tl pa3 bg-white">Ось установки</th>
                <th className="fw6 tl pa3 bg-white">Индекс скорости/нагрузки</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr className="stripe-dark">
                <td className="pa3">2</td>
                <td className="pa3">315/80/22.5</td>
                <td className="pa3">ведущая</td>
                <td className="pa3">L/ 154/150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="f3 f2-m f1-l">RM1</h2>

      <div className="pa0">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellspacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">№</th>
                <th className="fw6 tl pa3 bg-white">Размер</th>
                <th className="fw6 tl pa3 bg-white">Ось установки</th>
                <th className="fw6 tl pa3 bg-white">Индекс скорости/нагрузки</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr className="stripe-dark">
                <td className="pa3">3</td>
                <td className="pa3">385/65/22.5</td>
                <td className="pa3">прицепная</td>
                <td className="pa3">L/ 158</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="f3 f2-m f1-l">RL2</h2>

      <div className="pa0">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellspacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">№</th>
                <th className="fw6 tl pa3 bg-white">Размер</th>
                <th className="fw6 tl pa3 bg-white">Ось установки</th>
                <th className="fw6 tl pa3 bg-white">Индекс скорости/нагрузки</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr className="stripe-dark">
                <td className="pa3">4</td>
                <td className="pa3">385/65/22.5</td>
                <td className="pa3">прицепная</td>
                <td className="pa3">L/ 160</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}




    </>
  );
}

export default Trucks;
