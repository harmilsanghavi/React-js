type EventChnageProps={
    value : string
    handleChnage : (event : React.ChangeEvent<HTMLInputElement>)=>void
}

export const ChangeEvent = (props:EventChnageProps) => {
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log("event Chnage :- ",event);
    }

    return (
    <div>
        <input type="text" value={props.value} onChange={handleInputChange} />
    </div>
  )
}
