import React, { useState, createContext, ReactNode } from 'react'

type UserContetxProps = {
    children: ReactNode
}

type UserAuth = {
    name: string,
    email: string
}

type UserContextType = {
    user: UserAuth | null,
    setUser: React.Dispatch<React.SetStateAction<UserAuth | null>>
}

export const AuthContext = createContext({} as UserContextType );

function UserContetx({ children }: UserContetxProps) {

    const [user, setUser] = useState<UserAuth | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>

    )
}

export default UserContetx