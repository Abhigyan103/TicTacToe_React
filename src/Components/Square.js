import React from 'react'
import "../App.css"
function Square({val, cSquare}) {
  return (
    <div className = "Square" style={{color: "white", alignItems: 'center'}} onClick={cSquare}>{val}</div>
  )
}

export default Square