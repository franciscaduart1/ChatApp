import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function useUser() {
    const usuario = useContext(UserContext);
    return usuario;
}

export default useUser;