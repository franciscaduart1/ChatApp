import juan from "../images/juan.jpg";
import maria from "../images/maria.jpg";
import lucia from "../images/lucia.jpg";
import utn from "../images/utn.jpg";
import sole from "../images/sole.jpg";
import tiavicky from "../images/tiavicky.jpg";
import mama from "../images/mama.jpg";
import papa from "../images/papa.jpg";
import lola from "../images/lola.jpg";
import coti from "../images/coti.jpg";
import pedro from "../images/pedro.jpg";


import familia from "../images/familia.jpg";


const chats = [
  {
    id: 1,
    tipo: "contacto",
    nombre: "Juan",
    telefono: "11 1234-5678",
    imagen: juan,
    ultimoMensaje: "Bien también 😊",
  },
  {
    id: 2,
    tipo: "contacto",
    nombre: "María",
    telefono: "11 1234-5678",
    imagen: maria,
    ultimoMensaje: "✓✓ Sí, te lo paso después.",
  },

  {
    id: 3,
    tipo: "grupo",
    nombre: "Familia",
    integrantes: [{ nombre: "Mama", imagen: mama },
    { nombre: "Papa", imagen: papa },
    { nombre: "Sole", imagen: sole },
    { nombre: "Tia Vicky", imagen: tiavicky }
    ],
    ultimoRemitente: "Tia Vicky",
    imagen: familia,
    ultimoMensaje: "¿Como salio el asado?"
  },

  {
    id: 4,
    tipo: "contacto",
    nombre: "Lucía",
    telefono: "11 1234-5678",
    imagen: lucia,
    ultimoMensaje: "✓✓ Estoy terminándolo.",
  },

  {
    id: 5,
    tipo: "grupo",
    nombre: "Curso UTN-programación",
    integrantes: [
      { nombre: "Lola", imagen: lola },
      { nombre: "Coti", imagen: coti },
      { nombre: "Pedro", imagen: pedro }
    ],
    ultimoRemitente: "Coti",
    imagen: utn,
    ultimoMensaje: "Yo todavía estoy con la parte de React."
  }


];

export default chats;