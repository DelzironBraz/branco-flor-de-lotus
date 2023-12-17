import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Calendario from './pages/Calendario'
import Grafico from './pages/Progresso.jsx'
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import Tarefas from './pages/Tarefas';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'element={<Homepage/>}/>
          <Route path='/calendario'element={<Calendario/>}/>
          <Route path='/grafico'element={<Grafico/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/register'element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App