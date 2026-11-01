import { useEffect, useState } from "react";

export function useTodo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function saveTodo() {
    setTodoList((prev) => [...prev, todo]);
  }

  useEffect(() => {
    // console.log(todo);
  }, [todo]);

  return { setTodo, todoList, saveTodo };
}

// export function useTodo() {
//   const [todo, setTodo] = useState("");
//   const [todoList, setTodoList] = useState([]);
//   const [isSent, setIsSent] = useState(false)
  

//   async function saveTodo() {
//     try {
//       const response = await fetch("https://localhost:7296/api/todos", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ task: todo }),
//       });

//       if (!response.ok) {
//         console.log("Error, did not save todo");
//         console.log(response);
//         return;
//       }

//       setIsSent(true);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     async function getData() {
//       try {
//         const response = await fetch("https://localhost:7296/api/todos");

//         if (!response.ok) {
//           console.log(`Response status: ${response.status}`);
//         }

//         const result = await response.json();
//         setTodoList(result);
//       } catch (error) {
//         console.error("Fetch failed:", error);
//       }
//     }
//     getData();
//     return () => setIsSent(false);
//   }, [isSent]);

//   return { setTodo, todoList, saveTodo };
// }
