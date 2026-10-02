import { useParams } from "react-router-dom";
import chats from "../data/chats";
import messages from "../data/messages";

function Chat() {
  const { chatId } = useParams();
  const chat = chats.find((chat) => chat.id === Number(chatId));
  const mensajesDelChat = messages[chatId];

  if (!chat) {
    return (
      <div>
        <h1>Chat no encontrado</h1>
        <p>El chat que buscás no existe</p>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Conversación</h1>
      <p>Chat seleccionado: {chat.nombre}</p>

      {mensajesDelChat.map((mensaje) => (
        <p key={mensaje.id}>
          {mensaje.texto}
        </p>
      ))}
    </div>
  );
}

export default Chat;