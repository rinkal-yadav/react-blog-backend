import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function FeaturedArticle() {
    let item1 = []
    let item2 = []
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:7000/api/v1/blogdata/details")
        .then((value)=> setData(value.data))
    },[])
    data.forEach((a) => {
        let key = a.Id
        switch (key) {
            case "10":
                item1.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    category:a.Category
                })
                break;
            case "22":
                item2.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    category:a.Category

                })
                break;
            
            case "27":
                item2.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    category:a.Category

                })
                break;

            default:
                break;
        }

    })
    return (




        <div className='FeatureArtBox' > 
            {item1.map((data) =>
                <div  key={data.id} className="FeatureBox1" > 
                    <Link to={`/Reading/${data.id}`}><img style={{cursor:"pointer"}} className='FeatureImgBox1' src={data.img} alt="" /></Link>
                    <div className='box1Txt'>{data.name}</div>
                    <div className='box1TxtDate'>{data.category} / {data.date}</div>
                </div>

            )}
            <div>
                {item2.map((data) => 
                <div  key={data.id} className='FeatureBox2'>
                   <Link to={`/Reading/${data.id}`}> <img className='FeatureImgBox2' src= {data.img} alt="" /></Link>
                    <div className="box2Txt">{data.name}</div>
                    <div className='box2TxtDate'>{data.category} / {data.date}</div>
                </div>
                )}
            </div>
        </div>

    )
}

export default FeaturedArticle
