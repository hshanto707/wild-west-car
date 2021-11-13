import React from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Card.css'

const Card = (props) => {
  const {_id, name, price, img, description} = props.car;

  return (
    <div className="card d-flex flex-column text-start">
      <img className="card-img" src={img} alt="" />
      <div className="mx-3">
        <h4 className="name fw-bolder fs-2 mt-3">
          {name}
        </h4>
        <p className="details text-white mt-3">{description.slice(0, 100)}...</p>
        <h5 className="price fw-normal mb-3">Price: ${price}</h5>
      </div>
      <div className="text-center mt-auto">
        <NavLink className="" to={`/cars/${_id}`}>
          <Button className="button-light mb-4">View Details</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;