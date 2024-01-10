import React from "react";

// Class Component
class Button extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white"
        type="submit"
      >
        Buy now
      </button>
    );
  }
}

// Functional Component
function ButtonBlack() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      type="submit"
    >
      Buy now
    </button>
  );
}

// Functional const Component
const ButtonRed = () => {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white"
      type="submit"
    >
      Buy now
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        {/* Class Component button */}
        <Button></Button>
        {/* Functional Component Button */}
        <ButtonBlack></ButtonBlack>
        {/* Functional Const Button */}
        <ButtonRed></ButtonRed>
      </div>
    </div>
  );
}

export default App;
