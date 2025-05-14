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
      if(event.target.innerHTML==="save"){
        const inVal = document.getElementById(`inEdit${id}`).value
        const result = todos.find(todo => todo.id === id)
        if(document.getElementById(`inEdit${id}`).value!=="")
        result.text=inVal

      }

    
      

    }

    
  
  return (
    <>
      
      <input type="text"  className='w-36 bg-amber-200 mx-auto mt-4 ' />
      <button onClick={AddTodo} className='ml-5'>add Todo</button>
      <ul>
        {todos.map(todo=> 
          <li id={todo.id}>
          {inEdit!==todo.id ? <h1 id={`text${todo.id}`} className='inline mr-3'>{todo.text}</h1> : <input id={`inEdit${todo.id}`} className='border ' type='text' placeholder={todo.text}/>}
          <input id={todo.id} onChange={isDoneHandle}  type="checkbox"   />
          <button id={todo.id} className='ml-3 border px-2.5' onClick={()=>editHandle(event,todo.id)}>{inEdit===todo.id?"save":"edit"}</button>
      </li>    
        )}

          
      </ul>
      
    </>
  )
}

export default App
