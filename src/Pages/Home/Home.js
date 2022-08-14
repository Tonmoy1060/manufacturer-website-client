import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Reviews from './Reviews';
import Service from './Service';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <div className='m-10 '>
                <Banner></Banner>
            </div>
            <Info></Info>
            <Tools></Tools>
            <Reviews></Reviews>
            <Service></Service>
            <Summary></Summary>
        </div>
    );
};

export default Home;