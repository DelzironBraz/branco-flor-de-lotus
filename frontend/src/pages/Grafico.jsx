import React from 'react';
import Sidebar from '../components/Sidebar.jsx'
import CircularWithValueLabel from '../components/Progresso.jsx';
import './Calendario.jsx'
import './Grafico.css'

const Grafico = () => {
    return (
        <>
            <div className='vasco'>
                <Sidebar/>
                <div className='vasco2'>
                    <CircularWithValueLabel/>
                </div>
            </div>
        </>
    );
};

export default Grafico;