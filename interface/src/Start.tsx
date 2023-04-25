// import { useState, useEffect } from "react";

function Start() {
  // const [payload, setPayload] = useState("");
  // const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    fetch("http://127.0.0.1:1880/coffee?data=coffee", {
      method: "GET",
    })
      .then(() => console.log("Coffee machine started!"))
      .catch((error) => console.log(error));
    // setClicked(true);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://127.0.0.1:1880/coffee");
  //     const text = await response.text();
  //     setPayload(text);
  //   };
  //   if (clicked) {
  //     fetchData();
  //     setClicked(false);
  //   }
  // }, [clicked]);

  // console.log("Payload: ", payload);

  return (
    <button
      className="bg-red-600 p-2 rounded-lg text-center text-white shadow-md hover:bg-red-700"
      onClick={handleClick}
    >
      START
    </button>
  );
}

export default Start;
