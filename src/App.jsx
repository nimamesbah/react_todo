import Items from './components/items/items.jsx'
import './App.css'
import { useRef, useState } from 'react'


function App() {
  const [todos  , setTodo] = useState([])
  let [inEdit ,setInEdit]= useState(null)
    
    function AddTodo(){
        const val = document.querySelector("input")
        console.log(val)
        
        setTodo([...todos,{id:`${Math.random()*100}`,text:val.value,isDone:false}])

        val.value=""

      }
    function isDoneHandle(event){
      
      const element =todos.find(todo=> todo.id===event.target.id)
      if(element.isDone===false)
        element.isDone=true
      else
        element.isDone=false
      event.target.checked=element.isDone
    
    }
    function editHandle(event,id){
      if(event.target.innerHTML==="save")
        setInEdit(inEdit=null)
      else
      setInEdit(inEdit=id)
      

    }

    
  
  return (
    <>
      
      <input type="text"  className='w-36 bg-amber-200 mx-auto mt-4 ' />
      <button onClick={AddTodo} className='ml-5'>add Todo</button>
      <ul>
        {todos.map(todo=> 
          <li id={todo.id}>
          <h1 className='inline'>{todo.text}</h1>
          <input id={todo.id} onChange={isDoneHandle}  type="checkbox"   />
          <button id={todo.id} className='ml-3 border px-2.5' onClick={()=>editHandle(event,todo.id)}>{inEdit===todo.id?"save":"edit"}</button>
      </li>    
        )}

          
      </ul>
      
    </>
  )
}

export default App
