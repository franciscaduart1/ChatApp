function MessageForm({ mensaje, setMensaje, handleSubmit }) {
  return (
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
  );
}

export default MessageForm;