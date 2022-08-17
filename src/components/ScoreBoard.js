import React from 'react'
import "./ScoreBoard.css"

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  let getX = localStorage.getItem("xScore");
  let getO = localStorage.getItem("oScore");

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {getX}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {getO}</span>
    </div>
  )
}