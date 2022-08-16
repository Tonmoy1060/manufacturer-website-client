import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const MyOrder = ({ order }) => {
   const [user, loading, error] = useAuthState(auth);
   if(loading){
      return <Loading></Loading>
    }
  return (
    <div class="card bg-base-100 shadow-xl m-3">
      <div class="card-body">
        <h2 class="card-title">Buyer: {user.displayName}</h2>
        <p>Product : {order.product}</p>
        <p> Quantity: {order.quantity}</p>
      </div>
    </div>
  );
};

export default MyOrder;
