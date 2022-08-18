import"./style.css"
import Header from "../header/Header"
import Form from "../form/Form"
import List from "../list/List"


function Layout({todos, addTodo, removeTodo, ChangeTodo}) {
    
    return (
        <div className="layout">
            <Header/>
            <Form addTodo={addTodo}/>
            <List todos={todos}
                    removeTodo ={removeTodo}
                    ChangeTodo={ChangeTodo}/> 
        </div>
    )
}

export default Layout;