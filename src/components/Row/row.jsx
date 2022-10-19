import React from 'react'

const imgUrl ="https://image.tmdb.org/t/p/w500";

const Card = ({image}) => {
  return (
    <img src={image} alt="Cover" className='card' />
  )
}

const Row = ({title, arr =[]}) => {
    
  return (
    <div className='row'>
        <h2>{title}</h2>

        <div>
        
        {
        arr.map((item,index) =>
          (
          <Card key={index} image={`${imgUrl}/${item.poster_path}`}/>
          )
          )
        }
            
        
        </div>
    </div>
  )
}

export default Row;