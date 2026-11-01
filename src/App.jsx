import { useTodo } from "./hooks/useTodo";
import PageTitle from "./components/typography/page-title";
import TodoForm from "./components/form";
import TodoList from "./components/list";
import "./App.css";

function App() {
  const { setTodo, todoList, saveTodo } = useTodo();
  console.log(todoList);

  return (
    <>
      <PageTitle>Todo app</PageTitle>
      <TodoForm {...{ setTodo, saveTodo }} />
      <section>
        <TodoList mainTodoList={todoList} />
      </section>
    </>
  );
}

export default App;
