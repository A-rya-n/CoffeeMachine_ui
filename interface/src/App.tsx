import Toggle from "./Toggle";
import ToggleNode from "./ToggleNode";
import Start from "./Start";

import { useState } from "react";

function App() {
  const [nodeState, setNodeState] = useState(false);
  // const iframeRef = useRef<HTMLIFrameElement>(null);

  const ShowNode = (data: boolean) => {
    setNodeState(!data);
  };

  // useEffect(() => {
  //   const iframeDocument = iframeRef.current?.contentWindow?.document;

  //   if (iframeDocument) {
  //     const headerLogoSpan = iframeDocument.querySelector(
  //       ".red-ui-header-logo span"
  //     );
  //     if (headerLogoSpan) {
  //       headerLogoSpan.textContent = "My Node-RED";
  //     }
  //   }
  // }, []);

  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <ToggleNode nodeState={nodeState} onNode={ShowNode} />
      {nodeState ? (
        <>
          <link
            rel="stylesheet"
            href="C:/Users/aryan/Desktop/CoffeeMachine_ui/interface/src/node.css"
            // "/home/dev/Desktop/CoffeeMachine_ui/interface/src/node.css"
          />
          <iframe
            src="http://127.0.0.1:1880/"
            sandbox="allow-same-origin allow-scripts"
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
