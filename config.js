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

  /* ---------- Mensajes especiales (sustituyen a la frase del día) ----------
     fecha: "MM-DD"       -> se repite cada año
     fecha: "AAAA-MM-DD"  -> solo ese día concreto
     regla: festivos que cambian de día cada año
            { mes, diaSemana (0 domingo, 1 lunes ... 6 sábado), orden (1 a 5, o -1 = último) }
     zona:  "westbranch" (por defecto), "madrid" o "ambas".
            "ambas": se ve desde que empieza el día en Madrid (18:00 del día anterior
            en West Branch) hasta que acaba en West Branch.
     lista: texto para "Próximas fechas" (si no se pone, no aparece en la lista).
     avisar: true -> aviso arriba los días previos (ver avisoPrevioDias).
     confeti: true -> confeti en el aviso grande de ese día.
     nombre: cómo aparece en la cuenta atrás (si no, se usa "lista" o el texto).          */
  avisoPrevioDias: 3,
  // Aviso grande a pantalla completa al abrir la página en un día con mensaje especial
  aviso: { activo: true, segundos: 5 },
  mensajesEspeciales: [
    { fecha: "01-01", nombre: "Año Nuevo", texto: "¡Feliz Año Nuevo! Un beso cariño, ¡qué pena que no estés aquí!" },
    { fecha: "01-06", nombre: "Reyes Magos", texto: "¡Felices Reyes Magos!" },
    { fecha: "02-28", texto: "¡Feliz cumpleaños Carlotilla!", lista: "Tu cumpleaños", confeti: true },
    { fecha: "04-05", texto: "¡Cumpleaños de Celia!", zona: "ambas", lista: "Cumpleaños de Celia", avisar: true, confeti: true },
    { fecha: "05-16", texto: "¡Cumple de Yeya!", zona: "ambas", lista: "Cumpleaños de Yeya", avisar: true, confeti: true },
    { fecha: "07-18", texto: "¡Cumple de papi!", zona: "ambas", lista: "Cumpleaños de papi", avisar: true, confeti: true },
    { fecha: "09-27", texto: "¡Felicita a mamá!", zona: "ambas", lista: "Cumpleaños de mamá", avisar: true, confeti: true },
    { fecha: "12-25", nombre: "Navidad", texto: "¡Feliz Navidad Carlotis! ¡Te quiero cariño!" },
    { fecha: "2027-06-20", texto: "¡Hoy vuelves a casa! Buen viaje, cariño. ¡Te esperamos con los brazos abiertos!", lista: "Vuelta a casa" },
    // Tercer lunes de febrero (en 2027 cae el 15)
    { regla: { mes: 2, diaSemana: 1, orden: 3 }, nombre: "Presidents' Day", texto: "¡Día de los Presidentes! Jajaja, ¡qué raros son!" },
    // Cuarto jueves de noviembre (en 2026 cae el 26)
    { regla: { mes: 11, diaSemana: 4, orden: 4 }, nombre: "Thanksgiving", texto: "¡Feliz Día de Acción de Gracias! Que pases una velada inolvidable dando gracias en familia." }
  ],

  /* ---------- Cuenta atrás (al final de la página) ----------
     Muestra todas las fechas de mensajesEspeciales que caen dentro de maxDias. */
  cuentaAtras: { maxDias: 365 },

  /* ---------- Palabras de la estación y vocabulario de high school ----------
     Cuántas se muestran cada día (rotan solas a medianoche de West Branch). */
  palabrasPorDia: 6,

  /* ---------- Horas de luz (línea antes de "Próximos días") ---------- */
  luz: { nombre: "West Branch", lat: 44.2764, zonaHoraria: "America/Detroit" },

  /* ---------- Vuelta a España ---------- */
  viaje: {
    texto: "Vuelta a España",
    // Día de salida de España. Inicio del cálculo del %.
    fechaLlegada: "2026-08-18",
    fechaVuelta: "2027-06-20",
    fechaAproximada: false         // muestra "aprox." junto a la fecha
  },

  /* ---------- Auroras boreales ----------
     Se usa el índice Kp máximo previsto para la noche (NOAA).
     kpPosible: Kp a partir del cual se ven en el horizonte norte.
     Para West Branch (unos 44° N) el valor razonable es 5.          */
  auroras: {
    nombre: "West Branch",
    lat: 44.2764, lon: -84.2386,
    zonaHoraria: "America/Detroit",
    kpPosible: 5
  },

  /* ---------- Índice UV por hora y calidad del aire (un bloque por lugar) ----------
     Las horas están centradas en el mediodía solar de cada sitio:
     West Branch hacia las 13:30 y Madrid hacia las 14:15 (horario de verano). */
  uv: [
    {
      nombre: "West Branch",
      lat: 44.2764, lon: -84.2386,
      zonaHoraria: "America/Detroit",
      horaInicio: 10, horaFin: 17
    },
    {
      nombre: "Madrid (Ciudad Lineal)",
      lat: 40.4466, lon: -3.6510,
      zonaHoraria: "Europe/Madrid",
      horaInicio: 11, horaFin: 18
    }
  ],

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

  /* ---------- Previsión detallada (una tarjeta por lugar, en este orden) ----------
     avisosOficiales: true  -> avisos del National Weather Service (solo EE. UU.).
     Solo un lugar debería tenerlo activado.                                    */
  detalles: [
    {
      nombre: "West Branch",
      lat: 44.2764, lon: -84.2386,
      zonaHoraria: "America/Detroit",
      unidad: "celsius",
      mostrarAmbasUnidades: true,
      dias: 3,
      avisosOficiales: true
    },
    {
      nombre: "Madrid (Ciudad Lineal)",
      lat: 40.4466, lon: -3.6510,
      zonaHoraria: "Europe/Madrid",
      unidad: "celsius",
      mostrarAmbasUnidades: false,
      dias: 3,
      avisosOficiales: false
    }
  ],

  /* ---------- Tiempo: columna izquierda ---------- */
  espana: {
    titulo: "España",
    zonaHoraria: "Europe/Madrid",
    ciudadReloj: "Madrid",
    unidad: "celsius",             // "celsius" o "fahrenheit"
    lugares: [
      { nombre: "Madrid",     lat: 40.4168, lon: -3.7038 },
      { nombre: "Estepona",   lat: 36.4276, lon: -5.1463 },
      { nombre: "Isla Canela", lat: 37.1765, lon: -7.3410 },
      { nombre: "Barcelona",  lat: 41.3874, lon:  2.1686 },
      // Estación de esquí (cota media). Para el pueblo de Taüll usa lat: 42.5197, lon: 0.8486
      { nombre: "Boí Taüll",  lat: 42.4770, lon:  0.8780 }
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
