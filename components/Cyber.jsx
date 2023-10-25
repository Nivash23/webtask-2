import React from 'react'
import Card from '../components/Card'

function Cyber() {
  return (
    <div className='container-fluid d-flex justify-content-start'>
      <div className="row">
        <div className="col-md-3">
          <Card title='Cyber Security' image='../images/cyber/cyber.jpeg' />
        </div>
        <div className="col-md-3">
          <Card title='Cyber Security' image='../images/cyber/c1.jpg' />
        </div>
        <div className="col-md-3">
          <Card title='Cyber Security' image='../images/cyber/c2.jpg'/>
        </div>
        <div className="col-md-3">
          <Card title='Cyber Security' image='../images/cyber/c3.jpg'/>
        </div>
      </div>
      
    </div>
  )
}

export default Cyber