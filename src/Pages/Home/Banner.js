import React from 'react';
import banner11 from '../../assets/banner/banner11.jpg';

const Banner = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full ">
            <figure><img className="w-full" src={banner11} alt="camera" /></figure>
            <div className="card-body">
                <h2 className="card-title">House Of every parts</h2>
                <p>Collect best weapon to shoot best sceen. Here we go.....</p>
            </div>
        </div>
    );
};

export default Banner;