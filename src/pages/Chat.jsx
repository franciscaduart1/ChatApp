import { useState } from "react";
import { useParams } from "react-router-dom";
import chats from "../data/chats";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

function Chat() {
  const { chatId } = useParams();

  const chat = chats.find((chat) => chat.id === Number(chatId));

  const [chatSeleccionado, setChatSeleccionado] = useState(chat);

  if (!chat) {
    return (
      <div>
        <h1>Chat no encontrado</h1>
        <p>El chat que buscás no existe</p>
      </div>
    );
  }

  return (
    <div className={`chat-app ${chatSeleccionado ? "chat-abierto" : ""}`}>
      <Sidebar setChatSeleccionado={setChatSeleccionado} />

      <ChatWindow
        chatSeleccionado={chatSeleccionado}
        setChatSeleccionado={setChatSeleccionado}
      />
    </div>
  );
}

export default Chat;