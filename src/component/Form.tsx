import React, { useReducer } from 'react'


type FormState = {
    name:string,
    lastName:string,
    email:string,
    hasConsented: boolean
}

type FormActionRequired = {
    type:  'HANDLE_INPUT_CHANGE' | 'TOGGLE_CHANGE'
    field:any
    payload: string
}


type FormActionOptional = {
    type:  'HANDLE_INPUT_CHANGE' | 'TOGGLE_CHANGE'
    field?:undefined
    payload?: undefined
}

type FormAction = FormActionRequired | FormActionOptional

const initState = {
    name: "",
    lastName: "",
    email: "",
    hasConsented: false

}

const reducer = (state:FormState, action:FormAction) => {
    switch (action.type) {
        case 'HANDLE_INPUT_CHANGE':
            return {
                ...state,
                [action.field] : action.payload
            };
        case 'TOGGLE_CHANGE':
            return {
                 ...state,
                 hasConsented : !state.hasConsented
                }    
    
        default:
           return state;
    }

}


function Form() {

    const [state, dispatch] = useReducer(reducer, initState)

    const handleSubmmit = () => {
        console.log(' emulating an ajax call to server !');
        console.log(JSON.stringify(state,null,2));
    }

    const hanldeInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(' SSS')
        dispatch({
           type: 'HANDLE_INPUT_CHANGE',
           field: event.target.name,
           payload: event.target.value
        })
    }

    const handleToggleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'TOGGLE_CHANGE'
    })};

    return (
        <form className='flex flex-col items-center mt-7 bg-white shadow-md rounded'>
            <div className='mb-4'>
                <label className='text-black' htmlFor="name">First Name </label>
                <input className='rounded-lg border-4 border-gray-300' value = {state.name} onChange = {hanldeInputChange} type="text" name= "name" />
            </div>

            <div className='mb-4'>
                <label className='text-black' htmlFor="lastName">Last Name </label>
                <input className='rounded-lg border-4 border-gray-300' value = {state.lastName} onChange = {hanldeInputChange}  type="text" name= "lastName" />
            </div>

            <div className='mb-4'>
                <label className='text-black' htmlFor="email">Email </label>
                <input className='rounded-lg border-4 border-gray-300'  value = {state.email} onChange = {hanldeInputChange}  type="text" name= "email"/>
            </div>

            <div className='mb-4'>
                <label className='text-black' htmlFor="hasConsented">Consent </label>
                <input type="checkbox" checked={state.hasConsented} name='hasConsented' onChange = {handleToggleChange}  />
            </div>



            <button className='p-4 bg-blue-500 rounded-md hover:bg-slate-400 w-40' onClick={handleSubmmit} >Submit</button>

         </form>
            

    )
}

export default Form