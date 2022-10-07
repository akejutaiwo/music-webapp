import React from 'react'
import './BgCard.css'
// import kick from '../Img/Kick.jpg'

const BgCard = ({ item: {id, title, body, image}}) => {
  return (
    <div className="BgCard">
        <img src={image} alt='' />
        <h4>{title}</h4>
        <p>{body}</p>
    </div>
  )
}

export default BgCard