import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth'

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
      alert("your review added")
      reset();
    };
    return (
      <div>
        <h1 className="mt-5 text-center text-info">Please Add Trips</h1>
        <div className=" mt-5">
          <div className=" justify-content-center">
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

                <input type="submit" value="Add" className="btn btn-info text-white  m-3 w-25" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ClientReview;