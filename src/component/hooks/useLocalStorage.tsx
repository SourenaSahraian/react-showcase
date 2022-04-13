import React, { useEffect, useState } from 'react'

function useLocalStorage(key: string) {
    const [sessionData, setSessionData] = useState<string|object>({});
    useEffect(() => {
        //piss off , I know it's not really sesssion but ...
        const resp = localStorage.getItem(key);
        if(resp){
            setSessionData(JSON.parse(resp));
        }

    }, [key])

    const saveToSession =(data: string | Object) => {
        localStorage.setItem(key, JSON.stringify(data));
        setSessionData(data);
    }

    return {
        sessionData,
        saveToSession
    }
}

    export default useLocalStorage