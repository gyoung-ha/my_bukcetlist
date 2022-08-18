import Layout from "../components/layout/Layout"
import {useState} from "react"

function TodoList() {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "react를 배워봅시다.",
          content: "리액트 기초를 공부해봅시다",
          isDone: false
        },
        {
          id: 2,
          title: "react를 배워봅시다.",
          content: "리액트 기초를 공부해봅시다",
          isDone: true
        },
        
    ]);
    function addTodo(title, content) {
        return setTodos([...todos, { id: todos.length + 1, 
                                    title: title,
                                    content: content,
                                    isDone:false }]);
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
      }

    const ChangeTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id == id ?{...todo, isDone : !todo.isDone}
            :todo
            ))

    }
   
    return <Layout todos ={todos}
                    addTodo={addTodo}
                    removeTodo={removeTodo}
                    ChangeTodo={ChangeTodo}/>
}

export default TodoList;