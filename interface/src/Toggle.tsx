import { useState } from "react";

const Toggle = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prev) => !prev);
  }

  return (
    <div className="flex items-center">
      <button
        type="button"
        className={`bg-gray-400 rounded-full p-0 w-12 h-6 focus:outline-none ${
          active ? "bg-red-600" : null
        }`}
        onClick={handleClick}
      >
        <span
          className={`bg-white rounded-full shadow-md block w-5 h-5 mx-1 transform transition-transform duration-300 ease-in-out ${
            active ? "translate-x-full" : null
          }`}
        ></span>
      </button>
      <label htmlFor="toggle" className="ml-4">
        {`Heat ${active ? "on" : "off"}`}
      </label>
    </div>
  );
};

export default Toggle;
