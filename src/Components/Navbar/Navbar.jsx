import React from 'react'
import './Navbar.css'
import play from '../Img/playbutton.png'
const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="leftside">
            <div className="brand-name">
              <img src={play} alt='' />  Music
            </div>
        </div>
        <div className="rightside">
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Performer</li>
                    <li>Event Schedule</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="b">
                <div className="button">Login</div>
                <div className="button sec">Sign Up</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar