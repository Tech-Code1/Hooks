import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import '../src/07-useReducer/intro-reducer'
import { TodoApp } from './07-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
