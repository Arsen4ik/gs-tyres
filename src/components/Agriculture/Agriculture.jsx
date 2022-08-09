import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


import cardImage from "../../assets/card-image.png";
import FigureComponent from "../FigureComponent/FigureComponent";
import pic from "../../assets/tractor.jpeg";

import "./Agriculture.scoped.scss";
import Card from '../Card';

function Agriculture() {
  const navigateTo = useNavigate();

  const cardData = [{
    id: 0,
    name: 'GSX 2000 SUPER',
    size: ['18.4-15/30'],
    models: [
      {
        modelName: 'Вариант1',
        pr: ['8'],
        loadIndex: ['2430 (139)',],
        diameter: ['1600+/-10',],
        rimWidth: ['16x30',],
        speedIndex: '25'
      },
      {
        modelName: 'Вариант2',
        pr: ['10',],
        loadIndex: ['2900 (145)',],
        diameter: [, '1600+/-10',],
        rimWidth: ['16x30',],
        speedIndex: '25'
      },
      {
        modelName: 'Вариант3',
        pr: ['12'],
        loadIndex: ['3250 (149)'],
        diameter: ['1600+/-10'],
        rimWidth: ['16x30'],
        speedIndex: '25'
      },
    ],
    maxSpeed: '25',
    description: 'tractor',
    picture: cardImage,
  },
  {
    id: 1,
    name: 'GSX 2000 SUPER',
    size: ['18.4-15/34'],
    models: [
      {
        modelName: 'Вариант1',
        pr: ['8'],
        loadIndex: ['2650 (142)'],
        diameter: ['1700+/-10'],
        rimWidth: ['16x34'],
        maxSpeed: '40',
      },
      {
        modelName: 'Вариант2',
        pr: ['10'],
        loadIndex: ['3000 (146)'],
        diameter: ['1700+/-10'],
        rimWidth: ['16x34'],
        maxSpeed: '40',
      },
    ],

    description: 'tractor',
    picture: cardImage,

  },
  {
    id: 2,
    name: 'GS 2040',
    size: ['12.4-11/24'],
    models: [{
      modelName: 'Вариант1',
      pr: ['8'],
      loadIndex: ['5,5 х 16'],
      diameter: ['1160+/-10'],
      rimWidth: ['11 x 24'],
      maxSpeed: '40',
    }],
    description: 'tractor',
    picture: cardImage,

  },
  {
    id: 3,
    name: 'GS 2040',
    size: ['14.9-13/24'],
    models: [{
      modelName: 'Вариант1',
      loadIndex: ['5,5 х 16'],
      diameter: ['1265+/-10'],
      pr: ['8'],
      rimWidth: ['13x24'],
      maxSpeed: '40',
    },
    {
      modelName: 'Вариант2',
      loadIndex: ['5,5 х 16'],
      diameter: ['1265+/-10'],
      pr: ['10'],
      rimWidth: ['13x24'],
      maxSpeed: '40',
    },
    ],
    
    description: 'tractor',
    picture: cardImage,

  },
  {
    id: 4,
    name: 'GS 800',
    size: ['7.50-16'],
    models: [{
      modelName: 'Вариант1',
      loadIndex: ['875 (103)'],
      diameter: ['825+/-8'],
      pr: ['10'],
      rimWidth: ['13x24'],
      maxSpeed: '60',
    }
    ],
    
    description: 'tractor',
    picture: cardImage,
  },
  ]

  return (
    <>
      <figure className="mainbanner">
        <img src={pic} alt="tractor" />
        <figcaption>
          <span className="sloganTractor">Шины для сельскохозяйственной техники</span>

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
    </>
  );
}

export default Agriculture;
