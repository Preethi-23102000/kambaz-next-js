import { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { RootState } from "./store";
export default function ArrayStateVariable() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);

  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button
        onClick={addElement}
        className="m-2 border rounded bg-solid bg-success text-white px-3 py-1"
      >
        Add Element
      </button>
      <ListGroup className="w-48">
        {array.map((item, index) => (
          <ListGroupItem
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span className="fw-bold">{item}</span>
            <button
              onClick={() => deleteElement(index)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
