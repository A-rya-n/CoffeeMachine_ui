import { useState } from "react";

const ToggleNode = (props: any) => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prev) => !prev);
    props.onNode(active);
  }

  return (
    <div className="fixed top-10 left-50 right-50 bg-white p-2 rounded-xl shadow-md">
      <button
        type="button"
        className={`bg-gray-400 rounded-full p-0 w-12 h-6 focus:outline-none ${
          props.nodeState ? "bg-blue-600" : null
        }`}
        onClick={handleClick}
      >
        <span
          className={`bg-white rounded-full shadow-md block w-5 h-5 mx-1  transform transition-transform duration-300 ease-in-out ${
            active ? "translate-x-full" : null
          }`}
        ></span>
      </button>
      <label htmlFor="toggle" className="ml-4">
        {`Node-Red ${props.nodeState ? "On" : "Off"}`}
      </label>
    </div>
  );
};

export default ToggleNode;
