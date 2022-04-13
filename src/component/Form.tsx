import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'



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
    name: "soorema",
    lastName: "x",
    email: "y",
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

function isObject(object:any) {
    return object != null && typeof object === 'object';
  }
function deepEqual(object1:any, object2:any) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
       ( areObjects && !deepEqual(val1, val2) )||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }
    return true;
  }


function Form() {
    //consider use memo
    const {sessionData  , saveToSession} = useLocalStorage('form');
    // damn same exact object works!!!
    //const temp =   {email: 'xxx', lastName: 'ewqde', name: 'ww', hasConsented: true}
  
    const [state, dispatch] = useReducer(reducer,sessionData as  FormState);
    const navigate = useNavigate();

    const handleSubmmit = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(' emulating an ajax call to server !');
        console.log(JSON.stringify(state,null,2));
        saveToSession(state);
       // navigate('/')

    }

    const hanldeInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
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
        <div className='max-h-full'>
        <form className='flex flex-col items-center mt-7 bg-white shadow-md rounded max-h-screen'>
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



            <button className='p-4 bg-blue-500 rounded-md mb-7 hover:bg-slate-400 w-40' onClick={ handleSubmmit} >Submit</button>

         </form>
         </div>

    )
}

export default Form