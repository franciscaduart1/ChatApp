import { Phone, Video, Search } from "lucide-react";

function ContactInfo({ contacto, setMostrarInfo }) {
  return (
    <div className="contact-info">
      <button onClick={() => setMostrarInfo(false)}>
        ←
      </button>
      <h1>
        {contacto.tipo === "grupo"
          ? "Información del grupo"
          : "Información del contacto"}
      </h1>

      <img
        src={contacto.imagen}
        alt={`Foto de ${contacto.nombre}`}
      />

      <h2>{contacto.nombre}</h2>

      {contacto.tipo === "grupo" ? (
        <p>{contacto.integrantes.length} participantes</p>
      ) : (
        <p>Teléfono: {contacto.telefono}</p>
      )}
      <div className="contact-actions">
        <button>
          <Phone />
          <span>Llamar</span>
        </button>

        <button>
          <Video />
          <span>Video</span>
        </button>

        <button>
          <Search />
          <span>Buscar</span>
        </button>
      </div>

      <div className="shared-section">
        <h3>Archivos, enlaces y documentos</h3>
        <div className="shared-options">
          <div>
            <span>📷</span>
            <p>Archivos multimedia</p>
          </div>

          <div>
            <span>📄</span>
            <p>Documentos</p>
          </div>

          <div>
            <span>🔗</span>
            <p>Enlaces</p>
          </div>
        </div>
      </div>
      {contacto.tipo === "contacto" && (
        <div className="groups-section">
          <h3>Grupos en común</h3>

          <div className="group-item">
            <div className="group-avatar">G</div>

            <div>
              <h4>Grupo de amigos</h4>
              <p>5 participantes</p>
            </div>
          </div>
        </div>
      )}

      {contacto.tipo === "grupo" && (
        <div className="groups-section">
          <h3>Participantes</h3>

          {contacto.integrantes.map((integrante) => (
            <div className="group-item" key={integrante.nombre}>
              <img className="group-avatar" src={integrante.imagen} alt={`Foto de ${integrante.nombre}`}
              />

              <div>

                <h4>{integrante.nombre}</h4>
              </div>
            </div>
          ))}
        </div>
      )}


      <div className="contact-settings">
        <div>
          <span>🔔</span>
          <p>Notificaciones</p>
        </div>

        <div>
          <span>⭐</span>
          <p>Mensajes destacados</p>
        </div>

        <div>
          <span>🔒</span>
          <p>Mensajes temporales</p>
        </div>

        <div>
          <span>🔐</span>
          <p>Cifrado</p>
        </div>
      </div>


      {contacto.tipo === "grupo" && (
        <button className="leave-group">
          Salir del grupo
        </button>
      )}
    </div>


  );


}

export default ContactInfo;