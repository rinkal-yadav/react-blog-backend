import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
function ArticlesCategory1(props) {
   
    const [visible, SetVisible] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
    
        setData(props.dataObject[0])
        
             },[props.dataObject])
        console.log("#art1#",data);

    return (  
        <div>
                {visible ? <>{data.map((raa) => 
                            <div  key={raa.id} className='FlexContainer'>
                                <div  style={{cursor:"pointer"}}><Link to={`/Reading/${raa.id}`}> <img className='cardImgBox' src={raa.img}alt=""/></Link> </div>
                                <div>
                                    <div className='cardTitle'>{raa.name}</div>
                                    <div className='CardDesc cardContain'>About : {raa.about.slice(0,110)} ...</div>
                                    <p className='cardDate'>{raa.category}<span className='CardDesc'>{raa.date} </span></p>
                               </div>
                           </div>
                        ) }
                      <button  style={{cursor:"pointer"}} className='loadMore' onClick={()=>{SetVisible(false)}} >&#8593; Load Less </button> </>
                    :<>{data.filter((value,index)=>index<3).map((ra)=> 
                        <div key={ra.id}  className='FlexContainer' >
                            <div  style={{cursor:"pointer"}}> <Link to={`/Reading/${ra.id}`}> <img className='cardImgBox' src={ra.img}alt=""/></Link> </div>
                            <div>
                                <div className='cardTitle'>{ra.name}</div>
                                <div className='CardDesc cardContain'>About : {ra.about.slice(0,110)} ...</div>
                                <p className='cardDate'>{ra.category}<span className='CardDesc'>{ra.date}</span></p>
                            </div>
                        </div>
                        )} 
                    <button  style={{cursor:"pointer"}} className='loadMore' onClick={()=>{SetVisible(true)}} >&#8595; Load More</button></>
                
                }
        </div>
    )
}

export default ArticlesCategory1