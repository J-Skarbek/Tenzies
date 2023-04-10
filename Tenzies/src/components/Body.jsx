import React from "react";
import Die from "./Die";

function Body() {

  const [diceValues, setDiceValues] = React.useState(() => getDiceValues());

  function getDiceValues() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push(Math.ceil(Math.random() * 6));
    }
    return dice;
  }

  function generateDice() {
    const values = diceValues.map((die, i) =>
        <Die
          key={i}
          index={i}
          value={die}
          holdDice={holdDice}
        />
    )
    return values
  }

  function rollDice() {
    setDiceValues(diceValues.map(die => Math.ceil(Math.random() * 6)))
  }

  function holdDice(e) {
    console.log('testing click')
    console.log(e.target)
    // e.target.classList.remove('font-bold')
    e.target.classList.toggle('bg-mid-blue')
    e.target.classList.toggle('text-white')
  }

  return (
    <div className="body-container col-start-6 col-span-5 row-start-2 row-span-3 bg-dark-purple p-8">
      <div className="background-overlay bg-bright-yellow p-4 h-full flex flex-col justify-evenly content-center text-center">
        <h2 className="text-5xl font-bold">Tenzies</h2>
        <p className="text-xl">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container-1 flex space-evenly items-center justify-center flex-wrap gap-3 px-12">
          { generateDice() }
        </div>
        {/* <div className="dice-container-2 flex space-evenly items-center justify-center flex-wrap gap-3">
          { generateDice() }
        </div> */}
        <button className="roll-dice text-white bg-dark-purple hover:bg-light-purple" onClick={rollDice}>Roll Dice</button>
      </div>
    </div>
  )
}

export default Body;