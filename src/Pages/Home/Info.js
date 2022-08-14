import React from 'react';
import CArdInfo from './CArdInfo';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20 mb-28'>
            <CArdInfo cardTitle="Our Location" cardData="Sisimpur, Uttar Sundarbon, Bangladesh" bgClass="bg-primary"></CArdInfo>
            <CArdInfo cardTitle="Opening Hour" cardData="24/7, that means we are always avaiable." bgClass="bg-secondary"></CArdInfo>
            <CArdInfo cardTitle="Contact Us" cardData="facebook, whatsapp, phone. Which u want?" bgClass="bg-accent"></CArdInfo>
        </div>
    );
};

export default Info;