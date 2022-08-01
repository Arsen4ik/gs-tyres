import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Card, Button } from "react-bootstrap";
import cardImage from "../../assets/card-image.png";
import FigureComponent from "../FigureComponent/FigureComponent";
import pic from "../../assets/Truck.jpg";

import "./Trucks.scoped.scss";

function Trucks() {
  const navigateTo = useNavigate();

  return (
    <>
      <figure className="mainbanner">
        <img src={pic} alt="tractor" />
        <figcaption>
          {/* <span className="sloganTractor">Шины для сельскохозяйственной техники</span> */}
      
        </figcaption>
      </figure>

      <h1>Шины для грузовых автомобилей</h1>
      <h2>GSX 2000 SUPER</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Размер</th>
            <th scope="col">Норма слойности (pr)</th>
            <th scope="col">Ширина обода (дюйм)</th>
            <th scope="col">Максимальная скорость км/ч</th>
            <th scope="col">Индекс нагрузки</th>
            <th scope="col">Диаметр (мм)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>18.4-15/30</td>
            <td>8</td>
            <td>16x30</td>
            <td>25</td>
            <td>2430 (139)</td>
            <td>1600+/-10</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>18.4-15/30</td>
            <td>10</td>
            <td>16x30</td>
            <td>25</td>
            <td>2900 (145)</td>
            <td>1600+/-10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>18.4-15/30</td>
            <td>12</td>
            <td>16x30</td>
            <td>25</td>
            <td>3250 (149)</td>
            <td>1600+/-10</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>18.4-15/34</td>
            <td>8</td>
            <td>16x34</td>
            <td>25</td>
            <td>2650 (142)</td>
            <td>1700+/-10</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>18.4-15/34</td>
            <td>10</td>
            <td>16x34</td>
            <td>25</td>
            <td>3000 (146)</td>
            <td>1700+/-10</td>
          </tr>
        </tbody>
      </table>

      <h2>GS 2040</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Размер</th>
            <th scope="col">Норма слойности (pr)</th>
            <th scope="col">Ширина обода (дюйм)</th>
            <th scope="col">Максимальная скорость км/ч</th>
            <th scope="col">Индекс нагрузки</th>
            <th scope="col">Диаметр (мм)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>12.4-11/24</td>
            <td>8</td>
            <td>11 x 24</td>
            <td>40</td>
            <td>1425 (121)</td>
            <td>1160+/-10</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>14.9-13/24</td>
            <td>8</td>
            <td>13x24</td>
            <td>40</td>
            <td>1800 (128)</td>
            <td>1265+/-10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>14.9-13/24</td>
            <td>10</td>
            <td>13x24</td>
            <td>40</td>
            <td>2000 (132)</td>
            <td>1265+/-10</td>
          </tr>
        </tbody>
      </table>

      <h2>GS 800</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Размер</th>
            <th scope="col">Норма слойности (pr)</th>
            <th scope="col">Ширина обода (дюйм)</th>
            <th scope="col">Максимальная скорость км/ч</th>
            <th scope="col">Индекс нагрузки</th>
            <th scope="col">Диаметр (мм)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>7.50-16 </td>
            <td>8</td>
            <td>5,5 х 16</td>
            <td>60</td>
            <td>875 (103)</td>
            <td>825+/-8</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Trucks;
