import {Link} from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
function TopArticle() {
       const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://rinkal-backend-app.herokuapp.com/api/v1/blogdata/details/top")
        .then((value)=> setData(value.data))
        .catch(err => {console.log(err)})
    },[])
    
   


    return (
        <div className='FlexContainer  topArtContainer'>
            {data.filter((value,index)=>index<1).map((ra,index)=>
                 <div key={ra.id}>
                      <div style={{cursor:"pointer"}}><Link to={`/Reading/${ra.id}`}> <img className='topArtImgBox' src={ra.img}alt="top"/></Link></div>
                    
                        <div className='FlexContainer'>   
                             <div className='top1ArtTitle'>  
                                <div >{ra.name.slice(0,15)} ...</div>
                                <p className='topCat'>{ra.category}<span className='topDate'> / {ra.date}</span></p>
                            </div>
                            <div className='topArtIndex'> {index+1}</div>
                         </div>
                </div>
            )}
            {data.filter((value,index)=>index>0).map((raa,index)=>
                <div key={raa.id} className='FlexContainer'>
                   <div style={{cursor:"pointer"}}><Link to={`/Reading/${raa.id}`}>  <img className='topArtImgBox2' src={raa.img}alt="{raa.name}"/></Link></div>
                    <div className='topArtTitle'>
                        <div className=''>{raa.name.slice(0,15)}</div>
                        <p className='topCat'>{raa.category}<span className='topDate'> / {raa.date}</span></p>
                    </div>

                   <div className='topArtIndex'> {index+2}</div> 
                </div>
            
            )}
     </div>  
    )
}

export default TopArticle