import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [bookedTour, setBookedTour] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setBookedTour(data);
        }
      });
  }, [uid]);

  // ADDING TO CART

  function addToCart(tour) {
    delete tour._id;
    tour.email = user?.email;
    tour.uid = uid;
    tour.status = "pending";

    fetch("http://localhost:5000/cart", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(tour),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const newBooked = [...bookedTour, tour];
          setBookedTour(newBooked);
        }
      });
  }

  // REMOVE FROM CART

  // const remove = (id) => {
  //   fetch(`http://localhost:5000/cart/${id}`, {
  //     method: "delete",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount === 1) {
  //         const restAfterRemove = bookedTour.filter((tour) => tour._id !== id);
  //         setBookedTour(restAfterRemove);
  //       }
  //     });
  // };

  const remove = id => {
    const newBookedTours = bookedTour.filter((tour) => tour._id !== id);
    setBookedTour(newBookedTours);
    // removeFromDb(key);
  };

  return { setBookedTour, remove, addToCart, bookedTour };
};

export default useCart;