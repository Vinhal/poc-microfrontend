import React from 'react'
import { useState, useCallback } from "react";
import Context from "./context";

function UserProvider({ children }) {

    const [user, setUser] = useState({ user: 'fulano', login: 'email@email.com' })

    const loadUser = useCallback(user => {
        setUser(user)
    }, [])


    return (
        <Context.Provider value={{ user, loadUser }}>
          {children}  
        </Context.Provider>
    )
}

export default UserProvider