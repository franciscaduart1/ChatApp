import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"
import chats from "../data/chats";

function Sidebar({ setChatSeleccionado }) {
    const [buscador, setBuscador] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    function handleBuscar(event) {
        const valor = event.target.value;

        setBuscador(valor);
        if (valor === "") {
            setSearchParams({});
        } else {
            setSearchParams({ buscar: valor });
        }
    }
    const chatsFiltrados = chats.filter((chat) => {
        return chat.nombre.toLowerCase().includes(buscador.toLowerCase());
    });
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>WhatsApp</h2>
            </div>

            <div className="search">
                <input
                    type="text"
                    placeholder="Buscar un chat"
                    value={buscador}
                    onChange={handleBuscar}
                />
            </div>

            <div className="chat-list">
                <h3>Mis chats</h3>
                {chatsFiltrados.length === 0 ? (
                    <p>No se encontraron chats</p>
                ) : (
                    chatsFiltrados.map((chat) => (
                        <div className="chat-item" key={chat.id} onClick={() => { setChatSeleccionado (chat); navigate(`/chat/${chat.id}`)}}>
                            <img className="chat-avatar" src={chat.imagen} alt={`Foto de ${chat.nombre}`}>
                            </img>

                            <div>
                                <h4>{chat.nombre}</h4>
                                {chat.tipo === "grupo" ? (
                                    <p>{chat.ultimoRemitente}: {chat.ultimoMensaje}</p>
                                ) : (
                                    <p>{chat.ultimoMensaje}</p>
                                )}
                            </div>
                        </div>
                    ))
                )}

            </div>

        </aside>
    );
}

export default Sidebar;