import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search/:img' exact element={<Search/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
