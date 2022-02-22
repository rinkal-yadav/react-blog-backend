import {Link} from 'react-router-dom'
import React, { useState,useEffect } from 'react'
function ArticlesCategory2(props) {
    const [visible, SetVisible] = useState(false)
    const [data,setData] = useState([])

    useEffect(()=>{
        setData(props.dataObject[0])

    },[props.dataObject])
       
    return (
        
             <div className='FlexContainer'>
                {visible ? <>{data.map((latest) => 
                            <div  key={latest.id}>
                                <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                                <div>
                                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='CardDesc '>About: {latest.about.slice(0,30)} ...</span>
                                     <p className='cardDate'>{latest.category}<span className='CardDesc'>{latest.date}</span></p>
                              </div>
                           </div>
                        ) }
                      <button style={{cursor:"pointer"}} className='loadMore' onClick={()=>{ SetVisible(false)}} > View Less &#8592;</button> </>
                    :<>{data.filter((value,index)=>index<3).map((latest) => 
                        <div key={latest.id}>
                                <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                            <div>
                                <div className='cardTitle'>{latest.name}</div>
                                <span className='CardDesc '>About: {latest.about.slice(0,30)} ...</span>
                                <p className='cardDate'>{latest.category}<span className='CardDesc'>{latest.date}</span></p>
                           </div>
                       </div>
                    ) }
                    <button style={{cursor:"pointer"}} className='loadMore' onClick={()=>{ SetVisible(true)}} > View More &#8594;</button></>
                
                }
        </div>
    )
}

export default ArticlesCategory2