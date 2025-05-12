import Items from './components/items/items.jsx'
import './App.css'
import { useRef, useState } from 'react'


function App() {
  const [todos  , setTodo] = useState([])
    
    function AddTodo(){
        const val = document.querySelector("input")
        console.log(val)
        
        setTodo([...todos,{id:Math.random()*100,text:val.value,}])

        val.value=""

      }
    console.log(todos)
    
  
  return (
    <>
      
      <input type="text"  className='w-36 bg-amber-200 mx-auto mt-4 ' />
      <button onClick={AddTodo} className='ml-5'>add Todo</button>
      <ul>
        {todos.map(todo=> 
         <Items id={todo.id} text={todo.text} />
        )}

          
      </ul>
      
    </>
  )
}

export default App
