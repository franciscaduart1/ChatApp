function ChatHeader({ chatSeleccionado, usuario, setMostrarInfo, setChatSeleccionado }) {
  return (
    <header className="chat-header">
      <button
        className="back-button"
        onClick={() => setChatSeleccionado(null)}
      >
        ←
      </button>

      <img
        className="chat-avatar"
        src={chatSeleccionado.imagen}
        alt={`Foto de ${chatSeleccionado.nombre}`}
      />

      <div>
        <h2 onClick={() => setMostrarInfo(true)}>
          {chatSeleccionado.nombre}
        </h2>

        <p>
          {chatSeleccionado.tipo === "grupo"
            ? chatSeleccionado.integrantes
                .map((integrante) => integrante.nombre)
                .join(", ")
            : usuario.estado}
        </p>
      </div>
    </header>
  );
}

export default ChatHeader;