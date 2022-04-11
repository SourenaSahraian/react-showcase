import React, { useReducer } from 'react'

type StateShape = {
    count: number;
}

type actions =  'increment' | 'decrement';

type PayloadShapeRequired = {
    type : actions,
    payload : number
}
type PayloadShapeOptional  = {
    type : actions
}

type PayloadAction = PayloadShapeRequired  | PayloadShapeOptional ;

const initState = {
    count: 0
}

const reducer = (state:StateShape, action :PayloadShapeRequired ) => {
    switch (action.type) {
        case 'increment':
            return {count : state.count +  action.payload };

        case 'decrement':
            return {count : state.count - action.payload };

        default:
            return state;
    }

}





function Main() {

    const [state, dispatch] = useReducer(reducer, initState);
    const handleIncrement = () => {

        dispatch({
            type: 'increment',
            payload: 1
        })
    }

    const handledecrement = () => {
        dispatch({
            type: 'decrement',
            payload: 1
        })
    }

    return (
        <div>
            <h1>The current count value is {state.count} </h1>
            <button onClick={handleIncrement}> + </button>
            <button onClick={handledecrement} > - </button>
            <h2> hello Soorena , Good luck</h2>
        </div>
    )
}

export default Main
