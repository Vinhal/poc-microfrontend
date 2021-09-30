import { useContext } from "react"
import context from "./context"

const useUserContext = () => {
    const userContext = useContext(context)

    console.log('useUserContext', userContext)

    return userContext
}

export default useUserContext