import React from 'react'
import { useState } from 'react'
import Square from './Square'
function Board() {
    const [board, setBoard] = useState(["","","","","","","","",""])
    const [playerName, setPlayer] = useState("X")
    const cSquare = (index) => {
      setBoard((prevElem) =>{
        if(prevElem[index]=="") {
          return [...prevElem.slice(0,index),playerName,...prevElem.slice(index+1,board.length)]
        }
        else return prevElem})
        setPlayer((prevPlayer)=>{
          if(prevPlayer==="X") return "O"
          else return "X"
        })
    }
  return (
    <div className="Board">
        <div className="Row">
          {board.slice(0,3).map((item,index)=> {
            return <Square key={index} val={item} cSquare={() =>cSquare(index)}/>
          })}
        </div>
        <div className="Row">
        {board.slice(3,6).map((item,index)=> {
            return <Square key={index+3} val={item} cSquare={() =>cSquare(index+3)}/>
          })}
        </div>
        <div className="Row">
        {board.slice(6,9).map((item,index)=> {
            return <Square key={index+6} val={item} cSquare={() =>cSquare(index+6)}/>
          })}
        </div>
      </div>
  )
}

export default Board