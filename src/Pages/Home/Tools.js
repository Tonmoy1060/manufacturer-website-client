import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect( () => {
        fetch('https://nameless-dusk-38073.herokuapp.com//products')
        .then(res => res.json())
        .then(data => setTools(data));
    },[])

    return (
        <div>
            <h1 className='text-3xl font-bold text-primary text-center'>Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-20'>
                {
                    tools.map(tool =><Tool
                    key={tool._id}
                    tool={tool}>
                    </Tool>)
                }
            </div>
            
        </div>
    );
};

export default Tools;