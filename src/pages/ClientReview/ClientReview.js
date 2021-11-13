import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Container, Row, Col } from "react-bootstrap"

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
    data.displayName = user?.displayName;
    fetch("https://spooky-nightmare-94517.herokuapp.com/trips", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    alert("your review added");
    reset();
  };
  return (
    <Container className="mx-0">
      <Row className="mx-0">
        <Col sm={8}>
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="your name"
                className="p-2 me-1 mb-2 input-style border border-2 rounded border-primary"
              />
              <input
                {...register("profession")}
                placeholder="your profession"
                className="p-2 ms-1 mb-2 input-style border border-2 rounded border-primary"
              />
              <br />

              <input
                {...register("description")}
                placeholder="Description"
                className="p-2 pb-5  w-50 border border-2 rounded border-primary"
              />
              <br />
              <input
                {...register("rating")}
                placeholder="Bike Rating  "
                type="number"
                className="p-2 me-1 mt-2 input-style border border-2 rounded border-primary"
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Add"
                className="btn btn-info text-white  m-3 w-25"
              />
            </form>
          </div>
        </Col>
        <Col sm={4}>
        <div>
            <img
              src="https://www.india.com/wp-content/uploads/2021/09/21C0550_001.jpg"
              alt=""
              className="clipping-img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientReview;
