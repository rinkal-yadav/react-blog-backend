import {Link} from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
function TopArticle() {
    let top1=[]
    let top3=[]
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://rinkal-backend-app.herokuapp.com/api/v1/blogdata/details")
        .then((value)=> setData(value.data))
    },[])
    data.forEach((a)=>{
        let key =a.Id
        switch (key) {
            case "21":
                    top1.push({
                    name: a.Name,
                    img: a.Img,
                    id:a.Id,
                    date:a.Date,
                    about:a.About,
                    category:a.Category
                })
                break;
                case "15":
                    top3.push({
                        name: a.Name,
                        img: a.Img,
                        id:a.Id,
                        date:a.Date,
                        about:a.About,
                        category:a.Category

                })
                break;
                case "22":
                top3.push({
                    name: a.Name,
                    img: a.Img,
                    id:a.Id,
                    date:a.Date,
                    about:a.About,
                    category:a.Category

                })
                break;
                case "11":
                top3.push({
                    name: a.Name,
                    img: a.Img,
                    id:a.Id,
                    date:a.Date,
                    about:a.About,
                    category:a.Category

                })
                break; 
               
        
            default:
                break;
        }
      
    })
   


    return (
        <div className='FlexContainer  topArtContainer'>
            {top1.map((ra,index)=>
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
            {top3.map((raa,index)=>
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