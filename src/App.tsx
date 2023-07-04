import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="text-3xl font-bold underline text-red-600">
                Simple React Typescript Tailwind Sample
              </h1>
            </div>
          }
        />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  );
}

export default App;
