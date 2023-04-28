import Toggle from "./Toggle";
import ToggleNode from "./ToggleNode";
import Start from "./Start";

import { useState, useRef, useEffect } from "react";

function App() {
  const [nodeState, setNodeState] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const ShowNode = (data: boolean) => {
    setNodeState(!data);
  };

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframeDoc = iframeRef.current?.contentWindow?.document;
    // const iframeBody = iframeDoc?.getElementById("#red-ui-header");
    // if (iframeBody) {
    //   iframeBody.style.height = "60px";
    // }
    iframeRef.current.onload = () => {
      const doc = iframeDoc.querySelector("#document");
      console.log(doc); // Should now show the contents of the iframe's document
    };
    // console.log("iframeBody", iframeBody);
    console.log("iframeDoc", iframeDoc);
    console.log("iframeRef", iframeRef.current.contentWindow);
  }, [nodeState]);

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
            sandbox={"allow-same-origin allow-scripts"}
            ref={iframeRef}
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
