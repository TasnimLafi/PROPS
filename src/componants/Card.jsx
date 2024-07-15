import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card'>
      <img src={el.img}/>
      <h1>{el.name}</h1>
      <h2>{el.nationality}</h2>
    </div>
  )
}

export default Card
