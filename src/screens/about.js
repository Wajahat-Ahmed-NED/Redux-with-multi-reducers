import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getData from '../config/action'

export default function About() {

    const dataFromRedux=useSelector((a)=>a)
    const dispatch=useDispatch()

    console.log(dataFromRedux.apiData)
    console.log(dataFromRedux)

    useEffect(() => {
        dispatch(getData)
        
    }, [])

    return (
        <>
         <h1>About Page</h1>   
        </>
    )
}
