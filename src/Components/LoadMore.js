import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const LoadMore = (props) => {
    const [data,setData] = useState([])
    const catData=[]
       const id=props.dataObject
       const cat =[]
        useEffect(()=>{
            axios.get("https://rinkal-backend-app.herokuapp.com/api/v1/blogdata/details")
            .then((value)=>setData(value.data))
            .catch(err => {console.log(err)})
        },[])
        data.forEach(value => {
            if (id===value.id) {
                cat.push(value.category)
                
            }
            
        });

        data.forEach(a => {
            if ((cat[0]===a.category)&& (a.id !== id)) {
                catData.push(
                        {name: a.name,
                        img: a.img,
                        id:a.id,
                        date:a.date,
                        about:a.about,
                        category:a.category}
                )
                
            }
            
        });
  return (
    <div className='FlexContainer'>

    {catData.filter((value,index) => index<6).map((latest) => 
                <div key={latest.id}>
                    
                    <div style={{cursor:"pointer"}} > <Link to={`/Reading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                    <div>
                        <div className='cardTitle'>{latest.name}</div>
                        <span className='CardDesc '>About : {latest.about.slice(0,30)} </span>
                        <p className='cardDate'>{latest.category}<span className='CardDesc'>{latest.date}</span></p>
                   </div>
               </div>
            ) }
            </div>
   
  )
}

export default LoadMore