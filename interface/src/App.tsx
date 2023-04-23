import Toggle from "./Toggle";

function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-evenly h-80 w-64">
        <h1 className="text-gray-900 font-bold text-2xl">Coffee Machine</h1>
        <button className="bg-red-600 p-2 rounded-lg text-center text-white shadow-md hover:bg-red-700">
          START
        </button>
        <Toggle />
        <button className="bg-green-600 p-2 rounded-lg text-center text-white shadow-md hover:bg-green-700">
          CREATE
        </button>
      </div>
    </div>
  );
}

export default App;
