
import React, { useState } from 'react'

const Homepage = () => {
  const [count, setCount] = useState(0);
  if(count<-5){
    alert("error");
    setCount(0);
  }
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">React Counter with Tailwind</h1>
      <p className="text-xl mb-4">Count: <span className="font-mono">{count}</span></p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increase
        </button>
      </div>
    </div>
  );
};
export default Homepage
