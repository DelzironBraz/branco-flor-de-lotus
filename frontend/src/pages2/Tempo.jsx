import React from 'react';
import Sidebar from '../components/Sidebar'
import Calendario from '../pages/Calendario.jsx';


const Calendario = () => {
    return (
        <>
            <div className='vasco'>
                <Sidebar/>
                <div className='vasco2'>
                    <Tempo/>
                </div>
            </div>
        </>
    );
};

export default Calendario;