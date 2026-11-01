import { useState } from "react";
import TodoList from "../list";
import TodoForm from "../form";
import { useTodo } from "../../hooks/useTodo";

export default function TodoItem({ todo }) {
  const { setTodo, todoList, saveTodo } = useTodo();
  const [hasSubTodos, setHasSubTodos] = useState(false);


  return (
    <>
      {todo}
      <button onClick={() => {setHasSubTodos(prev => !prev)}}>add sub-todos</button>
      {hasSubTodos && (todoList.length > 0 ?  
      <>
        <TodoList subTodoList={todoList} />
        <TodoForm {...{ setTodo, saveTodo }} />
      </> : <TodoForm {...{ setTodo, saveTodo }} />)}
    </>
  );
}
