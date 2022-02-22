import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import ClapCount from './Hoc/ClapCount'
import avtar from '../logo/avtar.png'
import share from '../logo/share.png'
import LoadMore from './LoadMore';


function Reading() {
    const { id } = useParams();
    
    const [data,setData] = useState([])
    

    useEffect(()=>{
        axios.get(`https://rinkal-backend-app.herokuapp.com/api/v1/blogdata/details/?id=${id}`)
        .then((value)=> setData(value.data))
        
    },[id])
  

       
    return (
        < div >

           <span className="ClapFixed"> <p><ClapCount/></p> <p> <img src={share} alt="share" style={{width:"25px",marginRight:"10px"}}/> Share this Article </p>                </span>

        <div className="FlexContainer readJustifyCenter ">

           
            {data.map((result) =>
            <div className="ReadArtBox borderShadow">
                <div className="txtAlignCenter">{result.name}</div> <br/>
                <div className="FlexRow1">
                    <div className="Avtar"><img src={avtar} alt="avtar" style={{width:"50px"}}/> <span>Dmitry Nozhenko</span></div>
                    <div ><i class="fab fa-facebook-square icongap"></i><i class="fab fa-twitter-square icongap"></i><i class="fab fa-youtube-square icongap"></i><i class="fab fa-instagram icongap"></i></div>
                </div>

                <div><img  className="readArtImg" alt="Article" src={result.img}/></div>
                <ClapCount/> <br/>
                <div className=" ReadArtBox">{result.about}</div>
            </div>
            
            )
        }
        
        </div>
        <div style={{background:"white"}}>
<div className='LatestText'><div className='articleText'>More </div> Latest  Article</div>

<LoadMore dataObject={id}/>


</div>        </div>
    )
}

export default Reading