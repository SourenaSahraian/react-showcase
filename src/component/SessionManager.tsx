import React, {useContext, useEffect} from 'react'
import {AuthContext} from './UserContetx'


function SessionManager() {

    const {setUser} = useContext(AuthContext); 
    
    useEffect(() => {
      setUser({
            name: "Soorena",
            email:"sourenaair@gmail.com"
        })

    }, [setUser])
    

  return (
    <h2> Welcome Home, navigate to see your orders ! </h2>
  )
}

export default SessionManager