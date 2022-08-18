import"./style.css"
import Todo from"../todo/Todo"

function List({todos, removeTodo, ChangeTodo}) {

    return (
        <>
        <h1>Working✍️🔥</h1>
        <div className="todos-container">
            {todos.map(todo => 
            todo.isDone === false
            ? <Todo todo={todo}
                    removeTodo={removeTodo}
                    ChangeTodo={ChangeTodo}
                    key={todo.id}/>
            : null)}
        </div>   
            
        <h1>Done😊✌️</h1>
        <div className="todos-container">
            {todos.map(todo => 
            todo.isDone === true
            ? <Todo todo={todo}
                    removeTodo={removeTodo}
                    ChangeTodo={ChangeTodo}
                    key={todo.id}/>
            : null)}
      </div>
      </>
    )
}

export default List;