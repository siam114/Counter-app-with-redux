import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

  return (
    <div>
      <h2>Counter App</h2>

      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter




//state - count : 0 
//action - increment, decrement, reset
//reducers- increment -> count => count + 1
//           decrement -> count => count - 1
//           reset -> count => 0
//store