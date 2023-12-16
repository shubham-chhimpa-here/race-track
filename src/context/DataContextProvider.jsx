import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider({children}) {
    const [runner, setRunner] = useState([
      
    ]);
    const [state, setState] = useState(false);
    return (
        <DataContext.Provider value={{runner, setRunner}}>
        {children}
        </DataContext.Provider>
    )
}