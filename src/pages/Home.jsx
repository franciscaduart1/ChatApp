import { useState } from "react";

import ChatWindow from "../components/ChatWindow";
import Sidebar from "../components/Sidebar";

function Home() {
  const [chatSeleccionado, setChatSeleccionado] = useState(null);
  return (
    <div className={`chat-app ${chatSeleccionado ? "chat-abierto" : ""}`}>
      <Sidebar setChatSeleccionado={setChatSeleccionado} />


      <ChatWindow chatSeleccionado={chatSeleccionado} setChatSeleccionado={setChatSeleccionado} />

    </div>
  );
}

export default Home;