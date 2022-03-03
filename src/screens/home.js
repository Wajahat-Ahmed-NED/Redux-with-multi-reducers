import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    const dataFromRedux=useSelector((a)=>a)
    const dispatch=useDispatch()

    const handleUpdate=()=>{
        const obj={
            name:'ali',
            age:12
        }
        dispatch({type:'DATAFROMHOME',...obj,})
        console.log(dataFromRedux)
    }
    console.log(dataFromRedux)

    return (
        <>
         <h1>Home Page</h1>   

         <h2>dataFromRedux.name</h2>

         <button onClick={handleUpdate}>Update Value</button>
        </>
    )
}
