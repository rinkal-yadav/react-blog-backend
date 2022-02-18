import React from 'react'
import { NavLink,Link } from 'react-router-dom'


function Header() {
    return (
        <div className='header'>
            <div className='headerTitle'> <div className='virticalText'>The</div><span className='titleHead'><Link to='./' className="headLinkText">Serin</Link></span></div>
            <ul className='headLinkFlex' type="none">
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}}to="/home" className="headLinkText">Home</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}}to="/business" className="headLinkText">Business</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/technology" className="headLinkText">Technology</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/sports" className="headLinkText">Sports</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/covid" className="headLinkText">Covid</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/world" className="headLinkText">World</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? 'gray':''}}} to="/tourism" className="headLinkText">Tourism</NavLink></li>
            </ul>
        </div>
    )
}

export default Header