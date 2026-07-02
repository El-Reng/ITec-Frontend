# Task Manager

## Descripción

Task Manager es una aplicación desarrollada con React que consume una API creada con FastAPI para gestionar tareas.

La aplicación permite visualizar todas las tareas registradas, crear nuevas, editar tareas existentes, eliminarlas y consultar el detalle de una tarea mediante un GET por ID. Además, incorpora un sistema de favoritos utilizando LocalStorage para guardar las tareas seleccionadas por el usuario.

## Tecnologías utilizadas

* React
* Vite
* Axios
* Tailwind CSS
* FastAPI (Backend)

## Funcionalidades

* Listado de todas las tareas (GET)
* Consulta de una tarea por ID (GET)
* Creación de tareas (POST)
* Edición de tareas (PUT)
* Eliminación de tareas (DELETE)
* Sistema de favoritos mediante LocalStorage
* Interfaz desarrollada con componentes reutilizables

## Instalación y ejecución

1. Clonar el repositorio.

2. Instalar las dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Ejecutar el proyecto Backend desarrollado con FastAPI para que la aplicación pueda consumir la API.

## Autor

**Rojo Leonel**
