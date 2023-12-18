import React from 'react'
import '../error/error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container">
        <div className="error">
            <h1>Error</h1>
            <button><Link to="/">Back</Link></button>
        </div>
    </div>
  )
}

export default Error