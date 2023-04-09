import React from "react";

function Sidebar() {

  return (
    <div className="sidebar col-start-1 col-span-3 row-start-1 row-span-6 
      bg-dark-purple font-quicksand font-light flex flex-col justify-between py-8">
      <div className="text-elements">
        <h1 className="text-white text-center">Tenzies Game</h1>
        <p className="text-white text-left mx-8 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="sidebar-game-buttons text-center">
        <button className="mx-2 my-2">Play Game</button>
        <button className="mx-2 my-2">Reset Game</button>
      </div>
    </div>
  )
}

export default Sidebar;