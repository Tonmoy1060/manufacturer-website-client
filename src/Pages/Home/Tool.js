import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, price, img, quantity, minimum ,description } = tool;

  const navigate = useNavigate();
  const purchasePage = (id) => {
      navigate(`/purchase/${id}`)
  }
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-2 pt-2">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
          <p>
            <small>{description}</small>
          </p>
          <p className="font-semibold">Available : {quantity}</p>
          <p className="font-semibold">Minimum order : {minimum} {`(1 unit)`}</p>
        <p className="font-semibold">Price: {price}$ per unit</p>
        <div className="card-actions">
            <button onClick={() => purchasePage(_id)}
              className="btn btn-primary w-full text-center"
              disabled={quantity === 0}
            >
              Buy Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
