import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Container, Row, Col } from "react-bootstrap";
import './ClientReview.css';

const ClientReview = () => {
  const { user } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("https://limitless-everglades-07733.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    alert("Your Review Added Successfully!");
    reset();
  };
  return (
    <Container className="mx-0">
      <Row className="m-0 ">
        <Col sm={12} md={5} className="m-auto">
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Display Name"
                Required
                className="p-3 mb-2 w-50 input-style border border-2 rounded border-dark"
              />
              <br />
              <input
                {...register("profession")}
                placeholder="your profession"
                Required
                className="p-3 mb-2 w-50 input-style border border-2 rounded border-dark"
              />
              <br />
              <input
                {...register("description")}
                placeholder="Write Your Review"
                Required
                className="p-3 pb-5 w-50 border border-2 rounded border-dark"
              />
              <br />
              <input
                {...register("rating")}
                placeholder="Rating"
                type="number"
                min="1"
                max="5"
                Required
                className="p-3 w-50 mt-2 input-style border border-2 rounded border-dark"
              />
              <br />
              {errors.Required && <span>This field is required</span>}

              <input
                type="submit"
                value="Submit"
                className="button-dark mt-2 w-50"
              />
            </form>
          </div>
        </Col>
        <Col sm={12} md={7} className="ms-auto">
        <div>
            <img
              src="https://i.imgur.com/yhpB3Iq.png"
              alt=""
              className="side-img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientReview;
