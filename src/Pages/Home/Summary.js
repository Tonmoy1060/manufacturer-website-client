import React from 'react';
import { FaTools, FaFontAwesomeFlag , FaPeopleCarry } from "react-icons/fa";
import { IconContext } from "react-icons";

const Summary = () => {
    return (
        <div>
            {/* <h1 className='text-5xl font-bold text-center text-accent'>Our Achievement</h1> */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-center p-20'>
                <IconContext.Provider value={{ style: { fontSize: '60px', color: "black" } }}>
                    <div>
                        <FaPeopleCarry className='inline-block'/>
                        <h1 className='text-sm mt-8'>Served 100+ customers</h1>
                    </div>
                    <div>
                        <FaFontAwesomeFlag className='inline-block'/>
                        <h1 className='text-sm mt-8'>2K+ Countries</h1>
                    </div>
                    <div>
                        <FaTools className='inline-block'/>
                        <h1 className='text-sm mt-8'> 50+ tools</h1>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
};

export default Summary;