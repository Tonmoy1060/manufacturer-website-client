import React from 'react';

const CArdInfo = ({bgClass, cardTitle, cardData}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}` }>
            <figure></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>{cardData}</p>
            </div>
        </div>
    );
};

export default CArdInfo;