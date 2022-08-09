import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

// import { Card, Button } from 'react-bootstrap'
import cardImage from '../../assets/card-image.png'
import FigureComponent from '../FigureComponent/FigureComponent'
import pic from '../../assets/audi.jpg'
import Card from '../Card'


import "./CarSuvVans.scoped.scss";


function CarSuvVans(props) {

  const navigateTo = useNavigate();
  const cardData = [{
    id: 0,
    name: 'GS-2020',
    size: ['185/65/R15'],
    models: [
      {
        loadIndex: '86',
        speedIndex: 'H',
      }
    ],
    description: 'car',
    picture: cardImage
  },
  {
    id: 1,
    name: 'GS-2020',
    size: ['185/65/R14'],
    models: [
      {
        loadIndex: '86',
        speedIndex: 'H',
      }
    ],
    description: 'car',
    picture: cardImage
  },
  {
    id: 2,
    name: 'GS-2020',
    size: ['185/60/R14'],
    models: [
      {
        loadIndex: '86',
        speedIndex: 'H',
      }
    ],
    
    description: 'car',
    picture: cardImage
  },
  {
    id: 3,
    name: 'RG-550',
    size: ['205/55/R16'],
    models: [
      {
        loadIndex: '86',
        speedIndex: 'H',
      }
    ],
    
    description: 'car',
    picture: cardImage
  },
  {
    id: 4,
    name: 'RG-550',
    size: ['195/65/R15'],
    models: [
      {
        loadIndex: '86',
        speedIndex: 'H',
      }
    ],
    
    description: 'car',
    picture: cardImage
  },
  {
    id: 5,
    name: 'RG-550',
    size: ['185/65/R15'],
    models: [
      {
        loadIndex: '86',
        speedIndex: 'H',
      }
    ],
    description: 'car',
    picture: cardImage
  },

  ]

  // const onCardClickHandler = (e) => {
  //     // console.log(e.target.value)
  //     navigateTo(`/tyre-details/${e.target.value}`, {state: cardData[e.target.value]}
  //     )

  // }

  return (
    <>
      <figure className="mainbanner">
        <img src={pic} alt="" />
        <figcaption>

          <span className="slogan">Шины для легковых автомобилей</span>{props.name2}

        </figcaption>
      </figure>
      {/* <h1>Шины для легковых автомобилей</h1> */}
      {/* <div id='card-tyre'>
            {
                cardData.map((el, idx) => {
                    return (
                        <Card style={{ width: '18rem' }} classNameName='mx-auto'>
                            <Card.Img variant="top" src={cardImage} />
                            <Card.Body>
                                <Card.Title>{cardData[idx].title}</Card.Title>
                                <Card.Text>
                                    {cardData[idx].text}
                                </Card.Text>
                                <Button variant="primary" onClick={onCardClickHandler} value={cardData[idx].id}>Details</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div> */}
      <div className='container-card'>
        {
          cardData.map((el, idx) => {
            return (
              <div className='card-container'>
                <Card data={el} key={idx} />
              </div>

            )
          })
        }
      </div>

      {/* <h2>GS-2020</h2>

<table className="table">
  <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col">Размер</th>
      <th scope="col">Индекс нагрузки</th>
      <th scope="col">Индекс скорости</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>185/60/R14</td>
      <td>86</td>
      <td>H</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>185/65/R14</td>
      <td>86</td>
      <td>H</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>185/65/R15</td>
      <td>86</td>
      <td>H</td>
    </tr>
  </tbody>
</table>

<h2>RG-550</h2>

<table className="table">
  <thead>
    <tr>
    <th scope="col">№</th>
      <th scope="col">Размер</th>
      <th scope="col">Индекс нагрузки</th>
      <th scope="col">Индекс скорости</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>185/65/R15</td>
      <td>86</td>
      <td>H</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>195/65/R15</td>
      <td>86</td>
      <td>H</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>205/55/R16</td>
      <td>86</td>
      <td>H</td>
    </tr>
  </tbody>
</table> */}

    </>




  );
}

export default CarSuvVans;