import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const list = [
  {
    Active: true,
    content:"no of use"
  },
  {
    Active: false,
    content:"Internet"
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App list={list } />
)
