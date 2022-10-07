import React from 'react'
import './Card.css'
import play from '../Img/play.png'

const Card = ({item: {id, title, body, image} }) => {
  return (
    <div className="Card">
         <img  src={image} alt=""/>
        <span>
            {title}
            <br/>
            <span className='play'>
                <img src={play} alt='' />   {body}
           </span>
        </span>
        
    </div>
  )
}

export default Card