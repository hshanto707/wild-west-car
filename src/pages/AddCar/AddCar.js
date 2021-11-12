import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AddCar = () => {
    const { user } = useAuth();
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      fetch("http://localhost:5000/cars", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      console.log(data);
      alert("New car Successfully added")
      reset();
    };
    return (
      <div>
        <Header></Header>
        <h1 className="mt-5 text-center text-info">Please Add Trips</h1>
        <div className=" mt-5">
          <div className=" justify-content-center">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                  {...register("name")}
                  placeholder="Bike Name"
                  className="p-2 me-1 mb-2 input-style border border-2 rounded border-primary"
                />
                <input
                  {...register("make")}
                  placeholder="Bike maker"
                  className="p-2 ms-1 mb-2 input-style border border-2 rounded border-primary"
                />
                <br />
                <input 
                  {...register("year")}
                  placeholder="Realise Year"
                  className="p-2 me-1 mb-2 input-style border border-2 rounded border-primary"
                />
                <input
                  {...register("fuelType")}
                  placeholder=" Fuel Name"
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
                  {...register("img", { required: true })}
                  placeholder="Image Link"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-primary"
                />
                
                <input
                  {...register("price")}
                  type="number"
                  placeholder="price"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-primary"
                />

                 <br />
                <input
                  {...register("transmission")}
                  placeholder="transmission"
                  type="text"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-primary"
                />
                <input 
                  {...register("condition")}
                  type="text"
                  placeholder="Bike Condition"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-primary"
                />
                <br />
                <input
                  {...register("doors")}
                  placeholder="Number of Door "
                  type="text"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-primary"
                />
                <input 
                  {...register("color")}
                  type="text"
                  placeholder="Bike Color"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-primary"
                />
                <br />
                <input
                  {...register("engine")}
                  placeholder="Engine Type "
                  type="text"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-primary"
                />
                <input 
                  {...register("cylinders")}
                  type="number"
                  placeholder="Bike cylinders"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-primary"
                />
                 <br />
                <input
                  {...register("rating")}
                  placeholder="Bike Rating  "
                  type="number"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-primary"
                />
                <input 
                  {...register("model")}
                  type="text"
                  placeholder=" Model Bike "
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-primary"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Add" className="btn btn-info text-white  m-3 w-25" />
              </form>
            </div>
          </div>
        </div>
      <Footer></Footer>
      </div>
    );
  };

export default AddCar;