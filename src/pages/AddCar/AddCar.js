import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';

const AddCar = () => {
    const { user } = useAuth();
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      fetch("https://wild-west-cars.herokuapp.com/cars", {
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
      <div className="text-center">
      <h1 className="dash-title text-start">ADD CAR /</h1>
        <div className=" mt-5">
          <div className=" justify-content-center">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <input 
                  {...register("name")}
                  placeholder="Car Name"
                  className="p-2 me-2 mb-2 input-style border border-2 rounded border-dark"
                />

                <input
                  {...register("make")}
                  placeholder="Brand"
                  className="p-2 me-2 mb-2 input-style border border-2 rounded border-dark"
                />
                
                <input 
                  {...register("year")}
                  type="number"
                  placeholder="Year"
                  className="p-2 me-2 mb-2 input-style border border-2 rounded border-dark"
                />

                <input
                  {...register("fuelType")}
                  placeholder=" Fuel Type"
                  className="p-2 me-2 mb-2 input-style border border-2 rounded border-dark"
                />

                <input
                  {...register("description")}
                  placeholder="Description"
                   className="p-2 me-2 border border-2 rounded border-dark"
                />
  
                <input
                  {...register("img", { required: true })}
                  placeholder="Image URL"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />
                
                <input
                  {...register("price")}
                  type="number"
                  placeholder="Price"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />

                <input
                  {...register("transmission")}
                  placeholder="Transmission"
                  type="text"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />

                <input 
                  {...register("condition")}
                  type="text"
                  placeholder="Condition"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />
                
                <input
                  {...register("doors")}
                  placeholder="Numbers of Door "
                  type="number"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />

                <input 
                  {...register("color")}
                  type="text"
                  placeholder="Color"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />
                
                <input
                  {...register("engine")}
                  placeholder="Engine Type "
                  type="text"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />

                <input 
                  {...register("cylinders")}
                  type="number"
                  placeholder="Cylinders Number"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />
                
                <input
                  {...register("rating")}
                  placeholder="Rating"
                  type="number"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />
                
                <input 
                  {...register("model")}
                  type="text"
                  placeholder=" Model Bike"
                  className="p-2 me-2 mt-2 input-style border border-2 rounded border-dark"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Add" className="button-dark m-3" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AddCar;