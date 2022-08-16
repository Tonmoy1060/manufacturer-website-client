import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Modal from "./Modal";
import "react-toastify/dist/ReactToastify.css";

const Purchase = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`https://nameless-dusk-38073.herokuapp.com/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);



  const orderUpdateProduct = (event) => {
    const confirm = window.confirm(`You are ordering 1 unit ${detail.name}`);
    if (confirm) {
      event.preventDefault();
      const orderer = event.target.dName.value;
      const email = event.target.email.value;
      const product = event.target.oName.value;
      const quantity = event.target.oQuantity.value;
      const available = event.target.available.value;

      const order = { orderer, email, product, quantity };

      const newAvailAble = available - quantity;
      const updatedProduct = { newAvailAble };

      fetch(`https://nameless-dusk-38073.herokuapp.com/orders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });

      fetch(`https://nameless-dusk-38073.herokuapp.com/${id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });
      navigate("/");
    }
  };
  return (
    <div>
      

      <div class="hero min-h-screen bg-base-200 lg:p-32">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left lg:pl-10">
            <h1 class="text-5xl font-bold">Order Now {detail.name}!</h1>
            <p class="py-6">
              {detail.description}
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={orderUpdateProduct} action="">
              <div class="card-body">
                <div class="form-control">
                  <input
                    name="dName"
                    type="text"
                    placeholder="name"
                    value={user.displayName}
                    class="input  input-bordered"
                    readOnly
                  />
                </div>
                <div class="form-control">
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    class="input  input-bordered"
                    value={user.email}
                    readOnly
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      You are ordering
                      <small> (1 unit)</small>
                    </span>
                  </label>
                  <input
                    name="oName"
                    type="text"
                    placeholder="(1 unit)"
                    class="input  input-bordered"
                    value={detail.name}
                    readOnly
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Available</span>
                  </label>
                  <input
                    name="available"
                    type="text"
                    placeholder="(1 unit)"
                    class="input  input-bordered"
                    value={detail.quantity}
                    readOnly
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      <small>1 unit {detail.name}</small>
                    </span>
                  </label>
                  <input
                    name="oQuantity"
                    type="text"
                    placeholder="(1 unit)"
                    class="input  input-bordered"
                    value={detail.minimum}
                    readOnly
                  />
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Order Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Purchase;
