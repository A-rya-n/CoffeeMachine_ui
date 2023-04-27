import Toggle from "./Toggle";
import ToggleNode from "./ToggleNode";
import Start from "./Start";

import { useState } from "react";

function App() {
  const [nodeState, setNodeState] = useState(false);

  const ShowNode = (data: boolean) => {
    setNodeState(!data);
  };

  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <ToggleNode nodeState={nodeState} onNode={ShowNode} />
      {nodeState ? (
        <>
          <link
            rel="stylesheet"
            href="/home/dev/Desktop/CoffeeMachine_ui/interface/src/node.css"
          />
          <iframe
            src="http://127.0.0.1:1880/"
            // width={"80%"}
            // height={"80%"}
            sandbox={"allow-same-origin allow-scripts"}
          ></iframe>
        </>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-evenly h-80 w-80">
          <h1 className="text-gray-900 font-bold text-2xl">Coffee Machine</h1>
          <Start />
          <Toggle />
          <button className="bg-green-600 p-2 rounded-lg text-center text-white shadow-md hover:bg-green-700">
            CREATE
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
