import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TopArticle from '../TopArticle'
function Tourism() {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("https://rinkal-backend-app.herokuapp.com/api/v1/blogdata/details/tourism")
      .then((value)=> setData(value.data))
  },[])


  




  return (
    <div className='FlexContainer space-btwn'>
      <div>

        {data.filter((cat)=>cat.Category==="tourism").map((row) =>
          <div key={row.id} className='FlexContainer' >
            <div style={{ cursor: "pointer" }}> <Link to={`/Reading/${row.Id}`}> <img className='cardImgBox' src={row.Img} alt="" /></Link> </div>
            <div>
              <div className='cardTitle'>{row.Name}</div>
              <div className='CardDesc cardContain'>
                <div>{row.About.slice(0,160)} ...... </div>

              </div>
              <p className='cardDate'>{row.Category}<span className='CardDesc'>{row.Date}</span></p>
            </div>

          </div>
        )}
      </div>
      <div style={{ margin: "76px" }} >
        <div className='Advertistement'>Advertistement</div>
        <div className='LatestText'><div className='textBorder'>The </div> Top</div>
        <TopArticle />
      </div>
    </div>
  )
}

export default Tourism