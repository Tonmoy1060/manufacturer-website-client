import React from 'react';
import img from '../../assets/banner/banner2.jpg'

const Service = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-center items-center bg-neutral'>
            <div className='flex-1'>
                <img src={img} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary font-bold p-2'>This Is Our Service</h3>
                <h2 className='text-3xl text-white'>Make Sure U want us</h2>
                <p className='text-white p-5'>
                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aperiam quos vitae odit. Culpa reprehenderit quis doloremque fugiat, dolores voluptatibus quod voluptatum fugit nesciunt, officia omnis ipsum pariatur necessitatibus accusantium ad excepturi. Vel, voluptatem, doloremque ullam architecto accusantium dicta repudiandae totam obcaecati voluptatibus molestias alias perspiciatis est, necessitatibus accusamus laudantium!</small>
                </p>
            </div>
        </section>
    );
};

export default Service;