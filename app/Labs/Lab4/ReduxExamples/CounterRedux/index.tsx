import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterReducer";
import { RootState } from "../../store";

export default function CounterRedux() {
  const { count } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button
        onClick={() => dispatch(increment())}
        id="wd-counter-redux-increment-click"
        className="m-2 border rounded bg-solid bg-success text-white px-3 py-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        id="wd-counter-redux-decrement-click"
        className="m-2 border rounded bg-solid bg-danger text-white px-3 py-1"
      >
        Decrement
      </button>
      <hr />
    </div>
  );
}
