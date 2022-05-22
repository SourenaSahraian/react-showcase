import  { useEffect, useState } from 'react'

function useLocalStorage(key: string, defaultValue:string = '') {

    const [sessionData, setSessionData] = useState<string|object>(() => {
        try {
            const saved = localStorage.getItem(key);
            if (saved) {
                return JSON.parse(saved);
            }
            return defaultValue;
        } catch {
            return defaultValue;
        }
    })

    useEffect(() => {
        const rawValue = JSON.stringify(sessionData);
        localStorage.setItem(key, rawValue);
    }, [key, sessionData]);


    return {
        sessionData,
        setSessionData
    }
}

    export default useLocalStorage