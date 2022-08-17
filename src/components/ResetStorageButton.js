import React from 'react'
import "./ResetButton.css";

const ResetStorageButton = ({resetStorage}) => {
  return (
    <button className="reset-btn" onClick={resetStorage}>Reset Points</button>
  )
}

export default ResetStorageButton