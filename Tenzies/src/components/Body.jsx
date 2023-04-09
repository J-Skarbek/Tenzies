import React from "react";

function Body() {

  return (
    <div className="body-container col-start-6 col-span-5 row-start-2 row-span-3 bg-dark-purple p-8">
      <div className="background-overlay bg-bright-yellow p-4 h-full flex flex-col justify-evenly content-center text-center">
        <h2 className="text-5xl font-bold">Tenzies</h2>
        <p className="text-xl">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">

        </div>
        <button className="roll-dice text-white bg-dark-purple hover:bg-light-purple">Roll Dice</button>
      </div>
    </div>
  )
}

export default Body;