import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TopArticle from '../TopArticle'

function Technology() {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("https://rinkal-backend-app.herokuapp.com/api/v1/blogdata/details/technology")
      .then((value)=> setData(value.data))
  },[])


 




  return (
    <>
      {
        data[1] ?
          <div className='FlexContainer space-btwn'>
            < div >
              {
                data.map((row) =>
                  <div key={row.id} className='FlexContainer' >
                    <div style={{ cursor: "pointer" }}> <Link to={`/Reading/${row.id}`}> <img className='cardImgBox' src={row.img} alt="" /></Link> </div>
                    <div>
                      <div className='cardTitle'>{row.name}</div>
                      <div className='CardDesc cardContain'>
                        <div>{row.about.slice(0, 160)} ...... </div>

                      </div>
                      <p className='cardDate'>{row.category}<span className='CardDesc'>{row.date}</span></p>
                    </div>

                  </div>
                )
              }
            </div >
            <div style={{ margin: "76px" }} >
              <div className='Advertistement'>Advertistement</div>
              <div className='LatestText'><div className='textBorder'>The </div> Top</div>
              <TopArticle />
            </div>
          </div >
          : <img className='loading' alt="Loading" src='https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' />
      }
    </>
  )
}

export default Technology