import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/App.css';
import All from '../components/All';
import Fullstack from '../components/Fullstack';
import Datascience from '../components/Datascience';
import Cyber from '../components/Cyber';
import Career from '../components/Career';

function App() {
    const padding= {
        padding:20,
    }
    return (
            
      <Router>
          <div id='navigation'>
              <Link to='/' style={padding}>ALL</Link>
              <Link to='/fullstack' style={padding}>FULL STACK DEVELOPEMENT</Link>
              <Link to='/data' style={padding}>DATA SCIENCE</Link>
              <Link to='/cyber' style={padding}>CYBER SECURITY</Link>
              <Link to='/career' style={padding}>CAREER</Link>
          </div>
          <Routes>
              <Route id='all' path='/' element={<All/>}/>
              <Route id='full ' path='/fullstack' element={<Fullstack/>}/>
              <Route path='/data' element={<Datascience/>}/>
              <Route path='/cyber' element={<Cyber/>}/>
              <Route path='/career' element={<Career/>}/>
          </Routes>
    </Router>
  )
}

export default App