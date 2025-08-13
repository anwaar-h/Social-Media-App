import { useState } from 'react';
import { createContext} from 'react';

export const counterContext = createContext()
export default function CounterContextProvider({children}){
    const [counter, setCounter] = useState(10)

    return <counterContext.Provider value={{counter, setCounter}}>
    {children}
    </counterContext.Provider>
}

