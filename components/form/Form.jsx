import"./style.css"
import {useState} from "react"

function Form({addTodo}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
  ]);

  return (
      <div className="Formbox">
        <label className="labeltitle">제목</label>
      <input className="input"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
       <label className="labeltitle">내용</label>
      <input className="input"
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button className="btn"
        onClick= {() => addTodo(title, content)}
      >
        추가하기
      </button>

      </div>
  )
}

export default Form;