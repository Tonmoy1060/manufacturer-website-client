import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    // const {id} = useParams();
    // const [detail, setDetail] = useState({});
    // useEffect(() => {
    //     // const url = `tools.json`;
    //     fetch(`tools.json`)
    //         .then(res => res.json())
    //         .then(data => setDetail(data));
    // }, [])
    return (
        <div>
            <h3 className='text-5xl text-center p-5'>This is Purchase page</h3>
        </div>
    );
};

export default Purchase;