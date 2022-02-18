import {Link} from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
function ArticlesCategory2() {
    const tourism3 = []
    const tourismAll = []
    const [result, setResult] = []
    const [visible, SetVisible] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://rinkal-backend-app.herokuapp.com/api/v1/blogdata/details")
        .then((value)=> setData(value.data))
    },[])
    data.forEach((a) => {
        if (a.Category === "tourism") {
            tourismAll.push({
                name: a.Name,
                img: a.Img,
                id:a.Id,
                date:a.Date,
                about:a.About,
                category:a.Category
            })
        }

    })
    tourismAll.forEach((a, index) => {
        if (index < 3) {
            tourism3.push({
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
        setResult(tourismAll)
    }
    const loadLess = () => {
        SetVisible(false)
        setResult(tourism3)
    }
    console.log("ssss", result);
    return (
        
             <div className='FlexContainer'>
                {visible ? <>{tourismAll.map((latest) => 
                            <div  key={latest.id}>
                                <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                                <div>
                                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='CardDesc '>About: {latest.about.slice(0,30)} ...</span>
                                     <p className='cardDate'>{latest.category}<span className='CardDesc'>{latest.date}</span></p>
                              </div>
                           </div>
                        ) }
                      <button style={{cursor:"pointer"}} className='loadMore' onClick={loadLess} > View Less &#8592;</button> </>
                    :<>{tourism3.map((latest) => 
                        <div key={latest.id}>
                                <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                            <div>
                                <div className='cardTitle'>{latest.name}</div>
                                <span className='CardDesc '>About: {latest.about.slice(0,30)} ...</span>
                                <p className='cardDate'>{latest.category}<span className='CardDesc'>{latest.date}</span></p>
                           </div>
                       </div>
                    ) }
                    <button style={{cursor:"pointer"}} className='loadMore' onClick={loadMore} > View More &#8594;</button></>
                
                }
        </div>
    )
}

export default ArticlesCategory2