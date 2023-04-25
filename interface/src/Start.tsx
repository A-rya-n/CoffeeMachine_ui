function Start() {
  const handleClick = () => {
    fetch("http://127.0.0.1:1880/coffee?data=coffee", {
      method: "GET",
    })
      .then(() => console.log("Coffee machine started!"))
      .catch((error) => console.log(error));
  };

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
