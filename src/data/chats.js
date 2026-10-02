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
    ultimoMensaje: "Hola, ¿cómo estás?",
  },
  {
    id: 2,
    tipo: "contacto",
    nombre: "María",
    telefono: "11 1234-5678",
    imagen: maria,
    ultimoMensaje: "Nos vemos mañana",
  },

  {
    id: 5,
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
    id: 3,
    tipo: "contacto",
    nombre: "Lucía",
    telefono: "11 1234-5678",
    imagen: lucia,
    ultimoMensaje: "¿Terminaste el trabajo?",
  },

  {
    id: 4,
    tipo: "grupo",
    nombre: "Curso UTN-programación",
    integrantes: [
      { nombre: "Lola", imagen: lola },
      { nombre: "Coti", imagen: coti },
      { nombre: "Pedro", imagen: pedro }
    ],
    ultimoRemitente: "Lola",
    imagen: utn,
    ultimoMensaje: "¿Como viene con el tp?"
  }


];

export default chats;