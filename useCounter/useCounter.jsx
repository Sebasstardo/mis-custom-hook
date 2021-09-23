import { useState } from "react"


export const useCounter = (initialState = 10) => {
    
    const [state, setstate] = useState(initialState)

    const increment = ()=>{
        setstate(state+initialState)
    }
    const decrement = ()=>{
        setstate(state-initialState)
    }
    const reset = ()=>{
        setstate(initialState)
    }

    return{

        state,
        increment,
        decrement,
        reset

    }
}

