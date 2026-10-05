# Inicio de Carlota

Página de inicio estática: hora en Madrid y West Branch, conversor EUR/USD y el tiempo en España y EE. UU.

## Archivos

| Archivo | Para qué sirve | ¿Se edita? |
|---|---|---|
| `index.html` | La página | No hace falta |
| `config.js` | Ciudades, títulos, zonas horarias, tasa de respaldo | Sí |

## Publicar en GitHub Pages

1. Crea un repositorio nuevo (por ejemplo `inicio-carlota`). Con cuenta gratuita debe ser **público**.
2. Sube `index.html` y `config.js` a la raíz del repositorio (botón *Add file > Upload files*).
3. Ve a *Settings > Pages*. En *Build and deployment*, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)` y pulsa *Save*.
4. En 1–2 minutos estará en `https://TU-USUARIO.github.io/inicio-carlota/`.
5. En el iPhone, abre esa dirección en Safari, pulsa *Compartir > Añadir a pantalla de inicio*.

## Cambiar ciudades

Edita `config.js` directamente en GitHub (icono del lápiz). Cada lugar es una línea:

```js
{ nombre: "Boston", lat: 42.3601, lon: -71.0589 },
```

- El orden de la lista es el orden en pantalla.
- Coordenadas: Google Maps, clic derecho sobre el punto, copiar.
- Si la página queda en blanco tras un cambio, falta una coma o una comilla.
- GitHub Pages puede tardar hasta 10 minutos en mostrar los cambios por caché.

## Fuentes de datos

- Tiempo: Open-Meteo (sin clave, gratuito para uso no comercial).
- Cambio: tipo de referencia diario del BCE vía Frankfurter; si falla, ExchangeRate-API; si ambos fallan, `tasaRespaldo` de `config.js` (aparece en rojo).
