import { useReducer } from 'react'

type CounterProps = {
    count:number
}

type CounterAction ={
    type:'increment' | 'decrement'
    payload:number
}

const initialState = { count: 0 }

function reducer(state:CounterProps, action:CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

export const Counter = () => {

    const [state, dispatch]=useReducer(reducer, initialState)

    return (
        <div>
            Count :- {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
        </div>
    )
}
