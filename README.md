# Baekho Doyang · App de gestión

**Presentación y demo:** https://surfiky.github.io/baekho-doyang/ (la demo está en [`/app/`](https://surfiky.github.io/baekho-doyang/app/)).

Prototipo de app para móvil para gestionar los alumnos y los cobros de **Baekho Doyang**, escuela de artes marciales en Dos Hermanas (Sevilla): Hapkido Jin Jung Kwan, Taekwondo, Defensa personal para mujeres, Wing Fight y Kum Moo Yeh.

> **Demo con datos ficticios.** Alumnos, familias, teléfonos y horario son inventados. Los datos se guardan solo en el navegador del móvil que la abre.

## Qué hace

- **Inicio:** cobros del mes (efectivo y Bizum), alumnos pagados, atrasados y en plazo, familias a las que recordar el pago y clases del día.
- **Cobros:** quién ha pagado y quién no en cada mes. El plazo es del día 1 al 5; desde el día 6, el que no ha pagado aparece como atrasado.
  - Un cobro agrupa todos los meses pendientes de la familia, con todos los hermanos en el mismo recibo. También se puede adelantar el mes siguiente.
  - Se elige **efectivo o Bizum** y se genera un **recibo con número correlativo** (2026-0001, 2026-0002…).
- **Recibo en PDF** con el emblema, la dirección y el teléfono. Se envía por WhatsApp desde el menú de compartir del móvil, se descarga o se manda como texto.
- **Recordatorios por WhatsApp** con el mensaje ya escrito: meses pendientes e importe.
- **Alumnos:** ficha con la clase, el horario, el **cinturón**, el contacto, los hermanos, los meses pagados del curso y los recibos. Altas y bajas.
- **Horario:** los dos tatamis lado a lado (lunes y miércoles, martes y jueves), con los alumnos de cada clase y su estado de pago.
- **Ocultar importes:** el botón del ojo de la cabecera. Los importes arrancan siempre ocultos, por si se abre la app delante de un alumno o de una familia.

## Aclaraciones para la escuela

- **Mensualidad:** 40 € por alumno, dos días a la semana (lunes y miércoles o martes y jueves). Los hermanos no tienen descuento.
- **Se añadirá al aceptar el presupuesto:**
  - El NIF del titular en los recibos.
  - El número de Bizum en los mensajes de recordatorio. Hoy solo tenemos el teléfono de contacto, 635 576 114.
- **Se puede añadir:** el cobro de la **matrícula** y de la **licencia federativa** para campeonatos, con su propio recibo.
- **El horario es de ejemplo.** Se sustituye por el real cuando la escuela lo apruebe.
- **Versión real:**
  - Datos en un servidor de la Unión Europea, acceso con contraseña y copias de seguridad diarias.
  - Uso desde varios móviles a la vez.
  - Consentimiento de protección de datos firmado por cada familia, sin datos de salud de los menores.

## Enviar el PDF por WhatsApp

Los enlaces de WhatsApp (`wa.me`) solo admiten texto. Para adjuntar el PDF, la app usa el menú de compartir del móvil: se pulsa «Enviar PDF por WhatsApp», se elige WhatsApp y después el contacto. Funciona en el navegador del móvil y en la app instalada. En los navegadores que no lo permiten, el PDF se descarga y el recibo se puede mandar como texto.

Mejora posible: la API oficial de WhatsApp Business enviaría el PDF de forma automática al cobrar. Tiene un coste por mensaje y Meta tiene que verificar el negocio.

## Instalar en el móvil

Abre la web en el móvil:
- **Android (Chrome):** menú ⋮ → «Instalar aplicación» o «Añadir a pantalla de inicio».
- **iPhone (Safari):** botón de compartir → «Añadir a pantalla de inicio».

## Desarrollo

Sin compilación; todo es HTML, CSS y JS:
- `index.html`: página de presentación para la escuela (problema, cómo se cobra, funciones, aclaraciones y siguientes pasos). Con imagen de vista previa (`img/og.jpg`) para cuando se comparte el enlace por WhatsApp.
- `app/index.html`: la app, en un solo archivo.
- `app/manifest.webmanifest` y `app/sw.js`: para instalarla como app y para que funcione sin conexión. Al cambiar la app, sube la versión de `CACHE` en `sw.js`.
- `img/`: emblema, iconos y `capturas/` (pantallas de la app usadas en la presentación).
- El PDF se genera en el propio navegador con [jsPDF](https://github.com/parallax/jsPDF) 2.5.1, cargado desde cdnjs.

Para probarla en local:

```bash
python3 -m http.server 8766
```

Y abre http://localhost:8766 (presentación) o http://localhost:8766/app/ (demo).

Para reiniciar los datos de ejemplo: Ajustes (la rueda) → «Reiniciar demo».
