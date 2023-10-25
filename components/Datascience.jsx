import React from 'react'
import Card from '../components/Card'

function Datascience() {
  return (
    <div className='container-fluid d-flex justify-content-start'>
      <div className="row">
        <div className="col-md-3">
          <Card title='Data Science' image='../images/datascience/datascience.webp' />
        </div>
        <div className="col-md-3">
          <Card title='Data Science' image='../images/datascience/datascience1.webp' />
        </div>
        <div className="col-md-3">
          <Card title='Data Science' image='../images/datascience/datascience2.webp'/>
        </div>
        <div className="col-md-3">
          <Card title='Data Science' image='../images/datascience/datascience3.webp'/>
        </div>
      </div>
      
    </div>
  )
}

export default Datascience