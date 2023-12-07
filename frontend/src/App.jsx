import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Calendario from './pages/Calendario.jsx'
import Cronometro from './pages/Cronometro.jsx'
import Grafico from './pages/Grafico.jsx'
import Notas from './pages/Notas.jsx'
import Homepage from './pages/Homepage.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/'element={<Homepage/>}/>
          <Route path='/calendario'element={<Calendario/>}/>
          <Route path='/cronometro'element={<Cronometro/>}/>
          <Route path='/grafico'element={<Grafico/>}/>
          <Route path='/notas'element={<Notas/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App