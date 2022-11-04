import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar' >
        <div className='lin'>
            <img src="./images/st-james.png" alt='st.james'/>
      <NavLink to ="/home"><h5>HOME</h5></NavLink>
      <NavLink to ="/about"><h5>ABOUT</h5></NavLink>
      <NavLink to ="/services"><h5>SERVICES</h5></NavLink>
      <NavLink to ="/downloads"><h5>DOWNLOADS</h5></NavLink>
      <NavLink to ="/events"><h5>EVENTS</h5></NavLink>
      <NavLink to ="/projects"><h5>PROJECTS</h5></NavLink>
      <NavLink to ="/offerings"><h5>OFFERINGS</h5></NavLink>
      <NavLink to ="/contact"><h5>CONTACT</h5></NavLink>
      </div>
    </div>
  )
}

export default Navbar