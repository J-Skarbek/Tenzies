import React from "react";

function Die(props) {

  return (
    <div className="die bg-light-purple px-4 py-2 rounded-lg drop-shadow-xl">
      <p className="value text-dark-purple font-bold text-2xl">
        {props.value ? props.value : '6'}
      </p>
    </div>
  )
}

export default Die;