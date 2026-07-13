/* Archivo generado por el Panel de gestión (admin.html) — 12/7/2026, 6:45:42 p. m..
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
    id: "lavadora-frigidaire-de-carga-superior-6072",
    nombre: "Lavadora Frigidaire de carga superior",
    categoria: "Electrodomésticos",
    precio: 1200,
    precioOriginal: 1500,
    descripcion: "Lavadora Frigidaire de carga superior con tapa de vidrio. Gran capacidad, cómoda para uso familiar y práctica para cargas grandes.",
    entrega: "12-14 de septiembre",
    estado: "disponible",
    imagenes: ["imagenes/lavadora-frigidaire-de-carga-superior-1.jpg","imagenes/lavadora-frigidaire-de-carga-superior-2.jpg"]
  },

  {
    id: "secadora-lg-de-carga-frontal-2910",
    nombre: "Secadora LG de carga frontal",
    categoria: "Electrodomésticos",
    precio: 2700,
    precioOriginal: 3400,
    descripcion: "Secadora LG de carga frontal con panel digital. Equipo amplio y moderno para secado eficiente de ropa en el hogar.",
    estado: "disponible",
    imagenes: ["imagenes/secadora-lg-de-carga-frontal-1.jpg","imagenes/secadora-lg-de-carga-frontal-2.jpg"]
  },

  {
    id: "robot-aspirador-con-base-automatica-3195",
    nombre: "Robot Aspirador Roomba con base automática - Poco uso",
    categoria: "Electrodomésticos",
    precio: 1501,
    precioOriginal: 1900,
    descripcion: "Robot aspirador con base de carga y depósito automático. Muy cómodo para mantener pisos limpios con mínima intervención diaria.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/robot-aspirador-con-base-automatica-1.jpg","imagenes/robot-aspirador-con-base-automatica-2.jpg","imagenes/robot-aspirador-con-base-automatica-3.jpg"]
  },

  {
    id: "aspiradora-armor-all-para-solidos-y-liqu-0569",
    nombre: "Aspiradora Armor All para sólidos y líquidos",
    categoria: "Muebles",
    precio: 280,
    precioOriginal: 350,
    descripcion: "Aspiradora compacta Armor All para sólidos y líquidos. Versátil para limpieza doméstica, auto, bodega o áreas utilitarias.",
    estado: "disponible",
    imagenes: ["imagenes/aspiradora-armor-all-para-solidos-y-liqu-1.jpg","imagenes/aspiradora-armor-all-para-solidos-y-liqu-2.jpg"]
  },

  {
    id: "cafetera-black-decker-programable-6867",
    nombre: "Cafetera Black+Decker programable",
    categoria: "Electrodomésticos",
    precio: 300,
    precioOriginal: 400,
    descripcion: "Cafetera Black+Decker programable con jarra térmica de acero inoxidable. Conserva mejor la temperatura y permite preparar hasta 12 tazas.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/cafetera-black-decker-programable-1.jpg","imagenes/cafetera-black-decker-programable-2.jpg"]
  },

  {
    id: "hervidor-electrico-de-acero-inoxidable-7946",
    nombre: "Hervidor eléctrico de acero inoxidable",
    categoria: "Electrodomésticos",
    precio: 200,
    precioOriginal: 255,
    descripcion: "Hervidor eléctrico de acero inoxidable con control de temperatura y visor de nivel de agua. Útil, rápido y de diseño compacto.",
    estado: "disponible",
    imagenes: ["imagenes/hervidor-electrico-de-acero-inoxidable-1.jpg","imagenes/hervidor-electrico-de-acero-inoxidable-2.jpg"]
  },

  {
    id: "licuadora-personal-nutribullet-1034",
    nombre: "Licuadora personal NutriBullet",
    categoria: "Electrodomésticos",
    precio: 390,
    precioOriginal: 480,
    descripcion: "Licuadora personal NutriBullet compacta con vaso individual transparente. Ideal para batidos, jugos y preparaciones rápidas.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/licuadora-personal-nutribullet-1.jpg","imagenes/licuadora-personal-nutribullet-2.jpg"]
  },

  {
    id: "freidora-de-aire-gourmia-negra-3408",
    nombre: "Freidora de aire Gourmia negra",
    categoria: "Electrodomésticos",
    precio: 181,
    precioOriginal: 230,
    descripcion: "Freidora de aire Gourmia con panel digital táctil y canasta extraíble. Práctica para cocinar más rápido y con menos aceite.",
    estado: "disponible",
    imagenes: ["imagenes/freidora-de-aire-gourmia-negra-1.jpg","imagenes/freidora-de-aire-gourmia-negra-2.jpg"]
  },

  {
    id: "televisor-tcl-de-pantalla-plana-55-7870",
    nombre: "Televisor TCL de pantalla plana 55´",
    categoria: "Electrodomésticos",
    precio: 1000,
    precioOriginal: 1600,
    descripcion: "Televisor TCL de pantalla plana con patas laterales y marco delgado. Buena opción para sala, dormitorio o estudio; diseño sobrio y fácil de integrar.",
    entrega: "55'",
    estado: "disponible",
    imagenes: ["imagenes/televisor-tcl-de-pantalla-plana-55-1.jpg","imagenes/televisor-tcl-de-pantalla-plana-55-2.jpg"]
  },

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
