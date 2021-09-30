import React, { useContext } from 'react'
import useUserContext from 'host/useUserContext'

function Home() {

    const userContext = useUserContext()

    console.log('UserContext App 1', userContext)

    return (
        <div>
            Page Home from App 1 application
        </div>
    )
}

export default Home