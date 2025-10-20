import TodoItem from "./TodoItem";
import todos from "./todos.json";
import { ListGroup } from "react-bootstrap";

export default function TodoList() {
  //fixing the errors below
  // Error: Missing "key" prop for element in iterator  react/jsx-key
  return (
    <>
      <h3>Todo List</h3>
      <ListGroup>
        {todos.map((todo) => {
          return <TodoItem key={todo.title} todo={todo} />;
        })}
      </ListGroup>
      <hr />
    </>
  );
}
