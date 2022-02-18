import {Link} from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
function AllArticles() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:7000/api/v1/blogdata/details")
        .then((value)=> setData(value.data))
    },[])
    
    return (
        <div >
            <div className='FlexContainer'>
            {
            data.filter((value,index)=>index>=data.length-3).map((latest)=>
            <div  key={latest.Id}>
                      <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.Id}`}><img className='cardImgBox' src={latest.Img}alt=""/> </Link></div>

                    <div >
                    <div className='cardTitle'>{latest.Name}</div>
                                    <span className='CardDesc '>About: {latest.About.slice(0,30)} ...</span>
                                     <p className='cardDate'>{latest.Category}<span className='CardDesc'>{latest.Date}</span></p>
                    </div>
            </div>
            ) }
            </div>
        </div>
    )
}

export default AllArticles