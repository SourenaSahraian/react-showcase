import React, {useContext} from 'react'
import { AuthContext } from './UserContetx'


function Order() {
    const {user} = useContext(AuthContext);
    console.log(' user', user?.email)
    return (
        <>
            <div>Order is here</div>
            <h2> {JSON.stringify(user, null, 2)}</h2>
        </>

    )
}

export default Order