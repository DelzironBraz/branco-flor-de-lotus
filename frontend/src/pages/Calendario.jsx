import React from 'react';
import Sidebar from '../components/Sidebar.jsx'
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './Calendario.css';

function Tempo() {
 const [date, setDate] = useState(new Date())

return (
 <div className="calendar">
   <Sidebar />
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
 </div>
  )

}

export default Tempo;