import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from './components/about';
import Start from './components/start';
import Projects from './components/projects';

import * as S from './components/styled';

function App(){

  return (
    <>
    <S.GlobalStyle/>
    <BrowserRouter>
    <S.Header>
    <nav>
      <ul>
       <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/About">Sobre</Link>
      </li>
      <li>
        <Link to="/Projects">Projetos</Link>
       </li>
      </ul>
    </nav>
    </S.Header>
 
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/About' element={<About />} />
      <Route path='/Projects' element={<Projects/> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}



export default App
