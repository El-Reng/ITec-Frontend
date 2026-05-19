Trabajo Práctico 01: JavaScript

Aplicación web tipo SPA que permita buscar álbumes, visualizar información y gestionar favoritos utilizando la API de Discogs.

Fase 1: Datos y persistencia
Puesta en común 29/04/2026

Objetivo
 Trabajar con datos, asincronía y almacenamiento.

Requisitos
  Implementar funciones para consumir la API:
    búsqueda de álbumes
    obtención de detalle
  Transformar los datos recibidos (no usar la respuesta cruda, filtrar datos importantes)
  Implementar localStorage:
    guardar favoritos
    recuperar favoritos al iniciar
    
Condiciones
  Manejar errores en las peticiones
  Separar lógica en funciones reutilizables
  Mostrar datos por la terminal
  Implementar todo en funciones

Fase 2: Renderizado (SPA)
Puesta en común 06/05/2026

Objetivo
  Mostrar información en pantalla de forma dinámica en una sola página.

Requisitos
  Mostrar resultados de búsqueda en el HTML
  Mostrar detalles de los álbumes
  Mostrar lista de favoritos
  Simular navegación sin cambiar de ruta

Condiciones
  Un solo index.html
  Todo el render ocurre dentro de un contenedor principal
  Separar funciones de render (lista, tarjeta, detalle)

Fase 3 FINAL: Estado, interacción y estilos
ENTREGA:  13/05/2026

Objetivo
  Gestionar el estado de la aplicación, interacción del usuario y presentación visual.

Requisitos
  Implementar una función central de renderizado

  Implementar eventos:
    búsqueda
    selección de álbum
    agregar/quitar favoritos
    navegación entre vistas de la SPA

  Cada interacción debe:
    actualizar el localStorage
    re-renderizar la interfaz

  Aplicar estilos utilizando Tailwind:
    estructura visual a decisión propia
    estados (hover, activo, carga)

Condiciones extra
  Entregar por GitHub