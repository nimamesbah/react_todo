import { useState } from "react"

export default function Items({id,text}){
    
    
    return(
        <li id={id}>
            {text}
        </li>    
    )
}