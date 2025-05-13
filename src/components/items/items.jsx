import { useState } from "react"

export default function Items({id,text,isDone}){
    
    
    return(
        <li id={id}>
            <h1>{text}</h1>
            <input  type="checkbox"   />
        </li>    
    )
}