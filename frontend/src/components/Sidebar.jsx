import React, { useState } from 'react';
import {
    FaCalendarAlt,
    FaHome,
    FaRegClock,
    FaChartBar,
    FaEdit,
    FaBars
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import logo from '../assets/Logo.png'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[ 
    {
        path:"/",
        name:"Homepage",
        icon:<FaHome/>

    },
    {
        path:"/calendario",
        name:"Calendário",
        icon:<FaCalendarAlt/>

    },
    
    {
        path:"/grafico",
        name:"Progresso",
        icon:<FaChartBar/>

    },
    
    ]
    return (
        <div className="container_sidebar">
            <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <img src={logo} style={{display: isOpen ? "block" : "none"}} className="logo"/>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

                   

export default Sidebar;