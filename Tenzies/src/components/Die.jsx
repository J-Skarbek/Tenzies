import React from "react";

function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? '#fff' : '#000',
    color: props.isHeld ? '#000' : '#fff'
  }

  return (
    <div 
      className={
        `die-${props.index} bg-light-purple text-dark-purple 
        font-bold text-2xl px-4 py-2 rounded-lg drop-shadow-xl`
      } 
      onClick={props.holdDice}
      style={styles}
    >
      <p className="value">
        {props.value ? props.value : '?'}
      </p>
    </div>
  )
}

export default Die;