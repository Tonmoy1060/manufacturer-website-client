import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const GetReview = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleGetReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const location = event.target.location.value;
    const img = event.target.img.value;
    const review = event.target.comment.value;

    const newReview = {name,location,img, review }

    fetch(`https://nameless-dusk-38073.herokuapp.com//reviews`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });

        event.target.reset();
  };

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title w-full mx-auto text-accent text-center">
            Review For Us
          </h2>
          <form onSubmit={handleGetReview} action="">
            <input
              name="name"
              type="text"
              placeholder="Type here"
              class="input input-bordered input-xs w-full max-w-xs"
              value={user.displayName}
              readOnly
            />
            <br />
            <br />
            <input
              name="location"
              type="text"
              placeholder="Your location"
              class="input input-bordered input-xs w-full max-w-xs"
            />
            <br />
            <br />
            <input
              name="img"
              type="text"
              placeholder="Your Image"
              class="input input-bordered input-xs w-full max-w-xs"
            />
            <br />
            <br />
            <textarea
              name="comment"
              class="textarea textarea-info"
              placeholder="Comment here"
            ></textarea>
            <br />
            <br />
            <button class="btn btn-primary w-full flex justify-center">
              Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetReview;
