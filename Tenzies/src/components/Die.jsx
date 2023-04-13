import React from "react";

function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? '#fff' : '#000'
  }

  function holdDice(e) {
    console.log('click success')
    !props.isHeld ? props.isHeld : !props.isHeld;
    console.log(props.isHeld)
  }

  return (
    <div 
      className={
        `die-${props.index} bg-light-purple text-dark-purple 
        font-bold text-2xl px-4 py-2 rounded-lg drop-shadow-xl`
      } 
      onClick={holdDice}
      style={styles}
    >
      <p className="value">
        {props.value ? props.value : '?'}
      </p>
    </div>
  )
}

export default Die;