import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./CarPage.css";

const CarPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  const {
    name,
    img,
    description,
    price,
    make,
    model,
    year,
    fuelType,
    transmission,
    condition,
    doors,
    color,
    engine,
    cylinders,
    rating,
  } = car;

  useEffect(() => {
    fetch(`http://localhost:5000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="car-page container">
      <div className="tour-hero">
        <div className="tour-hero-bg">
          <img src={img} alt="" className="tour-background my-4" />
        </div>
        <div className="">
          <h3>Description</h3>
          <p className="details">{description}</p>
        </div>
      </div>
      <div className="ms-3 mt-3 text-center">
        <div className="text-start">
          <h1>{name}</h1>
          <h6>
            {year} - {fuelType} - {condition}
          </h6>
        <hr />
        <h2 className="fw-bold mb-4" style={{ color: "#ff4605" }}>
          ${price}
        </h2>
        </div>
        <div
          className="d-flex justify-content-around p-4 text-start"
          style={{ backgroundColor: "#F2F5FB", borderRadius: "15px" }}
        >
          <div>
            <h5>Make</h5>
            <h5>Model</h5>
            <h5>Year</h5>
            <h5>Condition</h5>
            <h5>Doors</h5>
            <h5>Transmission</h5>
            <h5>Fuel Type</h5>
            <h5>Engine Size</h5>
            <h5>Cylinders</h5>
            <h5>Color</h5>
            <h5>Rating</h5>
          </div>
          <div>
            <h5>{make}</h5>
            <h5>{model}</h5>
            <h5>{year}</h5>
            <h5>{condition}</h5>
            <h5>{doors}</h5>
            <h5>{transmission}</h5>
            <h5>{fuelType}</h5>
            <h5>{engine}</h5>
            <h5>{cylinders}</h5>
            <h5>{color}</h5>
            <h5>
              {rating}
              <FontAwesomeIcon className="ms-2" icon={faStar} />
            </h5>
          </div>
        </div>
        <Button className="button-dark mt-3">Add To Cart</Button>
      </div>
    </div>
  );
};

export default CarPage;

// _id: ObjectId("618b2fba7c0f924127927cd8")
// name
// make
// Model
// year
// fuelType
// price
// img
// description
// transmission
// condition
// doors
// color
// engine
// cylinders
// rating
