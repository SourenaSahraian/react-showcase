import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'



type FormState = {
    name: string,
    lastName: string,
    email: string,
    hasConsented: boolean
}

type FormActionRequired = {
    type: 'HANDLE_INPUT_CHANGE' | 'TOGGLE_CHANGE'
    field: any
    payload: string
}


type FormActionOptional = {
    type: 'HANDLE_INPUT_CHANGE' | 'TOGGLE_CHANGE'
    field?: undefined
    payload?: undefined
}

type FormAction = FormActionRequired | FormActionOptional

const initState = {
    name: "soorema",
    lastName: "x",
    email: "y",
    hasConsented: false

}

const reducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
        case 'HANDLE_INPUT_CHANGE':
            return {
                ...state,
                [action.field]: action.payload
            };
        case 'TOGGLE_CHANGE':
            return {
                ...state,
                hasConsented: !state.hasConsented
            }

        default:
            return state;
    }

}
function Form() {
    //consider use memo
    const { sessionData, setSessionData } = useLocalStorage('form', '');
    const initForm = sessionData as FormState ?? initState;
    const [state, dispatch] = useReducer(reducer, initForm);
    const navigate = useNavigate();

    const handleSubmmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(' emulating an ajax call to server !');
        console.log(JSON.stringify(state, null, 2));
        setSessionData(state);
        // navigate('/')

    }

    const hanldeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'HANDLE_INPUT_CHANGE',
            field: event.target.name,
            payload: event.target.value
        })
    }

    const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'TOGGLE_CHANGE'
        })
    };

    return (
        <div className="bg-green-300 h-screen flex flex-col 
        items-center justify-center">
            <form >
                <div className="flex-col space-x-4 items-center mb-6">
                    <label className='text-black' htmlFor="name">First Name: </label>
                    <input className='rounded-lg  px-4  border-4 border-gray-300' value={state.name} onChange={hanldeInputChange} type="text" name="name" />
                </div>
                <div className='mb-4 space-x-4'>
                    <label className='text-black' htmlFor="lastName">Last Name: </label>
                    <input className='rounded-lg  px-4  border-4 border-gray-300' value={state.lastName} onChange={hanldeInputChange} type="text" name="lastName" />
                </div>

                <div className='mb-4 space-x-12'>
                    <label className='text-black' htmlFor="email">Email: </label>
                    <input className='rounded-lg  px-4  border-4 border-gray-300' value={state.email} onChange={hanldeInputChange} type="text" name="email" />
                </div>

                <div className='mb-4 space-x-4'>
                    <label className='text-black' htmlFor="hasConsented">Consent </label>
                    <input type="checkbox" checked={state.hasConsented} name='hasConsented' onChange={handleToggleChange} />
                </div>


                <div className='flex items-center justify-self-auto'>
                    <button className='p-4 bg-blue-500 rounded-md text-white hover:opacity-80  w-40' onClick={handleSubmmit} >Submit</button>
                </div>


            </form>
        </div>
    )
}

export default Form