/* =============================================================
   CONFIGURACIÓN DE LA PÁGINA
   Edita solo este archivo para cambiar ciudades, fechas o textos.
   - El orden de cada lista es el orden en pantalla.
   - Coordenadas: Google Maps, clic derecho sobre el punto, copiar.
   - Fechas siempre en formato "AAAA-MM-DD".
   - Respeta comas y comillas: un error aquí deja la página en blanco.
   ============================================================= */

window.CONFIG = {
  titulo: "Inicio",   // solo se ve en la pestaña y en el icono de la pantalla de inicio

  /* ---------- Vuelta a España ---------- */
  viaje: {
    texto: "Vuelta a España",
    // Día de salida de España. Inicio del cálculo del %.
    fechaLlegada: "2026-08-18",
    fechaVuelta: "2027-06-20",
    fechaAproximada: false         // muestra "aprox." junto a la fecha
  },

  /* ---------- Divisa ---------- */
  divisa: {
    base: "EUR",
    destino: "USD",
    // Solo se usa si la API de cambio no responde. Revísala de vez en cuando.
    tasaRespaldo: 1.15
  },

  /* ---------- Cuenta en tienda o restaurante ---------- */
  cuenta: {
    impuestoVentas: 6,             // % impuesto sobre ventas en Michigan
    propinas: [0, 10, 15, 20],     // botones de propina en %
    propinaPorDefecto: 15
  },

  /* ---------- Lugar con previsión detallada y avisos oficiales ---------- */
  detalle: {
    nombre: "West Branch",
    lat: 44.2764,
    lon: -84.2386,
    zonaHoraria: "America/Detroit",
    dias: 3
  },

  /* ---------- Tiempo: columna izquierda ---------- */
  espana: {
    titulo: "España",
    zonaHoraria: "Europe/Madrid",
    ciudadReloj: "Madrid",
    unidad: "celsius",             // "celsius" o "fahrenheit"
    lugares: [
      { nombre: "Madrid",                 lat: 40.4168, lon: -3.7038 },
      { nombre: "Barcelona",              lat: 41.3874, lon:  2.1686 },
      { nombre: "Santiago de Compostela", lat: 42.8782, lon: -8.5448 },
      { nombre: "Valencia",               lat: 39.4699, lon: -0.3763 }
    ]
  },

  /* ---------- Tiempo: columna derecha ---------- */
  usa: {
    titulo: "Estados Unidos",
    zonaHoraria: "America/Detroit",
    ciudadReloj: "West Branch",
    unidad: "celsius",
    mostrarAmbasUnidades: true,    // muestra también °F en pequeño
    lugares: [
      { nombre: "West Branch, MI", lat: 44.2764, lon: -84.2386 },
      { nombre: "Detroit",         lat: 42.3314, lon: -83.0458 },
      { nombre: "Chicago",         lat: 41.8781, lon: -87.6298 },
      { nombre: "Nueva York",      lat: 40.7128, lon: -74.0060 },
      { nombre: "Los Ángeles",     lat: 34.0522, lon: -118.2437 }
    ]
  },

  /* ---------- Festivos y fechas señaladas ----------
     pais: "ES" (España), "US" (Estados Unidos) u "Otro" (personales, avisos).
     Puedes añadir cumpleaños o fechas familiares con pais: "Otro".        */
  mostrarFechas: 6,
  fechas: [
    { fecha: "2026-10-12", pais: "US", nombre: "Columbus Day" },
    { fecha: "2026-10-12", pais: "ES", nombre: "Fiesta Nacional" },
    { fecha: "2026-10-25", pais: "Otro", nombre: "Cambio de hora en España: 5 h de diferencia hasta el 1 nov" },
    { fecha: "2026-10-31", pais: "US", nombre: "Halloween (no festivo)" },
    { fecha: "2026-11-01", pais: "Otro", nombre: "Cambio de hora en EE. UU.: vuelven a ser 6 h" },
    { fecha: "2026-11-01", pais: "ES", nombre: "Todos los Santos" },
    { fecha: "2026-11-11", pais: "US", nombre: "Veterans Day" },
    { fecha: "2026-11-26", pais: "US", nombre: "Thanksgiving" },
    { fecha: "2026-12-06", pais: "ES", nombre: "Día de la Constitución" },
    { fecha: "2026-12-08", pais: "ES", nombre: "Inmaculada Concepción" },
    { fecha: "2026-12-25", pais: "US", nombre: "Christmas" },
    { fecha: "2026-12-25", pais: "ES", nombre: "Navidad" },
    { fecha: "2027-01-01", pais: "US", nombre: "New Year's Day" },
    { fecha: "2027-01-01", pais: "ES", nombre: "Año Nuevo" },
    { fecha: "2027-01-06", pais: "ES", nombre: "Reyes" },
    { fecha: "2027-01-18", pais: "US", nombre: "Martin Luther King Jr. Day" },
    { fecha: "2027-02-15", pais: "US", nombre: "Presidents' Day" },
    { fecha: "2027-03-14", pais: "Otro", nombre: "Cambio de hora en EE. UU.: 5 h de diferencia hasta el 28 mar" },
    { fecha: "2027-03-26", pais: "ES", nombre: "Viernes Santo" },
    { fecha: "2027-03-28", pais: "Otro", nombre: "Cambio de hora en España: vuelven a ser 6 h" },
    { fecha: "2027-05-01", pais: "ES", nombre: "Fiesta del Trabajo" },
    { fecha: "2027-05-31", pais: "US", nombre: "Memorial Day" }
  ]
};
