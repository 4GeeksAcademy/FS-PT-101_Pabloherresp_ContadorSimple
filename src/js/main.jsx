import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const app = ReactDOM.createRoot(document.getElementById('root'))

let counter = 0

let timer = setInterval(() => {
  counter++

  app.render(
    <React.StrictMode>
      <Home value={counter} />
    </React.StrictMode>,
  )
},1000)

