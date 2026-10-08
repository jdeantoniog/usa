/* =============================================================
   CUMPLEAÑOS
   Una línea por persona:  ["MM-DD", "Nombre"],
   - Mes y día con dos cifras: "03-11", no "3-11".
   - Todas las líneas llevan coma al final (la última también vale).
   - Opcional, al final: { avisar: false } para no avisar los días previos;
     { texto: "..." } y { lista: "..." } para cambiar el mensaje del día y el texto del calendario.
   - Los cumpleaños se ven en las dos zonas horarias: desde que empieza el día en el país
     hasta que acaba en EE. UU.
   Cada cumpleaños sale en el calendario, en "Próximas fechas",
   en la cuenta atrás y con un mensaje y confeti ese día.
   ============================================================= */

window.CUMPLES = [
  // Enero
  ["01-03", "Elena"],
  ["01-14", "Rubén"],
  ["01-23", "Patricia"],
  ["01-24", "Mamá"],
  ["01-27", "Juane"],
  ["01-30", "Vanessa"],
  // Febrero
  ["02-28", "Carlota", { avisar: false, texto: "¡Feliz cumpleaños Carlotilla!", lista: "Tu cumpleaños" }],
  // Abril
  ["04-05", "Celia"],
  // Mayo
  ["05-13", "Renieblas"],
  ["05-16", "Valeria"],
  ["05-20", "Jordi"],
  // Junio
  ["06-08", "Clara Blanco"],
  // Julio
  ["07-07", "Tito"],
  ["07-17", "Sara"],
  ["07-18", "Javier y Nacho"],
  ["07-23", "Mario"],
  // Septiembre
  ["09-10", "Fernon y Gorka"],
  ["09-27", "Belén"],
  // Octubre
  ["10-03", "Papá y Vero"],
  // Noviembre
  ["11-04", "Felipe"],
  ["11-14", "Ernesto"],
  ["11-17", "Blanco"],
  ["11-19", "Soni"],
  // Diciembre
  ["12-02", "Carreira"],
  ["12-08", "Carlota Leones"],
];
