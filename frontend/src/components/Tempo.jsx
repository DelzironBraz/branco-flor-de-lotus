import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './Tempo.css';

function Tempo() {
 const [date, setDate] = useState(new Date())

return (
 <div className="calendar">
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
 </div>
  )

}

export default Tempo;