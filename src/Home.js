import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom';
import logo from './logo.png';
import './App.css';

function Home() {
    
    const[img,setImg] = useState('');

    const navigate = useNavigate();

  return (
    <div className='container'>
        
        <div className='heading'>
           <img src={logo} alt='fort-folio' height='95em'/>
           <ul>
            <li><Link to='/search/nature' style={{textDecoration:'none',color:'dodgerblue'}}>NATURE</Link></li>
            <li><Link to='/search/wallpaper' style={{textDecoration:'none',color:'dodgerblue'}}>WALLPAPER</Link></li>
            <li><Link to='/search/moon' style={{textDecoration:'none',color:'dodgerblue'}}>MOON</Link></li>
            <li><Link to='/search/sunset' style={{textDecoration:'none',color:'dodgerblue'}}>SUNSET</Link></li>
            <li><Link to='/search/nightsky' style={{textDecoration:'none',color:'dodgerblue'}}>NIGHT SKY</Link></li>
            <li><Link to='/search/sunrise' style={{textDecoration:'none',color:'dodgerblue'}}>SUNRISE</Link></li>
            <li><Link to='/search/background' style={{textDecoration:'none',color:'dodgerblue'}}>BACKGROUND</Link></li>
            <li><Link to='/search/space' style={{textDecoration:'none',color:'dodgerblue'}}>SPACE</Link></li>
           </ul>
        </div>

      <div className='background'>

        <div className='forum'>
            <input type='text' placeholder='Search for photos on foto folio...' value={img} onChange={(e)=>setImg(e.target.value)}/>
            <button onClick={()=> img && navigate(`/search/${img}`)}>Search</button>
        </div>
        </div>
    </div>
  )
}

export default Home;