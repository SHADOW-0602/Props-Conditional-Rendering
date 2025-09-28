import React, { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            {count < 0 ? <p style={{ color: "red" }}>Counter cannot be negative!</p> : null}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrement</button>
        </div>
    );
};

export default CounterApp;