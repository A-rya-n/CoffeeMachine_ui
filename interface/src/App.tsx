import Toggle from "./Toggle";
import ToggleNode from "./ToggleNode";
import { useState } from "react";

function App() {
  const [nodeState, setNodeState] = useState(false);

  const ShowNode = (data: any) => {
    setNodeState(!data);
  };
  console.log("App node state", nodeState);

  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <ToggleNode nodeState={nodeState} onNode={ShowNode} />
      {nodeState ? (
        <iframe
          src="http://192.168.1.102:1880"
          width={"80%"}
          height={"80%"}
        ></iframe>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-evenly h-80 w-80">
          <h1 className="text-gray-900 font-bold text-2xl">Coffee Machine</h1>
          <button className="bg-red-600 p-2 rounded-lg text-center text-white shadow-md hover:bg-red-700">
            START
          </button>
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
