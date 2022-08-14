import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, price, available, img, quantity, description } = tool;

    // const navigate = useNavigate();
    // const purchasePage = (id) => {
    //     navigate(`/purchase`)
    // }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-2 pt-2">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><small>{description}</small></p>
                <p className='font-semibold'>Quantity: {quantity}</p>
                <p className='font-semibold'> 
                    Minimum order: 1 unit {available.length > 0
                        ? <span>{available[0]}</span>
                        : <span className='text-red-500'>No  Unit Available</span>
                    }
                </p>
                <p className='font-semibold'>Available: {available.length} unit</p>
                <p className='font-semibold'>Price: {price}$ per unit</p>
                <div className="card-actions">
                    <Link to='/purchase'><button className="btn btn-primary w-full text-center" disabled ={available.length===0}>Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;