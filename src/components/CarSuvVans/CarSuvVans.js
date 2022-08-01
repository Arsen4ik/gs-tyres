import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Card, Button } from 'react-bootstrap'
import cardImage from '../../assets/card-image.png'
import FigureComponent from '../FigureComponent/FigureComponent'
import pic from '../../assets/audi.jpg'


import "./CarSuvVans.scoped.scss";


function CarSuvVans(props) {

    const navigateTo = useNavigate();
    const cardData = [{
        id: 0,
        title: 'Size: 195x65 R15',
        text: 'First all-season tyre fully focused on UHP segment. Unique performances in all-season segment.',
        picture: cardImage
    }, {
        id: 1,
        title: 'Size: 185x65 R15',
        text: 'First all-season tyre fully focused on UHP segment. Unique performances in all-season segment.',
        picture: cardImage
    }, {
        id: 2,
        title: 'Size: 185x60 R14',
        text: 'First all-season tyre fully focused on UHP segment. Unique performances in all-season segment. ',
        picture: cardImage
    },
     {
        id: 3,
        title: 'Size: 205x55 R16',
        text: 'First all-season tyre fully focused on UHP segment. Unique performances in all-season segment. ',
        picture: cardImage
    }]

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
               
                    {/* <span className="slogan">Шины для легковых машин</span>{props.name2} */}
               
            </figcaption>
        </figure>
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
        <h1>Шины для легковых машин</h1>
        <h2>GS-2020</h2>

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
</table>

        </>




    );
}

export default CarSuvVans;