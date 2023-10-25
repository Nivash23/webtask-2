import React from 'react'
// import '../src/App'
import '../src/assets/Card.css'
import '../components/All'
import '../components/Fullstack'
import '../components/Cyber'
import '../components/Datascience'



function Card(props) {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img  id='image'  src={props.image} alt='image'/>
      </div>
      <div className='card-body-text'>
        <h4 className="card-title">{props.title }</h4>
        <p className='card-text text-secondary'>this is a example card</p>
      <a href='#' className='btn btn-outline-success'>Click</a>
      </div>

   </div>
      
  
  )
}

export default Card