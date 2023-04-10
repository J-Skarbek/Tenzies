import React from "react";

function Die(props) {

  return (
    <div 
      className={
        `die-${props.index} bg-light-purple text-dark-purple 
        font-bold text-2xl px-4 py-2 rounded-lg drop-shadow-xl`
      } 
      onClick={props.holdDice}>
      <p className="value">
        {props.value ? props.value : '?'}
      </p>
    </div>
  )
}

export default Die;