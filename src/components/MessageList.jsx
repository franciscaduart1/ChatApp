function MessageList({ mensajesDelChat, chatSeleccionado }) {
  return (
    <section className="messages">
      {mensajesDelChat.map((mensaje) => (
        <div className={`message ${mensaje.tipo}`} key={mensaje.id}>
          {chatSeleccionado.tipo === "grupo" && mensaje.tipo === "received" && (
            <strong className={`message-author ${mensaje.autor.toLowerCase()}`}>
              {mensaje.autor}
            </strong>
          )}

          <p>{mensaje.texto}</p>

          <span className="message-time">
            {mensaje.hora}
            {mensaje.tipo === "sent" ? "✓✓" : ""}
          </span>
        </div>
      ))}
    </section>
  );
}

export default MessageList;