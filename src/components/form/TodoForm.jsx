//varför omrenderas App.jsx när jag slår in bokstäver i inputen? 

export default function TodoForm({ setTodo, saveTodo }){

    return(
        <>
            <form action={saveTodo}>
                <label htmlFor="todo">Task: </label>
                <input id="todo" name="todo" type="text" onChange={(e) => setTodo(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </>
    );
}