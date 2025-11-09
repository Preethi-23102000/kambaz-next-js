import React from "react";
import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center flex-row-reverse">
      <div className="d-flex flex-row-reverse gap-2">
        <Button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          variant="danger"
        >
          Delete
        </Button>
        <Button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
          Edit
        </Button>
      </div>
      <span>{todo.title}</span>
    </ListGroupItem>
  );
}
