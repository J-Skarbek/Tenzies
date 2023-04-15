import React from "react";
import Die from "./Die";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function Body() {

  const [diceValues, setDiceValues] = React.useState(() => getDiceValues());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = diceValues.every(die => die.isHeld);
    const firstDie = diceValues[0].value;
    const allSameValue = diceValues.every(die => die.value === firstDie);
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log('Player Wins!') //Make this display on the screen

    }
  }, [diceValues]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
    }
  }

  function getDiceValues() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push(generateNewDie());
    }
    return dice;
  }

  function generateDice() {
    const values = diceValues.map(die =>
        <Die
          key={die.id}
          index={die.id}
          value={die.value}
          isHeld={die.isHeld}
          holdDice={() => holdDice(die.id)}
        />
    )
    return values
  }

  //This method of just assigning the return value of .map also works as opposed
  //to using the generate dice function
  // const getValues = diceValues.map(die => <Die value={die} />)

  function rollDice() {
    if (!tenzies) {
      setDiceValues(oldDice => oldDice.map(die => {
        return die.isHeld ? 
          die : 
          generateNewDie();
      }))
    } else {
      setTenzies(false);
      setDiceValues(getDiceValues());
    }
  }

  function holdDice(id) {
    setDiceValues(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die;
    }))
  }

  return (
    <div className="body-container col-start-6 col-span-5 row-start-2 row-span-3 bg-dark-purple p-8">
      { tenzies && <Confetti /> }
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
        <button 
          className="roll-dice text-white bg-dark-purple hover:bg-light-purple" 
          onClick={rollDice}>{tenzies ? 'New Game' : 'Roll Dice'}
        </button>
      </div>
    </div>
  )
}

export default Body;