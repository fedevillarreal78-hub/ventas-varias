/* Archivo generado por el Panel de gestión (admin.html) — 9/8/2026, 4:03:25 p. m..
   Puedes editarlo a mano o seguir usando el panel. */

const CONFIG = {
  titulo:    "Ventas de Apartamento",
  subtitulo: "Vendemos muebles, electrodomésticos y artículos del hogar en excelente estado. Todo debe salir — escríbenos por el que te interese.",
  whatsapp:  "50242103112",
  moneda:    "Q",
  notaPie:   "Entrega en zona 10, Frente a La Estación, Ciudad de Guatemala. Precios negociables por compra de varios artículos.",
  infoVenta: {
    "comoReservar": [
      "Elija el o los artículos de su interés y pulse el botón de WhatsApp.",
      "La reserva se confirma con un anticipo del 20%; el saldo se cancela contra entrega a satisfacción del comprador.",
      "Los datos para el pago son:",
      "* Banco: GyT",
      "* Cuenta: Monetaria",
      "* Nombre: FEDERICO VILLARREAL",
      "* Número: 02901353276"
    ],
    "condiciones": [
      "Los precios ya incluyen un 20% de descuento sobre el valor estimado de mercado de cada artículo.",
      "Todos los artículos se encuentran en buen estado y en pleno funcionamiento; pueden verse en persona con cita previa.",
      "Cada ficha indica la fecha de entrega: los artículos de uso diario se entregan entre el 9 y el 10 de septiembre.",
      "Entrega en nuestra vivienda, Zona 10 frente a La Estación; el retiro y transporte corren por cuenta del comprador.",
      "Primero en reservar, primero en derecho."
    ],
    "notaFinal": "Próximamente se sumarán nuevos artículos. Si tiene interés en algo en particular, no dude en consultar disponibilidad (por ejemplo: camas, colchones, arreglos navideños completos, plantas y macetas, etc.)."
  }
};

const PRODUCTOS = [
  {
    id: "televisor-tcl-43-smart-tv-6866",
    nombre: "Televisor TCL 43\", Smart TV",
    categoria: "Electrodomésticos",
    precio: 490,
    precioOriginal: 610,
    descripcion: "Televisor TCL de 43 pulgadas, pantalla LED plana con marco color plateado. Funciona correctamente, sin rayones visibles en pantalla. Incluye control remoto original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/televisor-tcl-43-smart-tv-1.jpg"]
  },

  {
    id: "mantel-modernhome-floral-multicolor-160--9521",
    nombre: "Mantel modernhome, floral multicolor, 160×280 cm",
    categoria: "Bazar",
    precio: 250,
    precioOriginal: 320,
    descripcion: "Mantel de algodón 100%, estampado floral multicolor sobre fondo blanco, marca modernhome, tamaño 160×280 cm, ideal para mesas de 10–12 personas. NUEVO, en su empaque original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/mantel-modernhome-floral-multicolor-160--3.jpg","imagenes/mantel-modernhome-floral-multicolor-160--4.jpg"]
  },

  {
    id: "mantel-modernhome-blanco-160-280-cm-5339",
    nombre: "Mantel modernhome, blanco, 160×280 cm",
    categoria: "Bazar",
    precio: 300,
    precioOriginal: 390,
    descripcion: "Mantel de algodón fino 100%, color blanco, marca modernhome, tamaño 160×280 cm, ideal para mesas de 10–12 personas. NUEVO, en su empaque original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/mantel-modernhome-blanco-160-280-cm-3.jpg","imagenes/mantel-modernhome-blanco-160-280-cm-4.jpg"]
  },

  {
    id: "mantel-servilletas-modernhome-hotel-coll-1895",
    nombre: "Mantel + servilletas modernhome Hotel Collection, gris claro, 160×280 cm",
    categoria: "Bazar",
    precio: 250,
    precioOriginal: 350,
    descripcion: "Mantel de algodón 100%, color gris claro, marca modernhome línea Hotel Collection, con vainica decorativa en el borde, tamaño 160×280 cm. Incluye juego de servilletas de tela a juego, misma colección y color. NUEVO, en su empaque original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/mantel-servilletas-modernhome-hotel-coll-3.jpg","imagenes/mantel-servilletas-modernhome-hotel-coll-4.jpg"]
  },

  {
    id: "mantel-modernhome-celeste-con-encaje-160-0451",
    nombre: "Mantel modernhome, celeste con encaje, 160×320 cm",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 300,
    descripcion: "Mantel de algodón 100%, color celeste, con banda de encaje crema en el borde. Marca modernhome, colección RO-02. Tamaño 160×320 cm, ideal para mesas de 10–12 personas. NUEVO, en su empaque original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/mantel-modernhome-celeste-con-encaje-160-3.jpg"]
  },

  {
    id: "set-de-8-servilleteras-plateadas-diseno--0333",
    nombre: "Set de 8 servilleteras plateadas, diseño de alambre entrelazado",
    categoria: "Bazar",
    precio: 250,
    precioOriginal: 350,
    descripcion: "Set de 8 servilleteras metálicas de alambre entrelazado, acabado plateado. NUEVAS, con etiqueta de precio original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-8-servilleteras-plateadas-diseno--2.jpg"]
  },

  {
    id: "set-de-servilletas-de-tela-motivo-huevos-8766",
    nombre: "Set de servilletas de tela, motivo huevos multicolor",
    categoria: "Bazar",
    precio: 75,
    precioOriginal: 150,
    descripcion: "Dos paquetes de servilletas de tela de algodón, estampado de óvalos con patrones multicolor. NUEVAS, en su empaque original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-servilletas-de-tela-motivo-huevos-2.jpg"]
  },

  {
    id: "set-de-2-bowls-decorativos-floral-rojo-y-4181",
    nombre: "Set de 2 bowls decorativos, floral rojo y lunares turquesa",
    categoria: "Bazar",
    precio: 100,
    precioOriginal: 216,
    descripcion: "Set de 2 bowls decorativos a juego, uno rojo con motivo floral vintage y otro turquesa con lunares blancos. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-2-bowls-decorativos-floral-rojo-y-1.jpg","imagenes/set-de-2-bowls-decorativos-floral-rojo-y-2.jpg"]
  },

  {
    id: "set-de-3-piezas-redondas-decorativas-bor-1556",
    nombre: "Set de 3 piezas redondas decorativas, borde de madera",
    categoria: "Bazar",
    precio: 220,
    precioOriginal: 264,
    descripcion: "Set de 3 piezas redondas decorativas de tamaños graduados, borde de madera, con motivos geométrico, de espigas y de hojas onduladas. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-3-piezas-redondas-decorativas-bor-3.jpg","imagenes/set-de-3-piezas-redondas-decorativas-bor-4.jpg"]
  },

  {
    id: "set-de-3-bandejas-cuadradas-decorativas--5424",
    nombre: "Set de 3 bandejas cuadradas decorativas, borde dorado",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Set de 3 bandejas cuadradas decorativas con borde dorado, tamaños graduados. Motivos: floral blanco y negro sobre fondo mostaza, hojas de palma blancas sobre fondo terracota, y espigas negras sobre fondo crema. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-3-bandejas-cuadradas-decorativas--1.jpg"]
  },

  {
    id: "colorescencia-julio-cesar-valverde-set-d-5330",
    nombre: "Colorescencia (Julio César Valverde) — set de 4 platos cuadrados decorativos, edición limitada",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Set de 4 platos/platones cuadrados de cerámica, edición limitada \"Colorescencia\" del artista costarricense Julio César Valverde, colección \"Trazos Criollos\" exclusiva de Cemaco Costa Rica. Cada plato presenta una ilustración distinta (medias de patrones geométricos multicolor con distintas razas de perro). NUEVOS, en su caja original. Pieza de colección de arte costarricense contemporáneo.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/colorescencia-julio-cesar-valverde-set-d-1.jpg"]
  },

  {
    id: "set-de-4-platos-motivo-floral-amarillo-r-6825",
    nombre: "Set de 4 platos, motivo floral amarillo (ramillete central)",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Set de 4 platos de porcelana blanca, motivo de ramillete floral amarillo con hojas verdes, centrado en el plato. NUEVOS, en su caja original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-4-platos-motivo-floral-amarillo-r-1.jpg"]
  },

  {
    id: "set-de-4-platos-motivo-heliconia-roja-5206",
    nombre: "Set de 4 platos, motivo heliconia roja",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Set de 4 platos de porcelana blanca, motivo de heliconia roja con hojas verdes, estampado tropical vívido. NUEVOS, en su caja original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-4-platos-motivo-heliconia-roja-1.jpg"]
  },

  {
    id: "set-de-4-platos-motivo-floral-amarillo-d-8740",
    nombre: "Set de 4 platos, motivo floral amarillo (diseño lateral)",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Set de 4 platos de porcelana blanca con motivo floral amarillo pintado a mano en el borde. NUEVOS, en su caja original. Pieza de mesa o decoración, con el mismo estilo de pincelada que otras piezas de colección ya ofrecidas en este catálogo.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-4-platos-motivo-floral-amarillo-d-1.jpg"]
  },

  {
    id: "banquito-escalera-plegable-3-peldanos-ca-4722",
    nombre: "Banquito escalera plegable, 3 peldaños (Casco Premium Folding Step Stool)",
    categoria: "Otros",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Banquito escalera plegable de 3 peldaños con asa superior para transporte, marca Casco (Premium Folding Step Stool). Buen estado, funcional.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/banquito-escalera-plegable-3-peldanos-ca-1.jpg"]
  },

  {
    id: "banquito-escalera-plegable-2-peldanos-1837",
    nombre: "Banquito escalera plegable, 2 peldaños",
    categoria: "Otros",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Banquito escalera plegable de metal, 2 peldaños antideslizantes, práctico para cocina o closet. Buen estado, funcional.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/banquito-escalera-plegable-2-peldanos-1.jpg"]
  },

  {
    id: "fuente-de-porcelana-cuadrada-con-base-de-9901",
    nombre: "Fuente de porcelana cuadrada con base de mimbre",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Fuente de porcelana blanca, forma cuadrada, presentada en base de mimbre tejido. Ideal para servir ensaladas o postres. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/fuente-de-porcelana-cuadrada-con-base-de-1.jpg"]
  },

  {
    id: "tetera-de-ceramica-color-azul-liso-7023",
    nombre: "Tetera de cerámica, color azul liso",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Tetera de cerámica esmaltada en color azul liso, con infusor interno. Diseño moderno y minimalista. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/tetera-de-ceramica-color-azul-liso-1.jpg"]
  },

  {
    id: "cubitera-de-madera-con-tapa-metalica-y-p-2684",
    nombre: "Cubitera de madera con tapa metálica y pinzas",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Cubitera de madera con tapa e interior metálico e insulado, incluye pinzas para hielo a juego. Ideal para bar en casa. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/cubitera-de-madera-con-tapa-metalica-y-p-1.jpg"]
  },

  {
    id: "tetera-de-porcelana-motivo-floral-azul-c-9852",
    nombre: "Tetera de porcelana, motivo floral azul con mariposas",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Tetera de porcelana, fondo azul con flores y mariposas pintadas a mano. Pieza decorativa y funcional. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/tetera-de-porcelana-motivo-floral-azul-c-1.jpg"]
  },

  {
    id: "azucarera-y-cremera-ceramica-blanca-con--4571",
    nombre: "Azucarera y cremera, cerámica blanca con rayas azules",
    categoria: "Bazar",
    precio: 100,
    precioOriginal: 120,
    descripcion: "Azucarera con tapa y cremera a juego, cerámica blanca con rayas y borde azul. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/azucarera-y-cremera-ceramica-blanca-con--1.jpg"]
  },

  {
    id: "par-de-bandejas-rectangulares-motivo-con-1728",
    nombre: "Par de bandejas rectangulares, motivo conejos (roja y azul)",
    categoria: "Bazar",
    precio: 100,
    precioOriginal: 120,
    descripcion: "Par de bandejas rectangulares de cerámica con motivo de conejos, una con borde rojo y otra con borde azul. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/par-de-bandejas-rectangulares-motivo-con-1.jpg"]
  },

  {
    id: "set-de-6-mugs-plato-y-bandeja-diseno-lim-0236",
    nombre: "Set de 6 mugs, plato y bandeja — diseño limones y limas, asas doradas",
    categoria: "Bazar",
    precio: 250,
    precioOriginal: 300,
    descripcion: "Set combinado de 6 mugs con asa dorada, plato y bandeja rectangular, motivo de limones y limas en tono celeste. Buen estado, ideal para servir café o té con estilo.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-6-mugs-plato-y-bandeja-diseno-lim-1.jpg"]
  },

  {
    id: "bugatti-pasta-pizza-maquina-para-ravioli-7392",
    nombre: "Bugatti Pasta & Pizza — máquina para ravioli",
    categoria: "Bazar",
    precio: 450,
    precioOriginal: 540,
    descripcion: "Máquina manual para hacer ravioles, marca italiana Bugatti, línea Pasta & Pizza. En su caja original. Ideal para los amantes de la pasta casera.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/bugatti-pasta-pizza-maquina-para-ravioli-1.jpg"]
  },

  {
    id: "cuisinart-pasta-maker-maquina-electrica--0270",
    nombre: "Cuisinart Pasta Maker",
    categoria: "Bazar",
    precio: 650,
    precioOriginal: 780,
    descripcion: "Máquina para hacer pasta casera Cuisinart, con accesorios para distintos tipos de corte. En su caja original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/cuisinart-pasta-maker-maquina-electrica--1.jpg"]
  },

  {
    id: "set-pasabahce-basic-12-piezas-6-tazas-6--7395",
    nombre: "Set Pasabahce Basic — 12 piezas (6 tazas + 6 platos de vidrio)",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Set Pasabahce Basic de 12 piezas: 6 tazas de vidrio con asa y 6 platos a juego. NUEVO, en su caja.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-pasabahce-basic-12-piezas-6-tazas-6--1.jpg"]
  },

  {
    id: "set-bugatti-montalatte-y-2-juegos-de-taz-9213",
    nombre: "Set Bugatti — montalatte y 2 juegos de tazas de té (vidrio borosilicato)",
    categoria: "Bazar",
    precio: 350,
    precioOriginal: 420,
    descripcion: "Set de accesorios de vidrio borosilicato marca italiana Bugatti: 1 montalatte y 2 juegos de tazas de té \"hot & cold\". Todo NUEVO, en cajas selladas. Fotos ilustrativas del empaque disponibles; se pueden enviar más fotografías a solicitud.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-bugatti-montalatte-y-2-juegos-de-taz-1.jpg"]
  },

  {
    id: "ana-broennimann-azucarera-y-cremera-sonr-6372",
    nombre: "Ana Broennimann — azucarera y cremera \"Sonrisas de la Tierra\" (caja sellada)",
    categoria: "Bazar",
    precio: 100,
    precioOriginal: 120,
    descripcion: "Azucarera y cremera de la colección exclusiva \"Sonrisas de la Tierra\" de Ana Broennimann para Cemaco Costa Rica. NUEVAS, en caja sellada de fábrica, con etiqueta de precio original.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/ana-broennimann-azucarera-y-cremera-sonr-1.jpg"]
  },

  {
    id: "set-de-cuchillos-profesionales-de-cocina-5547",
    nombre: "Set de cuchillos profesionales de cocina (aprox. 10 piezas, en cajas)",
    categoria: "Bazar",
    precio: 950,
    precioOriginal: 1140,
    descripcion: "Lote de aproximadamente 10 cuchillos de cocina de gama profesional (incluye santoku, chef, deshuesador y utilitarios), cada uno NUEVO, sin usar, en su caja individual sellada. Ideal para quienes cocinan con frecuencia o para regalo. Se vende como lote completo.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-cuchillos-profesionales-de-cocina-1.jpg"]
  },

  {
    id: "taza-mug-floral-amarilla-2665",
    nombre: "4 tazas mug floral amarilla",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 60,
    descripcion: "Taza tipo mug de cerámica, estampado floral en tonos amarillos, ideal para uso diario. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/taza-mug-floral-amarilla-1.jpg"]
  },

  {
    id: "juego-de-te-dorado-floral-0286",
    nombre: "Juego de té dorado floral",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Juego de té en porcelana con delicados detalles dorados y estampado floral. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/juego-de-te-dorado-floral-1.jpg"]
  },

  {
    id: "bandeja-de-bambu-con-barra-metalica-1981",
    nombre: "Servilletero de bambú con barra metálica",
    categoria: "Bazar",
    precio: 100,
    precioOriginal: 120,
    descripcion: "Bandeja de servicio en bambú con barra/asa metálica, práctica para servir bebidas o como pieza decorativa. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/bandeja-de-bambu-con-barra-metalica-1.jpg"]
  },

  {
    id: "tetera-cuadrada-de-porcelana-floral-9192",
    nombre: "Tetera cuadrada de porcelana floral",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Tetera de porcelana, diseño de forma cuadrada poco común, estampado floral. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/tetera-cuadrada-de-porcelana-floral-1.jpg"]
  },

  {
    id: "set-de-4-refractarias-de-vidrio-rectangu-5580",
    nombre: "Set de 4 refractarias de vidrio rectangulares",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Set de 4 refractarias de vidrio templado, forma rectangular, distintos tamaños, aptas para horno y microondas. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-4-refractarias-de-vidrio-rectangu-1.jpg"]
  },

  {
    id: "cremera-de-porcelana-floreada-2800",
    nombre: "Cremera de porcelana floreada",
    categoria: "Bazar",
    precio: 50,
    precioOriginal: 60,
    descripcion: "Cremera de porcelana con estampado floral. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/cremera-de-porcelana-floreada-1.jpg"]
  },

  {
    id: "set-de-4-boles-hondos-conejo-y-flores-9008",
    nombre: "Set de 4 boles hondos, conejo y flores",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Set de 4 boles hondos de cerámica, motivo conejo entre flores, a juego con la bandeja de la misma colección. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-4-boles-hondos-conejo-y-flores-1.jpg"]
  },

  {
    id: "juego-de-te-chino-negro-y-dorado-0279",
    nombre: "Juego de té chino, negro y dorado",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Juego de té chino tradicional, tetera y tazas en acabado negro con detalles dorados. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/juego-de-te-chino-negro-y-dorado-1.jpg"]
  },

  {
    id: "juego-de-te-infantil-diseno-casita-0435",
    nombre: "Juego de té infantil, diseño casita",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Juego de té infantil en cerámica, diseño de casita, perfecto para juego simbólico o para coleccionistas de miniaturas. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/juego-de-te-infantil-diseno-casita-1.jpg"]
  },

  {
    id: "tetera-de-porcelana-fina-hometrends-7675",
    nombre: "Tetera de porcelana fina Hometrends",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Tetera de porcelana fina, marca Hometrends, acabado elegante. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/tetera-de-porcelana-fina-hometrends-1.jpg"]
  },

  {
    id: "tetera-individual-floral-tropical-9875",
    nombre: "Tetera individual floral tropical",
    categoria: "Bazar",
    precio: 100,
    precioOriginal: 120,
    descripcion: "Tetera individual de cerámica, tamaño personal, motivo floral tropical. Ideal para una taza de té a la vez. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/tetera-individual-floral-tropical-1.jpg"]
  },

  {
    id: "azucarera-de-porcelana-floreada-7116",
    nombre: "Azucarera de porcelana floreada",
    categoria: "Bazar",
    precio: 100,
    precioOriginal: 120,
    descripcion: "Azucarera de porcelana con tapa, estampado floral. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/azucarera-de-porcelana-floreada-1.jpg"]
  },

  {
    id: "plato-decorativo-floral-tropical-2877",
    nombre: "4 platos decorativos florales tropicales",
    categoria: "Bazar",
    precio: 350,
    precioOriginal: 120,
    descripcion: "Platos decorativos de cerámica, motivo floral tropical en colores vivos. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/plato-decorativo-floral-tropical-1.jpg"]
  },

  {
    id: "taza-con-plato-floral-amarillo-y-verde-0106",
    nombre: "4 tazas con plato, floral amarillo y verde",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 200,
    descripcion: "4 tazas de té con su plato, estampado floral en tonos amarillo y verde. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/taza-con-plato-floral-amarillo-y-verde-1.jpg"]
  },

  {
    id: "vajilla-azul-y-blanco-motivo-colonial-ca-1257",
    nombre: "Vajilla azul y blanco, motivo colonial Castillo San Felipe (set completo)",
    categoria: "Bazar",
    precio: 600,
    precioOriginal: 720,
    descripcion: "Vajilla completa en cerámica azul y blanco, motivo colonial \"Castillo San Felipe\" (Río Dulce, Izabal). Incluye platos, tazas con plato, plato hondo y piezas de servicio. Buen estado, se vende como lote completo.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/vajilla-azul-y-blanco-motivo-colonial-ca-1.jpg"]
  },

  {
    id: "set-de-te-secret-de-gourmet-8509",
    nombre: "Set de té Secret de Gourmet",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Set de té \"Secret de Gourmet\", ideal para preparar y servir infusiones con estilo. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-te-secret-de-gourmet-1.jpg"]
  },

  {
    id: "set-de-6-vasos-de-cristal-crystalite-boh-6178",
    nombre: "Set de 6 vasos de cristal Crystalite Bohemia",
    categoria: "Bazar",
    precio: 400,
    precioOriginal: 480,
    descripcion: "Set de 6 vasos de cristal genuino, marca checa Crystalite Bohemia, tallado clásico. Buen estado, sin astillas. Cristalería de calidad reconocida internacionalmente.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-6-vasos-de-cristal-crystalite-boh-1.jpg"]
  },

  {
    id: "bandeja-de-porcelana-motivo-conejo-y-flo-3410",
    nombre: "Bandeja de porcelana, motivo conejo y flores",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Bandeja decorativa de porcelana, motivo conejo entre flores, pintada a mano. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/bandeja-de-porcelana-motivo-conejo-y-flo-1.jpg"]
  },

  {
    id: "juego-navideno-san-martin-6959",
    nombre: "Juego navideño San Martín",
    categoria: "Bazar",
    precio: 250,
    precioOriginal: 300,
    descripcion: "Juego de cerámica con motivos navideños, colección \"San Martín\". Ideal para decorar la mesa en la temporada de fin de año. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/juego-navideno-san-martin-1.jpg"]
  },

  {
    id: "tetera-de-ceramica-azul-jaspeada-8518",
    nombre: "Tetera de cerámica azul jaspeada",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Tetera de cerámica con acabado azul jaspeado, ideal para servir o como pieza decorativa de cocina. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/tetera-de-ceramica-azul-jaspeada-2.jpg"]
  },

  {
    id: "set-de-4-platos-cuadrados-izzy-oliver-di-2668",
    nombre: "Set de 4 platos cuadrados Izzy Oliver, diseño pájaros",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Set de 4 platos cuadrados marca Izzy Oliver, estampado de pájaros en tonos vivos. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-4-platos-cuadrados-izzy-oliver-di-2.jpg"]
  },

  {
    id: "tetera-de-vidrio-con-infusor-1935",
    nombre: "Tetera de vidrio con infusor",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Tetera de vidrio resistente al calor con infusor removible en acero inoxidable, ideal para té de hoja suelta o hierbas. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/tetera-de-vidrio-con-infusor-1.jpg"]
  },

  {
    id: "repisa-de-bambu-con-toallero-3594",
    nombre: "Repisa de bambú con toallero",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 240,
    descripcion: "Repisa de bambú con toallero integrado, ideal para organizar cocina o baño. Buen estado, madera en buenas condiciones.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/tetera-de-ceramica-azul-jaspeada-1.jpg","imagenes/repisa-de-bambu-con-toallero-1.jpg"]
  },

  {
    id: "plato-decorativo-floral-amarillo-6981",
    nombre: "Plato decorativo floral amarillo",
    categoria: "Bazar",
    precio: 100,
    precioOriginal: 120,
    descripcion: "Plato decorativo de cerámica, motivo floral en tonos amarillos, ideal para colgar en pared o exhibir en vitrina. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/set-de-4-platos-cuadrados-izzy-oliver-di-1.jpg","imagenes/plato-decorativo-floral-amarillo-1.jpg"]
  },

  {
    id: "4-platos-cuadrados-de-ceramica-diseno-mo-3143",
    nombre: "4 platos cuadrados de cerámica, diseño mosaico floral, colección Ana Broennimann para Cemaco Costa Rica",
    categoria: "Bazar",
    precio: 300,
    precioOriginal: 360,
    descripcion: "Set de 4 platos cuadrados de cerámica, diseño mosaico floral, colección \"Sonrisas de la Tierra\" de Ana Broennimann para Cemaco Costa Rica. NUEVOS, caja sellada.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/4-platos-cuadrados-de-ceramica-diseno-mo-1.jpg"]
  },

  {
    id: "bandeja-rectangular-1-bowl-hondo-cuadrad-8794",
    nombre: "Bandeja rectangular, 1 bowl hondo cuadrado y 1 plato cuadrado, todo blanco liso.",
    categoria: "Bazar",
    precio: 130,
    descripcion: "Set de 3 piezas de cerámica blanca lisa, diseño moderno: 1 bandeja rectangular, 1 bowl hondo cuadrado y 1 plato cuadrado. Combinan con cualquier decoración. Buen estado.",
    estado: "disponible",
    imagenes: ["imagenes/bandeja-rectangular-1-bowl-hondo-cuadrad-1.jpg"]
  },

  {
    id: "tetera-jarra-decorativa-con-detalles-pin-5037",
    nombre: "Tetera/jarra decorativa con detalles pintados a mano.",
    categoria: "Bazar",
    precio: 200,
    descripcion: "Tetera/jarra decorativa de cerámica, diseño floral pastel con detalles pintados a mano (rosa en la tapa). Pieza ideal para té o como elemento decorativo. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/producto-2.jpg"]
  },

  {
    id: "recipiente-de-vidrio-con-tapa-hermetica--0337",
    nombre: "Recipiente de vidrio con tapa hermética (sello al vacío)",
    categoria: "Muebles",
    precio: 100,
    precioOriginal: 150,
    descripcion: "Recipiente de vidrio rectangular con tapa hermética (sistema de sello al vacío), ideal para conservar alimentos frescos por más tiempo. Buen estado.",
    estado: "disponible",
    imagenes: ["imagenes/recipiente-de-vidrio-con-tapa-hermetica--1.jpg"]
  },

  {
    id: "1-campana-de-vidrio-con-base-borde-ondul-0470",
    nombre: "1 campana de vidrio con base, borde ondulado",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 180,
    descripcion: "Campana (cúpula) de vidrio con base, ideal para presentar pasteles, quesos o postres. Diseño clásico con borde ondulado. Buen estado.",
    entrega: "Inmediata",
    estado: "reservado",
    imagenes: ["imagenes/1-campana-de-vidrio-con-base-borde-ondul-1.jpg"]
  },

  {
    id: "2-fuentes-redondas-de-vidrio-templado-co-3236",
    nombre: "2 fuentes redondas de vidrio templado con tapa, tipo Pyrex",
    categoria: "Bazar",
    precio: 150,
    precioOriginal: 190,
    descripcion: "Set de 2 fuentes redondas de vidrio templado con tapa, tipo Pyrex, ideales para horno, refrigerador o para servir en la mesa. Buen estado.",
    estado: "reservado",
    imagenes: ["imagenes/2-fuentes-redondas-de-vidrio-templado-co-1.jpg"]
  },

  {
    id: "9-mini-bowls-decorativos-3-disenos-flora-1622",
    nombre: "9 mini bowls decorativos, 3 diseños florales distintos (3 piezas cada uno), interior celeste/turquesa",
    categoria: "Bazar",
    precio: 200,
    precioOriginal: 250,
    descripcion: "Lote de 9 mini bowls decorativos (3 diseños florales diferentes, 3 piezas cada uno), interior celeste/turquesa. Perfectos para dips, snacks o postres individuales. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/9-mini-bowls-decorativos-3-disenos-flora-1.jpg","imagenes/9-mini-bowls-decorativos-3-disenos-flora-2.jpg","imagenes/9-mini-bowls-decorativos-3-disenos-flora-3.jpg"]
  },

  {
    id: "6-bowls-tazones-hondos-con-estampado-flo-3723",
    nombre: "6 bowls/tazones hondos con estampado floral rojo y azul.",
    categoria: "Bazar",
    precio: 250,
    precioOriginal: 320,
    descripcion: "Set de 6 bowls hondos de cerámica, estampado floral rojo y azul estilo vintage. Ideales para ensaladas, pasta o postres. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/6-bowls-tazones-hondos-con-estampado-flo-1.jpg"]
  },

  {
    id: "2-platos-redondos-medianos-1-plato-con-l-7268",
    nombre: "2 platos redondos medianos, 1 plato con lunares, 1 bandeja rectangular y 1 plato grande — diseños florales variados.",
    categoria: "Bazar",
    precio: 220,
    descripcion: "Set decorativo de 5 platos de cerámica floreados, estilo vintage, diseños variados: 2 platos redondos medianos, 1 plato con lunares, 1 bandeja rectangular y 1 plato grande. Ideales para servir o decorar la mesa. Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/2-platos-redondos-medianos-1-plato-con-l-1.jpg"]
  },

  {
    id: "olla-con-tapa-sarten-grill-redonda-asade-0348",
    nombre: "Olla con tapa + sartén grill redonda + asadera/bandeja rectangular.",
    categoria: "Bazar",
    precio: 450,
    precioOriginal: 550,
    descripcion: "Batería MasterPRO en fundición de aluminio esmaltado negro: olla con tapa, sartén grill redonda y asadera rectangular. Aptas para todo tipo de cocinas (incluida inducción). Buen estado.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/olla-con-tapa-sarten-grill-redonda-asade-1.jpg"]
  },

  {
    id: "wok-antiadherente-28-cm-con-tapa-de-vidr-6802",
    nombre: "Wok antiadherente 28 cm con tapa de vidrio + olla grande con inserto vaporizador + sartén individual.",
    categoria: "Bazar",
    precio: 1000,
    precioOriginal: 1150,
    descripcion: "Batería de cocina MasterChef \"The TV Series\", acero inoxidable premium. Incluye: wok antiadherente 28 cm con tapa de vidrio, olla grande con inserto vaporizador y sartén individual. Todo NUEVO, sin usar, en su empaque de fábrica. Precio: Q1,100 por el lote completo.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/wok-antiadherente-28-cm-con-tapa-de-vidr-1.jpg","imagenes/wok-antiadherente-28-cm-con-tapa-de-vidr-2.jpg","imagenes/wok-antiadherente-28-cm-con-tapa-de-vidr-3.jpg","imagenes/wok-antiadherente-28-cm-con-tapa-de-vidr-4.jpg","imagenes/wok-antiadherente-28-cm-con-tapa-de-vidr-5.jpg"]
  },

  {
    id: "6-piezas-4-sartenes-redondas-antiadheren-6568",
    nombre: "6 piezas: 4 sartenes redondas antiadherentes de distintos tamaños + 2 piezas hondas tipo wok/paellera",
    categoria: "Bazar",
    precio: 700,
    precioOriginal: 770,
    descripcion: "Set de 6 sartenes antiadherentes línea \"Origen\", aluminio forjado con base de cobre y mango ergonómico. Incluye 4 sartenes redondas de distintos tamaños y 2 piezas hondas tipo wok/paellera. Todas NUEVAS, con etiqueta, sin usar.",
    entrega: "Inmediata",
    estado: "reservado",
    imagenes: ["imagenes/6-piezas-4-sartenes-redondas-antiadheren-1.jpg","imagenes/6-piezas-4-sartenes-redondas-antiadheren-2.jpg","imagenes/6-piezas-4-sartenes-redondas-antiadheren-3.jpg"]
  },

  {
    id: "6-piezas-4-sartenes-redondas-antiadheren-6568-copia-8305",
    nombre: "Segundo juego de 6 piezas: 4 sartenes redondas antiadherentes de distintos tamaños + 2 piezas hondas tipo wok/paellera",
    categoria: "Bazar",
    precio: 700,
    precioOriginal: 770,
    descripcion: "Set de 6 sartenes antiadherentes línea \"Origen\", aluminio forjado con base de cobre y mango ergonómico. Incluye 4 sartenes redondas de distintos tamaños y 2 piezas hondas tipo wok/paellera. Todas NUEVAS, con etiqueta, sin usar.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/6-piezas-4-sartenes-redondas-antiadheren-1.jpg","imagenes/6-piezas-4-sartenes-redondas-antiadheren-2.jpg","imagenes/6-piezas-4-sartenes-redondas-antiadheren-3.jpg"]
  },

  {
    id: "4-ollas-de-distintos-tamanos-todas-con-t-8182",
    nombre: "4 ollas de distintos tamaños, todas con tapa de vidrio templado y asas abatibles",
    categoria: "Bazar",
    precio: 700,
    precioOriginal: 800,
    descripcion: "Batería de cocina Percutti, 4 piezas en acero inoxidable con tapas de vidrio templado y asas abatibles (olla pequeña, mediana, grande y extra grande). Buen estado, poco uso. Precio: Q850 por el set completo. Motivo de venta: nos mudamos de país.",
    estado: "disponible",
    imagenes: ["imagenes/4-ollas-de-distintos-tamanos-todas-con-t-1.jpg","imagenes/4-ollas-de-distintos-tamanos-todas-con-t-2.jpg"]
  },

  {
    id: "batidora-de-inmersion-con-varilla-y-cuch-0265",
    nombre: "Batidora de inmersión con varilla y cuchilla en acero inoxidable",
    categoria: "Electrodomésticos",
    precio: 220,
    precioOriginal: 250,
    descripcion: "Batidora de inmersión Oster, función turbo, mango ergonómico, varilla y cuchilla en acero inoxidable. NUEVA, en caja sellada.",
    entrega: "Inmediata",
    estado: "reservado",
    imagenes: ["imagenes/batidora-de-inmersion-con-varilla-y-cuch-1.jpg"]
  },

  {
    id: "wafflera-doble-giratoria-modelo-wmd2008--2309",
    nombre: "Wafflera doble giratoria, modelo WMD2008/WMD201",
    categoria: "Electrodomésticos",
    precio: 450,
    precioOriginal: 500,
    descripcion: "Wafflera doble giratoria Black+Decker (mod. WMD2008/WMD201). NUEVA, sin usar, en caja original. Cocina 2 waffles a la vez con sistema de rotación 360° para un dorado parejo por ambos lados. Precio: Q450. Motivo de venta: nos mudamos de país.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/wafflera-doble-giratoria-modelo-wmd2008--1.jpg"]
  },

  {
    id: "sillon-de-dos-cuerpos-tapizado-en-tela-g-0718",
    nombre: "Sillón de dos cuerpos tapizado en tela gris – Excelente estado",
    categoria: "Muebles",
    precio: 2500,
    precioOriginal: 2900,
    descripcion: "Sillón de dos cuerpos, de diseño contemporáneo, tapizado en tela color gris de alta resistencia. Cuenta con apoyabrazos amplios, estructura robusta y patas de madera, ofreciendo una excelente combinación de confort y durabilidad.\n\nLos almohadones de respaldo y asiento son amplios y muy cómodos, ideales tanto para sala principal como para estudio, apartamento o sala de televisión. Se encuentra en muy buen estado de conservación, sin roturas ni daños visibles, listo para usar.",
    entrega: "En el momento",
    estado: "disponible",
    imagenes: ["imagenes/producto-1.jpg"]
  },

  {
    id: "mesa-auxiliar-decorativa-vintage-industr-7607",
    nombre: "Mesa Auxiliar Decorativa Vintage / Industrial – Excelente Estado",
    categoria: "Bazar",
    precio: 550,
    descripcion: "Mesa auxiliar redonda de metal con acabado vintage en color verde agua y cubierta decorativa de fibra natural.\nIdeal para sala, terraza techada, dormitorio, recibidor o como mesa de apoyo para plantas y decoración.\nSu acabado envejecido forma parte de su estilo y le aporta un diseño muy atractivo.\nSe encuentra en muy buen estado y lista para usar.\nMedidas aproximadas:\nDiámetro: 45 cm\nAltura: 55 cm",
    estado: "disponible",
    imagenes: ["imagenes/mesa-auxiliar-decorativa-vintage-industr-1.jpg"]
  },

  {
    id: "2-juegos-de-cubiertos-home-concept-30-pi-0554",
    nombre: "2 Juegos de Cubiertos Home Concept – 30 piezas c/u – Nuevos",
    categoria: "Bazar",
    precio: 425,
    descripcion: "Se venden dos juegos de cubiertos Home Concept de acero inoxidable.\nCada caja contiene 30 piezas y se encuentra en excelente estado, sin uso.\nIdeales para vivienda, apartamento, casa vacacional o como regalo.\nSe venden juntos (preferentemente)",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/2-juegos-de-cubiertos-home-concept-30-pi-1.jpg"]
  },

  {
    id: "lote-de-canastos-y-cestos-decorativos-de-2533",
    nombre: "Lote de Canastos y Cestos Decorativos de Fibra Natural – Excelente Estado",
    categoria: "Bazar",
    precio: 450,
    descripcion: "Se vende lote completo de canastos y cestos decorativos de excelente calidad y muy poco uso. Ideales para organizar ropa, juguetes, mantas, toallas, revistas o como elementos decorativos en salas, dormitorios, baños y terrazas.\nIncluye diferentes tamaños, modelos con tapa, cestos organizadores, un cesto de bambú para ropa y piezas de fibra natural de estilo contemporáneo.\nTodos se encuentran en muy buen estado de conservación, limpios y listos para usar.\nSe prioriza la venta del lote completo.\n1 cesto blanco de mimbre con tapa.\n2 canastos rectangulares con tapa.\n1 cesto de bambú para ropa.\n1 paragüero/cesto alto de fibra natural.\n2 canastos pequeños de fibra natural (\"Home\").",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/lote-de-canastos-y-cestos-decorativos-de-1.jpg","imagenes/lote-de-canastos-y-cestos-decorativos-de-2.jpg","imagenes/lote-de-canastos-y-cestos-decorativos-de-3.jpg","imagenes/lote-de-canastos-y-cestos-decorativos-de-4.jpg","imagenes/lote-de-canastos-y-cestos-decorativos-de-5.jpg","imagenes/lote-de-canastos-y-cestos-decorativos-de-6.jpg"]
  },

  {
    id: "apple-iphone-13-pro-max-256-gb-sierra-bl-4196",
    nombre: "Apple iPhone 13 Pro Max 256 GB (Sierra Blue)",
    categoria: "Electrodomésticos",
    precio: 4100,
    descripcion: "iPhone 13 Pro Max en excelente estado de funcionamiento y muy bien cuidado.\n* Color Sierra Blue.\n* Pantalla Super Retina XDR de 6.7\".\n* Triple cámara profesional con modo Noche, modo Cine y ProRAW.\n* Face ID.\n* Compatible con redes 5G.\n* Batería con muy buen desempeño (87%, excelente estado).\n* Siempre utilizado con funda y protector.\nEquipo ideal para quien busca un iPhone premium con excelente rendimiento, fotografía de alta calidad y varios años más de actualizaciones de iOS.",
    entrega: "Disponible",
    estado: "disponible",
    imagenes: ["imagenes/apple-iphone-13-pro-max-256-gb-sierra-bl-1.jpg","imagenes/apple-iphone-13-pro-max-256-gb-sierra-bl-2.jpg","imagenes/apple-iphone-13-pro-max-256-gb-sierra-bl-3.jpg"]
  },

  {
    id: "mesa-ratona-mesa-de-centro-grande-de-mad-7495",
    nombre: "Mesa ratona / mesa de centro grande de madera",
    categoria: "Muebles",
    precio: 500,
    descripcion: "Mesa de centro rectangular de madera, amplia y funcional. Diseño sobrio, firme y con excelente superficie de apoyo para sala. El precio es por la mesa grande, las dos mesas pequeñas (que forman parte del juego) Q200 c/u si le interesan las tres.",
    medidas: "Aprox. 130 × 70 × 45 cm",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/mesa-ratona-mesa-de-centro-grande-de-mad-1.jpg","imagenes/mesa-ratona-mesa-de-centro-grande-de-mad-2.jpg","imagenes/mesa-ratona-mesa-de-centro-grande-de-mad-3.jpg"]
  },

  {
    id: "sillon-individual-beige-4027",
    nombre: "Sillón individual beige",
    categoria: "Muebles",
    precio: 700,
    descripcion: "Sillón individual cómodo y elegante, perfecto para sala, dormitorio o rincón de lectura.",
    entrega: "Inmediata",
    estado: "reservado",
    imagenes: ["imagenes/sillon-individual-beige-1.jpg","imagenes/sillon-individual-beige-2.jpg"]
  },

  {
    id: "licuadora-kitchenaid-azul-7433",
    nombre: "Licuadora KitchenAid azul",
    categoria: "Electrodomésticos",
    precio: 950,
    precioOriginal: 1100,
    descripcion: "Licuadora KitchenAid de diseño atractivo y muy buena capacidad. Ideal para smoothies, salsas y uso diario.",
    entrega: "9-10 de septiembre",
    estado: "disponible",
    imagenes: ["imagenes/licuadora-kitchenaid-azul-1.jpg"]
  },

  {
    id: "ecofiltro-blanco-con-base-de-madera-8141",
    nombre: "Ecofiltro blanco con base de madera",
    categoria: "Bazar",
    precio: 150,
    descripcion: "Ecofiltro decorativo y funcional, ideal para agua o bebidas frías. Un detalle práctico y con estilo.",
    entrega: "9-10 de Septiembre",
    estado: "disponible",
    imagenes: ["imagenes/ecofiltro-blanco-con-base-de-madera-1.jpg"]
  },

  {
    id: "plantas-decorativas-varias-3135",
    nombre: "Plantas decorativas varias",
    categoria: "Bazar",
    precio: 350,
    descripcion: "Plantas de interior de gran porte con macetas. Aporta presencia y elegancia a cualquier ambiente. El precio es por cada una de ellas.",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/plantas-decorativas-varias-1.jpg","imagenes/plantas-decorativas-varias-2.jpg","imagenes/plantas-decorativas-varias-3.jpg","imagenes/plantas-decorativas-varias-4.jpg"]
  },

  {
    id: "sillon-ejecutivo-ergonomico-reclinable-n-6869",
    nombre: "Sillón ejecutivo ergonómico reclinable negro",
    categoria: "Muebles",
    precio: 700,
    precioOriginal: 1100,
    descripcion: "Sillón ejecutivo acolchado, cómodo y de gran respaldo. Ideal para oficina o escritorio personal.",
    entrega: "Entrega 9-10 de septiembre",
    estado: "disponible",
    imagenes: ["imagenes/sillon-ejecutivo-ergonomico-reclinable-n-2.jpg","imagenes/sillon-ejecutivo-ergonomico-reclinable-n-3.jpg"]
  },

  {
    id: "escritorio-ejecutivo-de-madera-3438",
    nombre: "Escritorio ejecutivo de madera",
    categoria: "Muebles",
    precio: 1400,
    precioOriginal: 1520,
    descripcion: "Escritorio amplio, moderno y funcional, con muy buena presencia para home office o estudio. Cómodo para trabajar con monitor y laptop.",
    medidas: "180 x 80 x 75 cm",
    entrega: "9-10 de septiembre",
    estado: "disponible",
    imagenes: ["imagenes/escritorio-ejecutivo-de-madera-1.jpg","imagenes/escritorio-ejecutivo-de-madera-2.jpg"]
  },

  {
    id: "impresora-brother-multifuncional-dcp-t51-4626",
    nombre: "Impresora Brother multifuncional DCP‑T510W",
    categoria: "Electrodomésticos",
    precio: 700,
    precioOriginal: 800,
    descripcion: "Impresora multifuncional con sistema de tinta continua, ideal para casa u oficina. Práctica, rendidora y lista para trabajar. Muy buen estado de los cabezales.",
    entrega: "8-9 de septiembre",
    estado: "disponible",
    imagenes: ["imagenes/impresora-brother-multifuncional-dcp-t51-1.jpg"]
  },

  {
    id: "lavadora-frigidaire-de-carga-superior-6072",
    nombre: "Lavadora Frigidaire de carga superior",
    categoria: "Electrodomésticos",
    precio: 1350,
    precioOriginal: 1500,
    descripcion: "Lavadora Frigidaire de carga superior con tapa de vidrio. Gran capacidad, cómoda para uso familiar y práctica para cargas grandes. Capacidad de 20Kg y dos años de uso.",
    entrega: "9-10 de septiembre",
    estado: "reservado",
    imagenes: ["imagenes/lavadora-frigidaire-de-carga-superior-1.jpg","imagenes/lavadora-frigidaire-de-carga-superior-2.jpg"]
  },

  {
    id: "secadora-lg-de-carga-frontal-2910",
    nombre: "Secadora LG de carga frontal",
    categoria: "Electrodomésticos",
    precio: 2700,
    precioOriginal: 3400,
    descripcion: "Secadora LG de carga frontal con panel digital. Equipo amplio y moderno para secado eficiente de ropa en el hogar. Eléctrica 220v y con dos años de uso.",
    entrega: "9-10 de septiembre",
    estado: "disponible",
    imagenes: ["imagenes/secadora-lg-de-carga-frontal-1.jpg","imagenes/secadora-lg-de-carga-frontal-2.jpg"]
  },

  {
    id: "robot-aspirador-con-base-automatica-3195",
    nombre: "Robot Aspirador Roomba con base automática - Poco uso",
    categoria: "Electrodomésticos",
    precio: 1500,
    precioOriginal: 1900,
    descripcion: "Robot aspirador Roomba i3+ con base de carga y depósito automático. Muy cómodo para mantener pisos limpios con mínima intervención diaria. Dos años de uso. Repuestos de regalía.",
    entrega: "Inmediata",
    estado: "reservado",
    imagenes: ["imagenes/robot-aspirador-con-base-automatica-1.jpg","imagenes/robot-aspirador-con-base-automatica-2.jpg","imagenes/robot-aspirador-con-base-automatica-3.jpg"]
  },

  {
    id: "aspiradora-armor-all-para-solidos-y-liqu-0569",
    nombre: "Aspiradora Armor All para sólidos y líquidos",
    categoria: "Electrodomésticos",
    precio: 200,
    precioOriginal: 350,
    descripcion: "Aspiradora compacta Armor All para sólidos y líquidos. Versátil para limpieza doméstica, auto, bodega o áreas utilitarias.",
    entrega: "Inmediata",
    estado: "reservado",
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
    estado: "reservado",
    imagenes: ["imagenes/cafetera-black-decker-programable-1.jpg","imagenes/cafetera-black-decker-programable-2.jpg"]
  },

  {
    id: "hervidor-electrico-de-acero-inoxidable-7946",
    nombre: "Hervidor eléctrico de acero inoxidable",
    categoria: "Electrodomésticos",
    precio: 150,
    precioOriginal: 255,
    descripcion: "Hervidor eléctrico de acero inoxidable con control de temperatura y visor de nivel de agua. Útil, rápido y de diseño compacto.",
    entrega: "8-10 de septiembre",
    estado: "disponible",
    imagenes: ["imagenes/hervidor-electrico-de-acero-inoxidable-1.jpg","imagenes/hervidor-electrico-de-acero-inoxidable-2.jpg"]
  },

  {
    id: "licuadora-personal-nutribullet-1034",
    nombre: "Licuadora personal NutriBullet",
    categoria: "Electrodomésticos",
    precio: 320,
    precioOriginal: 480,
    descripcion: "Licuadora personal NutriBullet compacta con vaso individual transparente. Ideal para batidos, jugos y preparaciones rápidas.",
    entrega: "Inmediata",
    estado: "reservado",
    imagenes: ["imagenes/licuadora-personal-nutribullet-1.jpg","imagenes/licuadora-personal-nutribullet-2.jpg"]
  },

  {
    id: "freidora-de-aire-gourmia-negra-3408",
    nombre: "Freidora de aire Gourmia negra",
    categoria: "Electrodomésticos",
    precio: 200,
    precioOriginal: 230,
    descripcion: "Freidora de aire Gourmia con panel digital táctil y canasta extraíble. Práctica para cocinar más rápido y con menos aceite.",
    entrega: "Inmediata",
    estado: "reservado",
    imagenes: ["imagenes/freidora-de-aire-gourmia-negra-1.jpg","imagenes/freidora-de-aire-gourmia-negra-2.jpg"]
  },

  {
    id: "televisor-tcl-de-pantalla-plana-55-7870",
    nombre: "Televisor TCL de pantalla plana 55´",
    categoria: "Electrodomésticos",
    precio: 1000,
    precioOriginal: 1600,
    descripcion: "Televisor Smart TCL de pantalla plana con patas laterales y marco delgado. Buena opción para sala, dormitorio o estudio; diseño sobrio y fácil de integrar.",
    medidas: "55'",
    entrega: "9-10 de septiembre",
    estado: "reservado",
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
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/mesa-auxiliar-de-mimbre-ratan-1.jpg"]
  },

  {
    id: "mueble-para-tv-rustico-de-madera-8980",
    nombre: "Mueble para TV rústico de madera",
    categoria: "Muebles",
    precio: 950,
    precioOriginal: 1300,
    descripcion: "Mueble para TV de estilo rústico, con repisa central y tres compartimentos inferiores. Ideal para organizar equipos y accesorios.",
    medidas: "Aprox. 155 × 45 × 80 cm",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/mueble-para-tv-rustico-de-madera-1.jpg"]
  },

  {
    id: "consola-de-madera-oscura-con-tres-cajone-9198",
    nombre: "Consola de madera oscura con tres cajones",
    categoria: "Muebles",
    precio: 750,
    precioOriginal: 950,
    descripcion: "Consola de madera oscura con tres cajones y repisa inferior. Elegante, funcional y muy versátil para recibidor, comedor o sala.",
    medidas: "Aprox. 170 × 42 × 85 cm",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/consola-de-madera-oscura-con-tres-cajone-1.jpg","imagenes/consola-de-madera-oscura-con-tres-cajone-2.jpg"]
  },

  {
    id: "juego-de-comedor-completo-6-sillas-y-mes-0322",
    nombre: "Juego de comedor: mesa rectangular + 6 sillas",
    categoria: "Muebles",
    precio: 2300,
    precioOriginal: 2950,
    descripcion: "Juego de comedor completo con mesa rectangular y seis sillas tapizadas. Sobrio, amplio y muy funcional para comedor familiar. Mesa con detalle en uno de los extremos, pero con muy poco uso en general.",
    medidas: "Mesa aprox. 180 × 100 × 76 cm; sillas aprox. 45 × 50 × 95 cm",
    entrega: "Inmediata",
    estado: "reservado",
    imagenes: ["imagenes/producto-5.jpg","imagenes/juego-de-comedor-mesa-rectangular-6-sill-1.jpg"]
  },

  {
    id: "espejo-de-pie-0374",
    nombre: "Espejo de pie ovalado con marco negro",
    categoria: "Muebles",
    precio: 300,
    precioOriginal: 380,
    descripcion: "Espejo de pie con marco negro y diseño ovalado. Ideal para dormitorio, vestidor o recibidor; aporta amplitud y estilo.",
    medidas: "Aprox. 165 × 55 × 35 cm",
    entrega: "9-10 de septiembre",
    estado: "reservado",
    imagenes: ["imagenes/producto-3.jpg"]
  },

  {
    id: "divan-de-alta-categoria-5318",
    nombre: "Sofá / diván rojo de 3 plazas",
    categoria: "Muebles",
    precio: 1500,
    precioOriginal: 2130,
    descripcion: "Sofá tipo diván de tres plazas, tapizado en tono rojo con diseño clásico. Pieza cómoda y con carácter para sala o estudio.",
    medidas: "Aprox. 210 × 85 × 80 cm",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/divan-de-alta-categoria-1.jpg"]
  },

  {
    id: "sofa-tres-plazas",
    nombre: "Sofá de 3 plazas",
    categoria: "Muebles",
    precio: 2000,
    precioOriginal: 3200,
    descripcion: "Tela gris, 2 años de uso, excelente estado. Cojines incluidos.",
    medidas: "210 × 90 × 85 cm",
    entrega: "Inmediata",
    estado: "disponible",
    imagenes: ["imagenes/sofa-de-3-plazas-1.jpg","imagenes/sofa-de-3-plazas-2.jpg","imagenes/sofa-de-3-plazas-3.jpg"]
  }
];
