import React from 'react'

function Square({value, onClick, isWinningSquares}) {
  return (
    <button type='button' onClick={ onClick} className={`square ${isWinningSquares ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}`}  >
      {value}
    </button>
  )
}

export default Square