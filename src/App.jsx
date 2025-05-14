import Items from './components/items/items.jsx'
import './App.css'
import { useRef, useState } from 'react'


function App() {
  const [todos  , setTodo] = useState(JSON.parse(localStorage.getItem("todos"))||[])
  let [inEdit ,setInEdit]= useState(null)
    
    function AddTodo(){
        const val = document.querySelector("input")
        if(val.value!=="")
          setTodo([...todos,{id:`${Math.random()*100}`,text:val.value,isDone:false}])
        setTodo(prev=>{ 
          localStorage.setItem("todos",JSON.stringify(prev))
          return prev
        })

        

        val.value=""

      }
    function isDoneHandle(event){
      setTodo(todos.map(todo => 
        todo.id === event.target.id ? {...todo, isDone: !todo.isDone} : todo
      ));
      
      // const element =todos.find(todo=> todo.id===event.target.id)
      // if(element.isDone===false)
      //   element.isDone=true
      // else
      //   element.isDone=false
      // event.target.checked=element.isDone
      setTodo(prev=>{ 
        localStorage.setItem("todos",JSON.stringify(prev))
        return prev
      })
    
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
      setTodo(prev=>{ 
        localStorage.setItem("todos",JSON.stringify(prev))
        return prev
      })

    }
    function deleteItem(id){
      
      // const index = todos.findIndex(todo => todo.id === id)
      // console.log("ind",index)
      setTodo(prev => prev.filter(todo => todo.id !==id))
      // setTodo(prev => prev.splice(index,1))
      setTodo(prev=>{ 
        localStorage.setItem("todos",JSON.stringify(prev))
        return prev
      })
      
    }
    console.log(todos)

    
  
  return (
    <>
      
      <input type="text"  className='w-36 bg-amber-200 mx-auto mt-4 ml-4 rounded-2xl' />
      <button onClick={AddTodo} className='ml-5 border py-1.5 px-3 rounded-2xl cursor-pointer'>add Todo</button>

      <ul className='ml-4 '>
        {todos.map(todo=> 
        <li id={todo.id} className='mt-4 flex gap-2  border py-2 duration-300 px-2.5 w-max rounded-2xl'>
          {inEdit!==todo.id ? <h1 id={`text${todo.id}`} className=''>{todo.text}</h1> : <input id={`inEdit${todo.id}`} className='border rounded-2xl px-2 ' type='text' placeholder={todo.text}/>}
          <input id={todo.id} onChange={isDoneHandle}  type="checkbox" checked={todo.isDone}  />
          <button id={todo.id} className='cursor-pointer' onClick={()=>editHandle(event,todo.id)}>{inEdit===todo.id?"save":"edit"}</button>
          <button className='border-x px-2 cursor-pointer h-full' onClick={()=>deleteItem(todo.id)}>delete</button>
        </li>    
        )} 
      </ul>
      
    </>
  )
}

export default App
