import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.png';
import dat from './data.webp';

const Search = ({match}) => {
const {img} = useParams();

const [data,setData] = useState([]);
const [loading,setLoading] = useState(false);

const download=(pic)=>{
    fetch(pic).then(response =>{
      response.arrayBuffer().then(function(buffer){
        const pic = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement('a');
        link.href = pic;
        link.setAttribute('download','image.png');
        document.body.appendChild(link);
        link.click();
      })
    })
    .catch(err => {
      alert(err);
    });
  }
 
   useEffect(()=>{
    setLoading(true);
    axios.get(`https://pixabay.com/api/?key=39107652-1fabcb4d5c336f47f597803db&q=${img}&image_type=photo&pretty=true`).then(
        res => setData(res.data.hits)
    )
    setLoading(false);
   })

  return (

    <>
    <div className='heading'>
    <img src={logo} alt='fort-folio' height='95rem'/>
        </div>
<br/>
    <div className='head'>
        Showing Results for {img} ...
    </div>
    <div className='images'>
        

        { 
        data && !loading ?
        (
        data.map(pic => 
           (
             <div className='card'> 
                    <img src={pic.largeImageURL} alt={pic.id} height='500' width='800'/>
                    <div className='tags'>
                        <button className='download' onClick={download}>Download</button>
                    </div>
            </div>
           )
        )
        ):(
            <div className='error'>
                <img src={dat}/>
            </div>
        )
        }

</div>
</>
  )
}

export default Search;
