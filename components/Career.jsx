import React from 'react'
import Card from '../components/Card'

function Career() {
  return (
    <div className='container-fluid d-flex justify-content-start'>
      <div className="row">
        <div className="col-md-3">
          <Card  title='Career' image='../images/Career/career.jpeg'/>
        </div>
        <div className="col-md-3">
          <Card title='Career' image='../images/Career/career1.jpeg'/>
        </div>
        <div className="col-md-3">
          <Card title='Career' image='../images/Career/career2.png' />
        </div>
        <div className="col-md-3">
          <Card title='Career' image='../images/Career/career3.jpeg' />
        </div>
      </div>
      
    </div>

  )
}

export default Career