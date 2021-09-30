import React from "react"
import useUserContext from './UserContext/useUserContext'

function Home() {

    const cont = useUserContext()

    console.log({ cont })

    return (
        <h2> ROute hhome</h2>
    )
}

export default Home