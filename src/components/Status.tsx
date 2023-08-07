type StatusProps = {
    Status : 'loading' | 'error' | 'complete'
}


export const Status = (props : StatusProps) => {
    let message
    if(props.Status==='complete'){
        message="complete"
    }else if(props.Status==='error'){
        message="error"
    }else if(props.Status==='loading' ){
        message="loading"
    }
  return (
    <div>
        <h1>Status - {message}</h1>
    </div>
  )
}
