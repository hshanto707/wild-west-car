import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import './CartCard.css'
import useCart from '../../hooks/useCart';

const Card = (props) => {
  const {_id, name, price, img, description, rating, email} = props.car;
  const history = useHistory();
  
  const { removeFromCart, removeFromCar } = useCart();

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
      {email ? <Button
          onClick={() => {removeFromCart(_id)}}
          className="button-light my-3"
        >
          Cancel
        </Button> : 
        <Button
        onClick={() => {removeFromCar(_id)}}
        className="button-light my-3"
      >
        Delete
      </Button>}
      </div>
    </div>
  );
};

export default Card;