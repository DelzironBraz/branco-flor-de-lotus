import React from 'react';
import Sidebar from '../components/Sidebar.jsx'
import Tarefas from '../components/Tarefas.jsx';
import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <div className='vasco'>
                <Sidebar/>
                <div className='vasco2'>
                    <Tarefas/>
                </div>
            </div>
        </>
    );
};

export default Homepage;