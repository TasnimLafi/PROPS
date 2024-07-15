import React from 'react'
import Card from './Card';

const Playerlist = () => {
    const players=[{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
        name:"Ronaldo",
        nationality:"Portugal"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K_AvTBqw40cGZDFQaCfOhTFEGLEmdGNtIw&s",
            name:"Neymar",
            nationality:"Brazil"
        },
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzw_Ti47ovNmMbRwz3HaY7hDhHFeAmER6kw&s",
            name:"Messi",
            nationality:"Argentine"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOBvCE7d9joKnVG7RP7VY5xI1cQjkhHg3xQ&s",
            name:"Mbappe",
            nationality:"France"
        },
        {
            img:"https://images.immediate.co.uk/production/volatile/sites/3/2024/01/Mohamed-Salah-16d0c13.jpg?quality=90&webp=true&fit=1100,733",
            name:"Mohamed Salah",
            nationality:"Egypt"
        },
    ]
  return (
    <div className='list'>
      {players.map(el => <Card el= {el} /> )}
    </div>
  )
}

export default Playerlist
