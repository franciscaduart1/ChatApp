import { useState } from "react";
import messages from "../data/messages";
import useUser from "../hooks/useUser";
import ContactInfo from "../pages/ContactInfo";

function ChatWindow({ chatSeleccionado, setChatSeleccionado }) {
  const usuario = useUser();
  const [mensaje, setMensaje] = useState("");
  const [messageList, setMessageList] = useState(messages);
  const [mostrarInfo, setMostrarInfo] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const horaActual = new Date();
    const horaFormateada = horaActual.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit"
    });

    const nuevoMensaje = {
      id: Date.now(),
      texto: mensaje,
      tipo: "sent",
      hora: horaFormateada,
      autor: usuario.nombre
    };

    setMessageList({
      ...messageList,
      [chatSeleccionado.id]: [
        ...messageList[chatSeleccionado.id],
        nuevoMensaje
      ]
    });
    setMensaje("")
  }
  const mensajesDelChat = chatSeleccionado
    ? messageList[chatSeleccionado.id] : [];

  return (
    <main className="chat-window">
      {!chatSeleccionado ? (
        <div className="empty-chat">
          <h2>Seleccioná un chat</h2>
          <p>Elegí una conversación para ver los mensajes.</p>
        </div>
      ) : (
        <>

          {mostrarInfo ? (
            <ContactInfo
              contacto={chatSeleccionado}
              setMostrarInfo={setMostrarInfo} />
          ) : (
            <>
              <header className="chat-header">

                <button
                  className="back-button"
                  onClick={() => setChatSeleccionado(null)}
                >
                  ←
                </button>


                <img className="chat-avatar" src={chatSeleccionado.imagen} alt={`Foto de ${chatSeleccionado.nombre}`}
                />

                <div>
                  <h2 onClick={() => setMostrarInfo(true)}>
                    {chatSeleccionado ? chatSeleccionado.nombre : "selecciona un chat"}</h2>
                  <p>   {chatSeleccionado?.tipo === "grupo"
                    ? chatSeleccionado.integrantes
                      .map((integrante) => integrante.nombre)
                      .join(", ")
                    : usuario.estado}
                  </p>
                </div>
              </header>

              <section className="messages">


                {mensajesDelChat.map((mensaje) => (
                  <div className={`message ${mensaje.tipo}`} key={mensaje.id}>

                    {chatSeleccionado.tipo === "grupo" && mensaje.tipo === "received" && (
                      <strong className={`message-author ${mensaje.autor.toLowerCase()}`}>{mensaje.autor}</strong>
                    )}

                    <p>{mensaje.texto}</p>

                    <span className="message-time">
                      {mensaje.hora}
                      {mensaje.tipo === "sent" ? "✓✓" : ""}
                    </span>
                  </div>
                ))}


              </section>

              <form className="message-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={mensaje}
                  placeholder="Escribí un mensaje"
                  onChange={(event) => setMensaje(event.target.value)}

                />

                <button type="submit">
                  Enviar
                </button>
              </form>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default ChatWindow;