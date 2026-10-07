import { useState } from "react";
import messages from "../data/messages";
import useUser from "../hooks/useUser";
import ContactInfo from "../pages/ContactInfo";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

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
              <ChatHeader
  chatSeleccionado={chatSeleccionado}
  usuario={usuario}
  setMostrarInfo={setMostrarInfo}
  setChatSeleccionado={setChatSeleccionado}
/>

              <MessageList
  mensajesDelChat={mensajesDelChat}
  chatSeleccionado={chatSeleccionado}
/>

              <MessageForm
  mensaje={mensaje}
  setMensaje={setMensaje}
  handleSubmit={handleSubmit}
/>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default ChatWindow;