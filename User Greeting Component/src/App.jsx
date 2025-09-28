import React, { useState } from "react";
import Greeting from "./Greeting";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px", fontSize: "16px" }}
      />
      <Greeting name={name} />
    </div>
  );
};

export default App;