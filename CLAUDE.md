# Baekho Doyang · App de gestión

PWA para móvil para gestionar los alumnos y los cobros de Baekho Doyang, escuela de artes marciales (Avenida de Adolfo Suárez, 50, Dos Hermanas, Sevilla · Tel. 635 576 114). La desarrolla el usuario; es una demo para presentar a la escuela, pendiente de que acepten el presupuesto.

## Estado actual
- `index.html`: prototipo en un solo archivo (HTML + CSS + JS, sin compilación). Datos ficticios generados con semilla fija y guardados en `localStorage` (clave `bk-gestion-demo-v2`).
- PDF del recibo con jsPDF 2.5.1 (cdnjs). Se envía con `navigator.share` (archivos) y, si no se puede, se descarga.
- `manifest.webmanifest` + `sw.js` para instalarla como app. Sube `CACHE` en `sw.js` al cambiar archivos.
- Publicada con GitHub Pages desde `main` (raíz). También hay una copia como artifact: https://claude.ai/artifact/BYQoJ5xGWEyPfetQQ2QA9n
- `.claude/launch.json`: servidor local en el puerto 8766.

## Reglas de negocio
- Disciplinas: Hapkido Jin Jung Kwan, Taekwondo, Defensa personal para mujeres, Wing Fight, Kum Moo Yeh (espada y arco).
- Dos tatamis; clases de 1 h, dos días a la semana: lunes y miércoles o martes y jueves. El horario de la demo es inventado.
- Mensualidad: 40 € por alumno. Hermanos sin descuento. Un recibo por familia y cobro, con una línea por alumno y mes.
- Plazo de pago: del día 1 al 5 (configurable). Desde el día 6, «atrasado» y recordatorio por WhatsApp.
- Pago en efectivo o Bizum (por confirmar con la escuela). Recibos numerados de forma correlativa por año (AAAA-0001). No se borran; si hay un error, se anulan.
- Cinturones: blanco, amarillo, naranja, verde, azul, rojo, negro (Hapkido y Taekwondo).

## Pendiente si aceptan el presupuesto
- NIF del titular en el recibo y número de Bizum en los recordatorios.
- Cobro de la matrícula y de la licencia federativa (campeonatos).
- Horario real y lista real de alumnos (solo en la versión con servidor).
- Versión real: backend en la UE, autenticación, varios dispositivos y copias de seguridad.

## Diseño
- Colores del emblema: negro #0A0A0B, dorado #E3C73E, rojo #EF2B2F, azul #2F5BC4, blanco. Estilo oscuro.
- Tipografías: Black Han Sans (títulos), Barlow y Barlow Condensed (texto).
- Los importes acumulados y pendientes arrancan ocultos (botón del ojo).

## Protección de datos (RGPD/LOPDGDD)
- Datos de menores: lo mínimo necesario, sin datos de salud, consentimiento firmado por la familia.
- Nunca subir datos reales al repositorio.
