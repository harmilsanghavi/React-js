type Greeting = {
    name : string
    messageCount ?: number
}

export const Greet = (props :Greeting) => {
    const {messageCount = 0}=props
  return (
    <div>
        <h1>Hello welcome {props.name} {messageCount}</h1>
    </div>
  )
}
