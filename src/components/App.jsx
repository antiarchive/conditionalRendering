import React from "react";
import Login from "./Login";

var isNotLoggedIn = true;

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      {isNotLoggedIn && <Login />}
    </div>
  );
}

export default App;
