import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
  
    const [timer,setTimert]=useState(0);
    const intervalRef=useRef<number | undefined>(undefined)
  
    const stopTimer=()=>{
        window.clearInterval(intervalRef.current)
    }

    const startTimer=()=>{
        intervalRef.current=window.setInterval(()=>{
            setTimert((timer)=> timer+1)
        },1000)
    }

    // useEffect(()=>{
    //     starttimer()
    //     return ()=>{
    //         stopTimer()
    //     }
    // },[])

    return (
    <div>
        HookTimer - {timer} -
        <button onClick={()=>startTimer()}>Start Timer</button>
        <button onClick={()=>stopTimer()}>Stop Timer</button>
    </div>
  )
}
