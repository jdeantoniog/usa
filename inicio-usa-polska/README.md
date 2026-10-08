# Inicio (versión EE. UU. + Polonia, en polaco)

Ciudad provisional: **Varsovia**. Para cambiarla, en `config.js` > `pais`: `ciudadReloj` y `tiempo` (nombre y coordenadas). En Polonia los festivos son nacionales: no hay que tocarlos. Incluye la Nochebuena (Wigilia), festivo desde 2025. El convertidor usa złotych (PLN).

Textos, frases, 2.000 expresiones (inglés-polaco), imieniny (onomásticas, muy importantes en Polonia) y festivos en polaco.

Página de inicio estática. Una sola `index.html` para todas las versiones: lo que cambia entre países está en `config.js`.

## Orden en pantalla

1. Frase del día (o mensaje especial y aviso de cumpleaños próximos).
2. Banderas del país y de EE. UU. con hora, ciudad, día y tiempo actual; en medio, la diferencia horaria.
3. Tiempo en West Branch y en el lugar del país: hoy, hora a hora y 6 días desde mañana.
4. Calendario: festivos de los dos países, cumpleaños, calendario escolar de Ogemaw Heights, eventos (Lions, NFL, EE. UU.), días señalados, cambios de hora y santoral.
5. Próximas fechas con cuenta atrás (los partidos de los Lions solo salen en el calendario).
6. Conversor: dólares frente a la moneda del país (principal) y botones para millas, grados, libras, onzas, pulgadas y mph.
7. Sol y aire: índice UV por hora (centrado solo en el pico del día) y calidad del aire de los dos lugares.
8. Expresiones útiles: 20 al día, modo repaso y marcado de aprendidas.

El orden de 4 a 8 se cambia en `config.js` > `ordenSecciones`; la sección que se quite de la lista no se muestra.

## Archivos

| Archivo | Para qué sirve | ¿Se edita? |
|---|---|---|
| `index.html` | La página (igual en todas las versiones) | No |
| `config.js` | País, lugares del tiempo, festivos, señalados, escolar, eventos | Sí |
| `cumples.js` | Cumpleaños: `["MM-DD", "Nombre"],` | Sí |
| `palabras.js` | Frases del día y 2.000 expresiones | Rara vez |
| `santoral.js` | Santoral (tradición española) | Rara vez |
| `idioma.js` | Textos de la página en otro idioma (vacío en la versión española) | Solo al traducir |

## Varias versiones y último país visto

Cada versión vive en su propio repositorio del mismo usuario de GitHub. Hay tres:

| Repositorio | Contenido |
|---|---|
| `inicio` | Entrada común: abre la última versión vista en ese navegador; si no hay, muestra la lista. Con `?elegir` al final, siempre muestra la lista. |
| `inicio-usa-espana` | Versión EE. UU. + España (español) |
| `inicio-usa-italia` | Versión EE. UU. + Italia (italiano) |
| `inicio-usa-brasil` | Versión EE. UU. + Brasil (portugués) |
| `inicio-usa-polska` | Versión EE. UU. + Polonia (polaco) |

- Al tocar la bandera del país (la que lleva el símbolo ⇄) aparece el menú para cambiar de versión. La lista sale de `versiones` en `config.js`.
- Para cambiar los nombres de los repositorios hay que tocar la `url` de `versiones` en cada `config.js` y `VERSIONES` en el `index.html` de `inicio`.
- En el iPhone, añade a la pantalla de inicio la dirección de `inicio`, no la de una versión. Las apps de la pantalla de inicio guardan sus datos aparte de Safari, y así el último país visto se recuerda dentro de la misma app.

## Crear otra versión

1. Copia la carpeta entera.
2. En `config.js` cambia `version` (por ejemplo `"usa-it"`) y el bloque `pais`: nombre, `bandera` (`"IT"`, `"BR"`, `"PL"` o `"ES"`), ciudad, zona horaria, lugar del tiempo, `moneda` (EUR, BRL, PLN), `festivosOnline` (país y región) y `senalados`.
3. Borra `festivos` y `fuenteOficial` si no vas a cargar festivos oficiales a mano: se toman de Nager.Date y se marcan como pendientes de confirmar.
4. `santoral.js`, `palabras.js` (campo con el código del idioma: `pt`, `pl`) e `idioma.js` (textos de la página, con `locale`) van en el idioma de la versión. La italiana sirve de plantilla.
5. Añade la versión a `versiones` en todos los `config.js` y a `VERSIONES` en la entrada común.
6. Publica en un repositorio distinto. `index.html` es el mismo en todas las versiones.

## Fuentes online y respaldo

| Dato | Fuente | Si falla |
|---|---|---|
| Tiempo | Open-Meteo | Última previsión guardada en el navegador |
| Festivos de EE. UU. (federales + Michigan) | Nager.Date | Copia guardada (7 días) o reglas de `festivosHabituales` |
| Festivos del país | `config.js` si el año está cargado; si no, Nager.Date | Copia guardada o `festivosHabituales` (previstos) |
| Tipo de cambio | BCE vía Frankfurter; si falla, ExchangeRate-API | Última tasa guardada; si no hay, `moneda.tasaRespaldo` (en rojo) |
| Índice UV y calidad del aire | Open-Meteo | Últimos datos guardados |
| Partidos de los Lions | TheSportsDB (clave gratuita 123), cada 12 h | Copia guardada o los de `config.js` |
| Cambios de hora | Calculados por la página | No dependen de internet |

La caché se guarda con el prefijo `inicio:<version>:`. Así, las versiones publicadas en el mismo usuario de GitHub no se mezclan. Las expresiones aprendidas sí se comparten entre versiones.

## Mantenimiento (la página avisa en rojo)

- Festivos oficiales de España del año en curso, y desde octubre los del siguiente (BOCM).
- Calendario escolar de Ogemaw Heights sin fechas futuras.
- Sin eventos futuros en `config.js`.
- De junio a septiembre, sin partidos de la nueva temporada.

## Publicar en GitHub Pages

Sube los cinco archivos a la raíz del repositorio. Después ve a Settings > Pages > Deploy from a branch, elige `main` y `/ (root)`. La página tarda hasta 10 minutos en reflejar cambios. Con cuenta gratuita, el repositorio es público: `cumples.js` y `config.js` los puede ver cualquiera que tenga el enlace.
