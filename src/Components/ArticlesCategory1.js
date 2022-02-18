import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function ArticlesCategory1() {
    const business3 = []
    const businessAll = []
    const [result, setResult] = [business3]
    const [visible, SetVisible] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:7000/api/v1/blogdata/details")
        .then((value)=> setData(value.data))
    },[])
    data.forEach((a) => {
        if (a.Category === "business") {
            businessAll.push({
                name: a.Name,
                img: a.Img,
                id:a.Id,
                date:a.Date,
                about:a.About,
                category:a.Category
            })
        }

    })
    businessAll.forEach((a, index) => {
        if (index < 3) {
            business3.push({
                name: a.name,
                img: a.img,
                id:a.id,
                date:a.date,
                about:a.about,
                category:a.category
            })
        }

    })


    const loadMore = () => {
        SetVisible(true)
        setResult(businessAll)
    }
    const loadLess = () => {
        SetVisible(false)
        setResult(business3)
    }
    console.log(result);

    // console.log("ssss", business3);
    // console.log("gug",businessAll);
    return (
        <div>
                {visible ? <>{businessAll.map((raa) => 
                            <div  key={raa.id} className='FlexContainer'>
                                <div  style={{cursor:"pointer"}}><Link to={`/Reading/${raa.id}`}> <img className='cardImgBox' src={raa.img}alt=""/></Link> </div>
                                <div>
                                    <div className='cardTitle'>{raa.name}</div>
                                    <div className='CardDesc cardContain'>About : {raa.about.slice(0,110)} ...</div>
                                    <p className='cardDate'>{raa.category}<span className='CardDesc'>{raa.date} </span></p>
                               </div>
                           </div>
                        ) }
                      <button  style={{cursor:"pointer"}} className='loadMore' onClick={loadLess} >&#8593; Load Less </button> </>
                    :<>{business3.map((ra)=> 
                        <div key={ra.id}  className='FlexContainer' >
                            <div  style={{cursor:"pointer"}}> <Link to={`/Reading/${ra.id}`}> <img className='cardImgBox' src={ra.img}alt=""/></Link> </div>
                            <div>
                                <div className='cardTitle'>{ra.name}</div>
                                <div className='CardDesc cardContain'>About : {ra.about.slice(0,110)} ...</div>
                                <p className='cardDate'>{ra.category}<span className='CardDesc'>{ra.date}</span></p>
                            </div>
                        </div>
                        )} 
                    <button  style={{cursor:"pointer"}} className='loadMore' onClick={loadMore} >&#8595; Load More</button></>
                
                }
        </div>
    )
}

export default ArticlesCategory1