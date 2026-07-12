/* Archivo generado por el Panel de gestión (admin.html) — 12/7/2026, 5:51:33 p. m..
   Puedes editarlo a mano o seguir usando el panel. */

const CONFIG = {
  titulo:    "Ventas de Apartamento",
  subtitulo: "Vendemos muebles, electrodomésticos y artículos del hogar en excelente estado. Todo debe salir — escríbenos por el que te interese.",
  whatsapp:  "50230010731",
  moneda:    "Q",
  notaPie:   "Entrega en zona 10, Frente a La Estación, Ciudad de Guatemala. Precios negociables por compra de varios artículos.",
  infoVenta: {
    "comoReservar": [
      "Elija el o los artículos de su interés y pulse el botón de WhatsApp.",
      "La reserva se confirma con un anticipo del 20%; el saldo se cancela contra entrega a satisfacción del comprador."
    ],
    "condiciones": [
      "Los precios ya incluyen un 20% de descuento sobre el valor estimado de mercado de cada artículo.",
      "Todos los artículos se encuentran en buen estado y en pleno funcionamiento; pueden verse en persona con cita previa.",
      "Cada ficha indica la fecha de entrega: los artículos de uso diario se entregan entre el 12 y el 14 de septiembre.",
      "Entrega en nuestra vivienda, Zona 10 frente a La Estación; el retiro y transporte corren por cuenta del comprador.",
      "Primero en reservar, primero en derecho."
    ],
    "notaFinal": "Próximamente se sumarán nuevos artículos. Si tiene interés en algo en particular, no dude en consultar disponibilidad (por ejemplo: camas, colchones, arreglos navideños completos, plantas y macetas, etc.)."
  }
};

const PRODUCTOS = [
  {
    id: "mesa-auxiliar-de-mimbre-ratan-3602",
    nombre: "Mesa auxiliar de mimbre / ratán",
    categoria: "Muebles",
    precio: 380,
    precioOriginal: 480,
    descripcion: "Mesa auxiliar de mimbre o ratán con repisa inferior. Liviana, cálida y decorativa para sala, terraza techada o rincón de lectura.",
    medidas: "Aprox. 70 × 45 × 65 cm",
    entrega: "Entrega inmediata",
    estado: "disponible",
    imagenes: ["imagenes/mesa-auxiliar-de-mimbre-ratan-1.jpg"]
  },

  {
    id: "mueble-para-tv-rustico-de-madera-8980",
    nombre: "Mueble para TV rústico de madera",
    categoria: "Muebles",
    precio: 1040,
    precioOriginal: 1300,
    descripcion: "Mueble para TV de estilo rústico, con repisa central y tres compartimentos inferiores. Ideal para organizar equipos y accesorios.",
    medidas: "Aprox. 155 × 45 × 80 cm",
    estado: "disponible",
    imagenes: ["imagenes/mueble-para-tv-rustico-de-madera-1.jpg"]
  },

  {
    id: "consola-de-madera-oscura-con-tres-cajone-9198",
    nombre: "Consola de madera oscura con tres cajones",
    categoria: "Muebles",
    precio: 760,
    precioOriginal: 950,
    descripcion: "Consola de madera oscura con tres cajones y repisa inferior. Elegante, funcional y muy versátil para recibidor, comedor o sala.",
    medidas: "Aprox. 170 × 42 × 85 cm",
    estado: "disponible",
    imagenes: ["imagenes/consola-de-madera-oscura-con-tres-cajone-1.jpg","imagenes/consola-de-madera-oscura-con-tres-cajone-2.jpg"]
  },

  {
    id: "juego-de-comedor-completo-6-sillas-y-mes-0322",
    nombre: "Juego de comedor: mesa rectangular + 6 sillas",
    categoria: "Muebles",
    precio: 2360,
    precioOriginal: 2950,
    descripcion: "Juego de comedor completo con mesa rectangular y seis sillas tapizadas. Sobrio, amplio y muy funcional para comedor familiar.",
    medidas: "Mesa aprox. 180 × 100 × 76 cm; sillas aprox. 45 × 50 × 95 cm",
    entrega: "Entrega inmediata",
    estado: "disponible",
    imagenes: ["imagenes/producto-4.jpg","imagenes/producto-5.jpg"]
  },

  {
    id: "espejo-de-pie-0374",
    nombre: "Espejo de pie ovalado con marco negro",
    categoria: "Muebles",
    precio: 300,
    precioOriginal: 380,
    descripcion: "Espejo de pie con marco negro y diseño ovalado. Ideal para dormitorio, vestidor o recibidor; aporta amplitud y estilo.",
    medidas: "Aprox. 165 × 55 × 35 cm",
    entrega: "Disponibilidad inmediata",
    estado: "disponible",
    imagenes: ["imagenes/producto-3.jpg"]
  },

  {
    id: "divan-de-alta-categoria-5318",
    nombre: "Sofá / diván rojo de 3 plazas",
    categoria: "Muebles",
    precio: 1700,
    precioOriginal: 2130,
    descripcion: "Sofá tipo diván de tres plazas, tapizado en tono rojo con diseño clásico. Pieza cómoda y con carácter para sala o estudio.",
    medidas: "Aprox. 210 × 85 × 80 cm",
    estado: "disponible",
    imagenes: ["imagenes/divan-de-alta-categoria-1.jpg"]
  },

  {
    id: "mesa-apoyo-comedor-8338",
    nombre: "Mesa apoyo comedor",
    categoria: "Muebles",
    precio: 800,
    descripcion: "Falta agregar",
    estado: "disponible",
    imagenes: ["imagenes/mesa-apoyo-comedor-1.jpg","imagenes/mesa-apoyo-comedor-2.jpg"]
  },

  {
    id: "sofa-tres-plazas",
    nombre: "Sofá de 3 plazas",
    categoria: "Muebles",
    precio: 2500,
    precioOriginal: 3200,
    descripcion: "Tela gris, 2 años de uso, excelente estado. Cojines incluidos.",
    medidas: "210 × 90 × 85 cm",
    estado: "disponible",
    imagenes: ["imagenes/sofa-de-3-plazas-1.jpg","imagenes/sofa-de-3-plazas-2.jpg","imagenes/sofa-de-3-plazas-3.jpg"]
  }
];
