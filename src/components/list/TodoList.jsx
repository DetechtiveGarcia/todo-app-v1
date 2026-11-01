import TodoItem from "../todo-item";

export default function TodoList({ mainTodoList, subTodoList }) {


  if (Array.isArray(mainTodoList)) {
    console.log("mainTodoList");
    
    return (
      <>
        {mainTodoList.length > 0 && (
          <ul>
            {mainTodoList.map((todo) => (
              <>
                <li key={todo}>
                  <TodoItem {...{ todo }} />
                </li>
              </>
            ))}
          </ul>
        )}
      </>
    );
  } else if (Array.isArray(subTodoList)) {
    console.log("subTodoList");

    return (
      <>
        {subTodoList.length > 0 && (
          <ul>
            {subTodoList.map((todo) => (
              <>
                <li key={todo}>
                  <TodoItem {...{ todo }} />
                </li>
              </>
            ))}
          </ul>
        )}
      </>
    );
  }
}
