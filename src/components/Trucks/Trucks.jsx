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

      <h2>RL4</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Размер</th>
            <th scope="col">Ось установки</th>
            <th scope="col">Индекс скорости</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>315/80/22.5</td>
            <td>рулевая</td>
            <td>L156/150</td>
          </tr> 
        </tbody>
      </table>
      <h2>RT1</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Размер</th>
            <th scope="col">Ось установки</th>
            <th scope="col">Индекс скорости</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>315/80/22.5</td>
            <td>ведущая</td>
            <td>L154/150</td>
          </tr> 
        </tbody>
      </table>
      <h2>RM1</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Размер</th>
            <th scope="col">Ось установки</th>
            <th scope="col">Индекс скорости</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>385/65/22.5</td>
            <td>прицепная</td>
            <td>L158</td>
          </tr> 
        </tbody>
      </table>
      <h2>RL2</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Размер</th>
            <th scope="col">Ось установки</th>
            <th scope="col">Индекс скорости</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>385/65/22.5</td>
            <td>прицепная</td>
            <td>L160</td>
          </tr> 
        </tbody>
      </table>

      
    </>
  );
}

export default Trucks;
