type EvenrProps={
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}

export const ClickEvent = (props : EvenrProps) => {
  return (
    <div>
        <button onClick={(event)=>props.handleClick(event,1)}>Clicked Me</button>
    </div>
  )
}
