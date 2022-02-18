import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import ClapCount from './Hoc/ClapCount'
import avtar from '../logo/avtar.png'
import share from '../logo/share.png'


function Reading() {
    const { id } = useParams();
    let result=[]
    const MoreResult=[]
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:7000/api/v1/blogdata/details")
        .then((value)=> setData(value.data))
    },[])
    data.forEach((a)=>{
        if (a.Id===id) {
        result.push(a.Category)
               
            
    }})
    const category=result[0]
    data.forEach((a)=>{
        if ((a.Category===category)&&(a.Id!==id)) {
            MoreResult.push(
            {  id:a.Id,
                category:a.Category,
                name: a.Name,
                img: a.Img,
                date:a.Date,
                about:a.About
            })
        }
    })
    
    
    

       
    return (
        < div >

           <span className="ClapFixed"> <p><ClapCount/></p> <p> <img src={share} alt="share" style={{width:"25px",marginRight:"10px"}}/> Share this Article </p>                </span>

        <div className="FlexContainer readJustifyCenter ">

           
            {data.filter((dataa) => dataa.Id===id).map((result) =>
            <div className="ReadArtBox borderShadow">
                <div className="txtAlignCenter">{result.Name}</div> <br/>
                <div className="FlexRow1">
                    <div className="Avtar"><img src={avtar} alt="avtar" style={{width:"50px"}}/> <span>Dmitry Nozhenko</span></div>
                    <div ><i class="fab fa-facebook-square icongap"></i><i class="fab fa-twitter-square icongap"></i><i class="fab fa-youtube-square icongap"></i><i class="fab fa-instagram icongap"></i></div>
                </div>

                <div><img  className="readArtImg" alt="Article" src={result.Img}/></div>
                <ClapCount/> <br/>
                <div className=" ReadArtBox">{result.About}</div>
            </div>
            
            )
        }
        
        </div>
<div className='LatestText'><div className='articleText'>More </div> Latest  Article</div>


             <div className='FlexContainer'>

                {MoreResult.filter((value,index) => index<6).map((latest) => 
                            <div key={latest.id}>
                                
                                <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                                <div>
                                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='CardDesc '>About : {latest.about.slice(0,30)} </span>
                                    <p className='cardDate'>{latest.category}<span className='CardDesc'>{latest.date}</span></p>
                               </div>
                           </div>
                        ) }
                        </div>
        </div>
    )
}

export default Reading