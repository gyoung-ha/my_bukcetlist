import"./style.css"

function Todo({todo, removeTodo, ChangeTodo}) {

  return (
    <div className="todos-container">
          <div className="todo" key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <button className="deletebtn" onClick = {()=>removeTodo(todo.id)}>
               삭제
            </button>
            <button className="mybtn" onClick = {()=>ChangeTodo(todo.id)}>
                {todo.isDone === false ? "완료" : "취소"}
            </button>
          </div>
        </div> 
  )
}

export default Todo;