import {Link} from 'react-router-dom'
import React, { useState,useEffect } from 'react'

function AllArticles(props) {
    const [data,setData] = useState([])
    useEffect(()=>{
        setData(props.dataObject[0])

    },[props.dataObject])
    
    
    return (
        <div >
            <div className='FlexContainer'>
            {
            data.map((latest)=>
            <div  key={latest.id}>
                      <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>

                    <div >
                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='CardDesc '>About: {latest.about.slice(0,30)} ...</span>
                                     <p className='cardDate'>{latest.category}<span className='CardDesc'>{latest.date}</span></p>
                    </div>
            </div>
            ) }
            </div>
        </div>
    )
}

export default AllArticles