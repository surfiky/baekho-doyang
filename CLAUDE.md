# Baekho Doyang · App de gestión

PWA para móvil para gestionar los alumnos y los cobros de Baekho Doyang, escuela de artes marciales (Avenida de Adolfo Suárez, 50, Dos Hermanas, Sevilla · Tel. 635 576 114). La desarrolla el usuario; es una demo para presentar a la escuela, pendiente de que acepten el presupuesto.

## Estado actual
- `index.html`: página de presentación para el cliente, con capturas de `img/capturas/` y vista previa `img/og.jpg` para WhatsApp. Si cambia la app, regenera las capturas (Playwright, 390x844, escala 2, pasadas a WebP de 600 px de ancho).
- `app/index.html`: la app, prototipo en un solo archivo (HTML + CSS + JS, sin compilación). Datos ficticios generados con semilla fija y guardados en `localStorage` (clave `bk-gestion-demo-v4`).
- PDF del recibo con jsPDF 2.5.1 (cdnjs). Se envía con `navigator.share` (archivos) y, si no se puede, se descarga.
- `app/manifest.webmanifest` + `app/sw.js` para instalarla como app. Sube `CACHE` en `sw.js` al cambiar archivos.
- Publicada con GitHub Pages desde `main` (raíz). También hay una copia como artifact: https://claude.ai/artifact/BYQoJ5xGWEyPfetQQ2QA9n
- `.claude/launch.json`: servidor local en el puerto 8766.
- `analitica.js` (raíz, cargado por la presentación y la app): visitas con Umami Cloud, sin cookies. Website ID ya configurado. Eventos: secciones vistas, tiempo (30 s, 2 min, 5 min), clics en la demo y acciones dentro de la app (cobro, PDF, alta…). `?yo` excluye las visitas del usuario.

## Reglas de negocio
- Disciplinas: Hapkido Jin Jung Kwan, Taekwondo, Defensa personal para mujeres, Wing Fight, Kum Moo Yeh (espada y arco).
- Dos tatamis; cada alumno va dos días a la semana: lunes y miércoles o martes y jueves. Horario real (cartel de la escuela), en `CLASES` de `app/index.html`:
  - L y X: Tatami 1: Baekids 17:00–18:00 (5-9 años), Wing Fight 20:30–21:30 (desde 14). Tatami 2: Hapkido infantil 17:00–18:00 (8-9), Hapkido juvenil 18:00–19:00 (10-13), Hapkido adultos 20:30–22:00 (desde 14).
  - M y J: Tatami 1: Hapkido adultos 9:30–11:00, Hapkido infantil 17:00–18:00. Tatami 2: Taekwondo infantil 17:00–18:00 (5-9), Hapkido juvenil 18:00–19:00, Hapkido adultos 19:00–20:30.
  - Defensa personal para mujeres: cursos puntuales, fuera del horario fijo. Kum Moo Yeh no aparece en el cartel (por confirmar).
- Mensualidad: 40 € por alumno. Hermanos sin descuento. Quien se da de alta este mes no aparece como atrasado ese mes.
- Matrícula (al dar de alta) y licencia federativa (por temporada, para campeonatos): las pagan las familias, cada una con su recibo. Importes de ejemplo en Ajustes (30 € y 45 €). Un recibo por familia y cobro, con una línea por alumno y mes.
- Plazo de pago: del día 1 al 5 (configurable). Desde el día 6, «atrasado» y recordatorio por WhatsApp.
- Pago en efectivo o Bizum (por confirmar con la escuela). Recibos numerados de forma correlativa por año (AAAA-0001). No se borran; si hay un error, se anulan.
- Cinturones: blanco, amarillo, naranja, verde, azul, rojo, negro (Hapkido y Taekwondo).

## Pendiente si aceptan el presupuesto
- NIF del titular en el recibo y número de Bizum en los recordatorios.
- Importes reales de la matrícula y de la licencia federativa.
- Lista real de alumnos (solo en la versión con servidor).
- Versión real: backend en la UE, autenticación, varios dispositivos y copias de seguridad.

## Propuesta comercial (en la presentación)
- App: 800 € + IVA. App + web: 1.150 € + IVA. Incluye 1 mes de ajustes y corrección de errores.
- No incluido: dominio, servidor de pago si hace falta, cambios posteriores, API de WhatsApp Business.
- Sin forma de pago ni validez de la oferta (decisión del usuario). La presentación lleva `noindex`.

## Diseño
- Colores del emblema: negro #0A0A0B, dorado #E3C73E, rojo #EF2B2F, azul #2F5BC4, blanco. Estilo oscuro.
- Tipografías: Black Han Sans (títulos), Barlow y Barlow Condensed (texto).
- Los importes acumulados y pendientes arrancan ocultos (botón del ojo).

## Protección de datos (RGPD/LOPDGDD)
- Datos de menores: lo mínimo necesario, sin datos de salud, consentimiento firmado por la familia.
- Nunca subir datos reales al repositorio.
