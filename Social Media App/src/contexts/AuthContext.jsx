import { createContext, useState } from 'react'
export const authContext = createContext()
export default function AuthContextProvider(props) {
    const [isLoggedIn , setIsLoggedIn] = useState(localStorage.getItem("token")!= null)

    return <authContext.Provider  value={{isLoggedIn , setIsLoggedIn}}>
    {props.children}
    </authContext.Provider>

}
