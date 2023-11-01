import React from 'react'
import ReactDOM from 'react-dom/client'
     const countReducer = (state = 0, action) => {
          switch (action.type)
          {
              case 'INCR':
                  return state + 1;
            case 'DECR':
              return state - 1;
          }
     }
ReactDOM.createRoot(document.getElementById('root')).render(
  <App list={list } />
)
