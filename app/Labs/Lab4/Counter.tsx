import { useState } from "react";
export default function Counter() {
  //   let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          //   count++;
          //   console.log(count);
          setCount(count + 1);
        }}
        id="wd-counter-up-click"
        className="m-2 border rounded bg-solid bg-success text-white px-3 py-1"
      >
        Up
      </button>
      <button
        onClick={() => {
          //   count--;
          //   console.log(count);
          setCount(count - 1);
        }}
        id="wd-counter-down-click"
        className="m-2 border rounded bg-solid bg-danger text-white px-3 py-1"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
