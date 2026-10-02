import { createContext } from "react";

const UserContext = createContext();
function UserContextProvider({ children }) {
    const usuario = {
        nombre: "Juan",
        estado: "En línea"
    };
    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };